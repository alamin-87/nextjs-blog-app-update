import { redirect } from "next/navigation";

export default function adminPage() {
  return redirect("/dashboard/create-blog");
}
