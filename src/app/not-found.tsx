import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh_-_90px)] w-full flex-col items-center justify-center gap-4">
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </section>
  );
}
