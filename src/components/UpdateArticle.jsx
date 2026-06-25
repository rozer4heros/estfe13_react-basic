import ArticleForm from "./ArticleForm";

function UpdateArticle({ title, desc, level, onSubmit }) {
  console.log("UpdateArticle render");

  return (
    <>
      <h2>Update Article</h2>
      <ArticleForm title={title} desc={desc} level={level} onSubmit={onSubmit} />
    </>
  );
}

export default UpdateArticle;
