import React from "react";

function LabelSelector({ note, labelList, changeProperty }) {
    return (
        <div className="label-container">
            <span className="label-link label-selector">
                {note.label === "None" || note.label === ""
                    ? "Add Label"
                    : note.label}
            </span>

            <div className="label-options">
                {labelList.map((label) => (
                    <div
                        className="label-select"
                        onClick={(e) =>
                            label === "None"
                                ? changeProperty("", "label")
                                : changeProperty(e.target.textContent, "label")
                        }
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LabelSelector;
