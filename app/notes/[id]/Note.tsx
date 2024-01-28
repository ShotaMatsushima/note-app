import React from "react";
import { Note } from "../types";
import parser from "html-react-parser";

type NoteProps = {
  note: Note;
};

const Note = ({ note }: NoteProps) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg p-5 gap-2.5">
      <h3 className="text-pink-500 text-lg md:test-xl font-semibold">
        {note.title}
      </h3>
      <h3>testt</h3>
      {parser(note.content)}
    </div>
  );
};

export default Note;
