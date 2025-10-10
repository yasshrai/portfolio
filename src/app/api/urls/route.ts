import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import { Url } from "@/models/Url"

// POST - Create a new URL mapping
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { longUrl, customSlug, uid } = body || {}

    if (!longUrl || !customSlug) {
      return NextResponse.json({ error: "Missing required fields: longUrl and customSlug" }, { status: 400 })
    }

    // Basic URL validation
    try {
      new URL(longUrl)
    } catch {
      return NextResponse.json({ error: "Invalid long URL format" }, { status: 400 })
    }

    await dbConnect()

    // Check if custom slug already exists
    const existingUrl = await Url.findOne({ customSlug })
    if (existingUrl) {
      return NextResponse.json({ error: "Custom slug already exists" }, { status: 409 })
    }

    // Generate short URL (you can customize this logic)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const shortUrl = `${baseUrl}/url/${customSlug}`

    const doc = await Url.create({
      longUrl,
      shortUrl,
      customSlug,
      uid
    })

    return NextResponse.json({
      id: doc._id,
      longUrl: doc.longUrl,
      shortUrl: doc.shortUrl,
      customSlug: doc.customSlug,
      clickCount: doc.clickCount,
      createdAt: doc.createdAt
    }, { status: 201 })
  } catch (err: any) {
    console.error("POST /api/urls error", err)
    if (err?.code === 11000) {
      return NextResponse.json({ error: "Custom slug already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Failed to create URL mapping" }, { status: 500 })
  }
}

// GET - Check if custom slug is available
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const customSlug = searchParams.get("slug")

    if (!customSlug) {
      return NextResponse.json({ error: "Slug parameter is required" }, { status: 400 })
    }

    await dbConnect()

    const existingUrl = await Url.findOne({ customSlug })
    const isAvailable = !existingUrl

    return NextResponse.json({ available: isAvailable })
  } catch (err) {
    console.error("GET /api/urls error", err)
    return NextResponse.json({ error: "Failed to check slug availability" }, { status: 500 })
  }
}
