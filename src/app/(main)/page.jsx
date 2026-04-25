
import { redirect } from "next/navigation";
const category_id = "01";
export default async function Home() {
  redirect(`/category/${category_id}`)
}
