import mongoose, { Schema, models, model } from "mongoose"

export interface PostDocument {
  title: string
  summary: string
  content: string
  imageKey?: string
  imageUrl?: string
  uid?: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

const PostSchema = new Schema<PostDocument>(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    imageKey: { type: String },
    imageUrl: { type: String },
    uid: { type: String },
    slug: { type: String, required: true, unique: true, index: true },
  },
  { timestamps: true }
)

// In Next.js dev, the model can be cached with an older schema, causing new fields (e.g., slug) to be dropped.
// Force recompile the model if it already exists to ensure the latest schema is used.
if (mongoose.models.Post) {
  delete mongoose.models.Post
}
export const Post = model<PostDocument>("Post", PostSchema)
