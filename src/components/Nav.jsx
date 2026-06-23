export default function Nav({ data }) {
  const list = data.map((d) => (
    <li key={d.id}>
      <a href="">{d.title}</a>
    </li>
  ));

  return (
    <>
      <nav>
        <ul>{list}</ul>
      </nav>
    </>
  );
}
