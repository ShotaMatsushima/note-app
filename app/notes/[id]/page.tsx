import Link from "next/link";
import Note from "./Note";
import { getDetailNote } from "@/lib/clients";

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getDetailNote(params.id);
  return (
    <main>
      <Link href="/notes">←back</Link>
      <h2 className="my-4 text-gray-400 text-xs">View Note</h2>
      <Note note={note} />
    </main>
  );
}
