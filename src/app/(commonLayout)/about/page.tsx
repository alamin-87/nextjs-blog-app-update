"use client"
import { getPostAction } from "@/actions/post.action";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { any } from "zod";
// export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function About() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const [data, setData] = useState<{ data: unknown; error: null; } | { data: null; error: { message: unknown; }; }>();
  useEffect(() => {
    (async () => {
      const data = await getPostAction();
      setData(data);
    })();
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <Button>Click ME</Button>
    </div>
  );
}
