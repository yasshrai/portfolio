import mongoose, { Schema, models, model } from "mongoose"

export interface UrlDocument {
  longUrl: string
  shortUrl: string
  customSlug: string
  uid?: string
  createdAt: Date
  updatedAt: Date
  clickCount: number
}

const UrlSchema = new Schema<UrlDocument>(
  {
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    customSlug: { type: String, required: true, unique: true, index: true },
    uid: { type: String },
    clickCount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

// In Next.js dev, the model can be cached with an older schema, causing new fields to be dropped.
// Force recompile the model if it already exists to ensure the latest schema is used.
if (mongoose.models.Url) {
  delete mongoose.models.Url
}
export const Url = model<UrlDocument>("Url", UrlSchema)
