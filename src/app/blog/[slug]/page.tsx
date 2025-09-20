import { notFound } from "next/navigation"
import Image from "next/image"
import dbConnect from "@/lib/mongodb"
import { Post } from "@/models/Post"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  await dbConnect()
  const post = await Post.findOne({ slug: params.slug }, { title: 1, summary: 1, imageUrl: 1 }).lean()
  if (!post) return { title: "Post not found" }
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  await dbConnect()
  const post = await Post.findOne(
    { slug: params.slug },
    { title: 1, summary: 1, content: 1, imageUrl: 1, createdAt: 1 }
  ).lean()

  if (!post) return notFound()

  return (
    <main className="flex min-h-screen w-screen flex-col bg-gradient-to-b from-black to-zinc-950 px-4 text-white md:px-8">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-white/2 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-zinc-500/3 blur-[120px]" />
      </div>

      <div className="z-10 mx-auto mt-16 w-full max-w-3xl">
        {post.imageUrl && (
          <div className="relative mb-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="relative aspect-video w-full">
              <Image
                src={post.imageUrl as string}
                alt={post.title as string}
                fill
                sizes="100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        )}

        <h1 className="text-3xl font-bold md:text-4xl">{post.title as string}</h1>
        <p className="mt-2 text-sm text-zinc-400">{new Date(post.createdAt as Date).toLocaleDateString()}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur">yash rai</span>
        </div>

        <article className="prose prose-invert mt-6 max-w-none">
          <p className="text-zinc-300 whitespace-pre-wrap">{post.content as string}</p>
        </article>
      </div>
    </main>
  )
}
