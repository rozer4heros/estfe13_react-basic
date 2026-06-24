function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");

  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.target.title.value) {
            alert("제목이 필요합니다!");
          } else {
            onSubmit(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
          }
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">difficulty</label>
          <input type="text" name="difficulty" id="difficulty" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default CreateArticle;
