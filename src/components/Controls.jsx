import { memo } from "react";

const Controls = memo(function Controls({ onChangeModeCreate }) {
  console.log("Controls render");

  return (
    <div className="menu">
      <button
        className="btn btn-primary"
        onClick={(e) => {
          onChangeModeCreate();
        }}
      >
        Create
      </button>
    </div>
  );
});

export default Controls;
