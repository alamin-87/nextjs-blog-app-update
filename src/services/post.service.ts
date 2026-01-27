import { env } from "@/env";
import { error } from "console";
import { cookies } from "next/headers";
import { object } from "zod";

const API_URL = env.API_URL;

// No Dynamic and no {cache:no-store}: SSG -> static page
// {cache:no-store} : SSR --> Dynamic page
// next:{revalidate:10}: ISR --> Mix between static and dynamic
interface getPostParams {
  isFeatured?: boolean;
  search?: string;
  page?: string;
  limit?: string;
}
interface options {
  cache?: RequestCache;
  revalidate?: number;
}
export interface BlogData {
  title: string;
  content: string;
  tag?: string[];
}
export const postService = {
  getPostService: async function (params?: getPostParams, options?: options) {
    try {
      const url = new URL(`${API_URL}/posts`);
      //   url.searchParams.append("Key", "Value");
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }
      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }
      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      config.next = { ...config.next, tags: ["blogPost"] };
      const res = await fetch(url.toString(), config);
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: err } };
    }
  },
  getPostById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Not found data" } };
    }
  },
  createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: { message: "Error: Post not created." },
        };
      }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
