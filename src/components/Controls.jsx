export default function Controls({ onChangeModeCreate }) {
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
