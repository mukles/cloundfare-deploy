import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  revalidateTag("my-tag"); // Revalidate all paths with the tag "my-tag"
  revalidatePath("/"); // Revalidate the homepage
}
