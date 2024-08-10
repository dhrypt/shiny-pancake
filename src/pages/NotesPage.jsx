import React from "react";
import { fakeData as notes } from "../assets/Fakedata";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
