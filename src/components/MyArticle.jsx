export default function MyArticle({ title, desc }) {
  console.log("MyArticle Render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </section>
  );
}
