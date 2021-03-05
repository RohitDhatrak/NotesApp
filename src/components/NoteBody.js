import React, { useRef, HTMLTextAreaElement, useEffect } from "react";

function NoteBody({ note, setNote, setInpFlag, modal }) {
    let multilineTextBody = useRef < HTMLTextAreaElement > null;

    useEffect(() => {
        if (multilineTextBody) {
            multilineTextBody.style.height = "20px";
            multilineTextBody.style.height =
                multilineTextBody.scrollHeight + "px";
        }
    });

    return (
        <textarea
            className="note-taker-body"
            placeholder="Take a note..."
            type="text"
            onClick={() => (setInpFlag ? setInpFlag(true) : "")}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            ref={(ref) => (multilineTextBody = ref)}
            value={note.body}
        />
    );
}

export default NoteBody;
