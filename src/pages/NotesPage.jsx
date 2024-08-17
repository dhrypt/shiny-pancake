import { useEffect, useContext } from "react";
import { db } from "../appwrite/databases";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

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
        <NoteCard key={note.$id} note={note} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
