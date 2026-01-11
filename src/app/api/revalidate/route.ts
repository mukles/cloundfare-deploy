import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  revalidatePath("/"); // Revalidate the homepage
}
