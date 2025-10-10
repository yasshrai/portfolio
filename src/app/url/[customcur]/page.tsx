import { redirect } from "next/navigation"
import dbConnect from "@/lib/mongodb"
import { Url } from "@/models/Url"

export default async function UrlRedirectPage({
  params,
}: {
  params: { customcur: string }
}) {
  const { customcur } = params

  
    await dbConnect()

    const urlDoc = await Url.findOne({ customSlug: customcur })

    if (!urlDoc) {
      // If not found, redirect to homepage or your custom 404
      redirect("/")
    }

    // Increment click count
    await Url.updateOne(
      { _id: urlDoc._id },
      { $inc: { clickCount: 1 } }
    )


    // Redirect to the long URL
    redirect(urlDoc.longUrl)
  
}
