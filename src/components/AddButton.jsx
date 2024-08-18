import { useRef } from "react";
import Plus from "../icons/Plus";
import { db } from "../appwrite/databases";

const AddButton = () => {
  const startingPos = useRef(10);

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startingPos.current,
        y: startingPos.current,
      }),
      colors: JSON.stringify(colors[0]),
    };

    const response = await db.notes.create(payload);
  };

  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
};

export default AddButton;
