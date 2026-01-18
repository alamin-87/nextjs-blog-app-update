// error file
"use client";

import { useEffect } from "react";

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error in About page:", error);
  }, [error]);
  return (
    <div>
      <h1>About error</h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
