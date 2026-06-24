import { memo } from "react";

const MyArticle = memo(function MyArticle({ title, desc, onChangeModeUpdate, onDelete }) {
  console.log("MyArticle Render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      {onChangeModeUpdate && <button onClick={onChangeModeUpdate}>수정</button>}
      {onDelete && <button onClick={onDelete}>삭제</button>}
    </section>
  );
});

export default MyArticle;
