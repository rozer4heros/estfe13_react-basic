function UpdateArticle({ _title, _desc, onSubmit }) {
  console.log("UpdateArticle render");

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" defaultValue={_title} />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" defaultValue={_desc}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default UpdateArticle;
