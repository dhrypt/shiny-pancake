import { useEffect, useContext } from "react";
import { db } from "../appwrite/databases";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.notes.list();
    setNotes(response.documents);
  };

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
};

export default NotesPage;
