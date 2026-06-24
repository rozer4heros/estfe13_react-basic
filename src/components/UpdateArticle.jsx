import { useState } from "react";

function UpdateArticle({ title, desc, level, onSubmit }) {
  console.log("UpdateArticle render");

  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);
  const [content, setContent] = useState({
    title: title,
    desc: desc,
    level: level,
  });

  // const handleChangeTitle = (e) => {
  //   setNewTitle(e.target.value);
  // };
  // const handleChangeDesc = (e) => {
  //   setNewDesc(e.target.value);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!content.title) {
            alert("제목이 필요합니다!");
          } else {
            onSubmit(content.title, content.desc, content.level);
          }
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" value={content.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="level">level</label>
          <input type="text" name="level" id="level" value={content.level} onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default UpdateArticle;
