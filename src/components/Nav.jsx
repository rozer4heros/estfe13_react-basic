import { memo } from "react";

const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");

  const list = data.map((d) => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={(e) => {
          e.preventDefault();
          // onChangeMode(d.id);
          onChangeMode(e.target.dataset.id);
        }}
      >
        {d.title}
      </a>
    </li>
  ));

  return (
    <>
      <nav>
        <ul>{list}</ul>
      </nav>
    </>
  );
});

export default Nav;
