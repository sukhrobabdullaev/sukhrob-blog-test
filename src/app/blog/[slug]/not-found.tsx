import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-cyan-500 text-lg underline">
        Return Home
      </Link>
    </div>
  );
}
