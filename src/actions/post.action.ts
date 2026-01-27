"use server";
import { BlogData, postService } from "@/services/post.service";
import { updateTag } from "next/cache";

export const getPostAction = async () => {
  return await postService.getPostService();
};
export const createBlogPost = async (data: BlogData) => {
  const res = await postService.createBlogPost(data);
  updateTag("blogPosts");
  return res;
};
