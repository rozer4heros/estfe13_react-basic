export default function CreateArticle() {
  return (
    <>
      <h2>Create Article</h2>
      <form action="">
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea id="desc"></textarea>
        </div>
        {/* <div> */}
        {/* <label htmlFor=""></label> */}
        {/* <input type="text" /> */}
        {/* </div> */}
        <button>Submit</button>
      </form>
    </>
  );
}
