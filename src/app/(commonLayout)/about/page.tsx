import { Button } from "@/components/ui/button";
export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1>About Page</h1>
      <Button>Click ME</Button>
    </div>
  );
}
