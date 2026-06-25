import { useState } from "react";

function ArticleForm({ title, desc = "", level = "", onSubmit }) {
  const [content, setContent] = useState({
    title: title ? title : "",
    desc: desc,
    level: level,
  });

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
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.target.title.value) {
            alert("제목이 필요합니다!");
          } else {
            onSubmit(e.target.title.value, e.target.desc.value, e.target.level.value);
          }
        }}
      >
        <div>
          <label htmlFor="title">제목: </label>
          <input type="text" name="title" id="title" value={content.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="desc">설명: </label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="level">난이도: </label>
          <input type="text" name="level" id="level" value={content.level} onChange={handleChange} />
        </div>
        <button className="btn btn-secondary btn-sm">{title ? "수정" : "생성"}</button>
      </form>
    </>
  );
}

export default ArticleForm;
