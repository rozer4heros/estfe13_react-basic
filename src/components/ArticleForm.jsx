function ArticleForm({ onSubmit }) {
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
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">설명: </label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="level">난이도: </label>
          <input type="text" name="level" id="level" />
        </div>
        <button>생성</button>
      </form>
    </>
  );
}

export default ArticleForm;
