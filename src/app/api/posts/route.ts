import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import { Post } from "@/models/Post"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, summary, content, imageKey, imageUrl, uid, slug: rawSlug } = body || {}

    if (!title || !summary || !content || !rawSlug) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await dbConnect()

    // Create a URL-friendly slug from the title
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
    if (await Post.exists({ slug })) {
      return NextResponse.json({ error: "A post with the same slug already exists" }, { status: 409 })
    }

    const doc = await Post.create({ title, summary, content, imageKey, imageUrl, uid, slug })

    return NextResponse.json({ id: doc._id, post: doc }, { status: 201 })
  } catch (err: any) {
    console.error("POST /api/posts error", err)
    if (err?.code === 11000) {
      return NextResponse.json({ error: "A post with the same slug already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}

export async function GET() {
  try {
    await dbConnect()
    const posts = await Post.find({}, {
      title: 1,
      summary: 1,
      imageUrl: 1,
      slug: 1,
      createdAt: 1,
    })
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ posts })
  } catch (err) {
    console.error("GET /api/posts error", err)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}
