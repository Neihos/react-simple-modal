import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <h1>react-simple-modal demo</h1>

      <button type="button" onClick={() => setOpen(true)}>
        Open modal
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Demo modal">
        <p>This content comes from the parent via children.</p>
        <button type="button" onClick={() => alert("Clicked inside modal")}>
          Test inside click
        </button>
      </Modal>
    </div>
  );
}
