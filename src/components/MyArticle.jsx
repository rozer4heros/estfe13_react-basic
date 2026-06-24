import { memo } from "react";

const MyArticle = memo(function MyArticle({ title, desc, mode, onChangeModeUpdate }) {
  console.log("MyArticle Render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      {mode === "read" && (
        <>
          <button
            onClick={() => {
              onChangeModeUpdate();
            }}
          >
            수정
          </button>
          <button>삭제</button>
        </>
      )}
    </section>
  );
});

export default MyArticle;
