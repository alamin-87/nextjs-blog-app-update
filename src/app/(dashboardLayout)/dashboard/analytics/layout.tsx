import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Button asChild>
          <Link href="/dashboard/analytics/weekly" className="text-black">weekly</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/analytics/monthly" className="text-black">Monthly</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
