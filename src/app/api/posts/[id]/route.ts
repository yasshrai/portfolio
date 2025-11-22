import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import { Post } from "@/models/Post"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()
    const post = await Post.findById(params.id).lean()
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ post })
  } catch (err) {
    console.error("GET /api/posts/[id] error", err)
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json()
    const { title, summary, content, imageKey, imageUrl, slug: rawSlug, author } = body || {}

    if (!title || !summary || !content || !rawSlug || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await dbConnect()

    // Create a URL-friendly slug from the input
    const toSlug = (str: string) =>
      str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80)

    const slug = toSlug(rawSlug)
    if (!slug) {
      return NextResponse.json({ error: "Invalid slug" }, { status: 400 })
    }

    // Check if slug is already taken by another post
    const existingPost = await Post.findOne({ slug, _id: { $ne: params.id } })
    if (existingPost) {
      return NextResponse.json({ error: "A post with the same slug already exists" }, { status: 409 })
    }

    const updatedPost = await Post.findByIdAndUpdate(
      params.id,
      { title, summary, content, imageKey, imageUrl, author, slug },
      { new: true, runValidators: true }
    )

    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ id: updatedPost._id, post: updatedPost }, { status: 200 })
  } catch (err: any) {
    console.error("PUT /api/posts/[id] error", err)
    if (err?.code === 11000) {
      return NextResponse.json({ error: "A post with the same slug already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
  }
}

