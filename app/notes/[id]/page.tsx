import Link from "next/link";
import Note from "./Note";

export default function Page() {
  return (
    <main>
      <Link href="/notes">←back</Link>
      <h2 className="my-4 text-gray-400 text-xs">View Note</h2>
      <Note />
    </main>
  );
}
