import Link from "next/link";
import Image from "next/image";
import { Eye, MessageCircle, Split } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/types";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { cookies } from "next/headers";
import { toast } from "sonner";
import { revalidateTag, updateTag } from "next/cache";
const API_URL = env.API_URL;
export default function CreateBlogFormServer() {
  const createBlog = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;
    const blogData = {
      title,
      content,
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/posts`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });
    console.log(res);
    if (res.ok) {
      revalidateTag("blogPost", "max");
    //   updateTag("blogPost");
    }
  };
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
          create blog
        </CardTitle>
        <CardDescription>you can write your blog here</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                type="text"
                name="title"
                placeholder="Blog title"
                required
              ></Input>
            </Field>
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your Blog"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="tags">Tags</FieldLabel>
              <Input type="text" name="tags" placeholder="nextjs, web"></Input>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <Button form="blog-form" type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
