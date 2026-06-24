import { useState } from "react";

function UpdateArticle({ title, desc, onSubmit }) {
  console.log("UpdateArticle render");
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setNewDesc(e.target.value);
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(newTitle, newDesc);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" value={newTitle} onChange={handleChangeTitle} />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={newDesc} onChange={handleChangeDesc}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default UpdateArticle;
