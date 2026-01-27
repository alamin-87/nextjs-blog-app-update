import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";
import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";
import { postService } from "@/services/post.service";
import { Post } from "@/types";

export default async function createBlogPage() {
  const { data } = await postService.getPostService({}, { cache: "no-store" });
  return (
    <div>
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient></CreateBlogFormClient>
      {data?.data?.map((item: Post) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
