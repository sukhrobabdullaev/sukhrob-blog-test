import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[94vh]">
      <div className="flex space-y-3 flex-col items-center justify-center">
        <div className="relative md:w-36 md:h-36 w-24 h-24">
          <Image
            src="/profile.jpg"
            alt="avatar"
            className="rounded-full object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-lg font-semibold">Sukhrob Abdullaev</h1>
        <div className="text-center flex flex-col md:text-base text-md">
          <span>A Software Engineer</span>
          <span> Computer Science enthusiast</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Link href="/blog">Read a blog</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/aboutme">About me</Link>
          </Button>
        </div>
        {/* <Button variant="secondary">
          <Link href="/projects">Projects</Link>
        </Button> */}
      </div>
    </main>
  );
}
