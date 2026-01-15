import { Button } from "@/components/ui/button";


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Contact layout</h1>
      {children}
      <h2>footer</h2>
    </div>
  );
}