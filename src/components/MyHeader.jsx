import Style from "./MyHeader.module.css";
import { memo } from "react";

const MyHeader = memo(function MyHeader({ title, desc, onChangeMode }) {
  console.log("MyHeader render");
  return (
    <header>
      <h1
        className={Style.logo}
        onClick={() => {
          onChangeMode();
        }}
      >
        {title}
      </h1>
      <p>{desc}</p>
    </header>
  );
});

export default MyHeader;
