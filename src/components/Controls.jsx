export default function Controls({ onChangeModeCreate }) {
  console.log("Controls render");

  return (
    <div className="menu">
      <button
        onClick={(e) => {
          onChangeModeCreate();
        }}
      >
        Create
      </button>
    </div>
  );
}
