import { useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./App.css";
import MyHeader from "./components/MyHeader.jsx";
import Nav from "./components/Nav.jsx";
import MyArticle from "./components/MyArticle.jsx";
import Controls from "./components/Controls.jsx";
import CreateArticle from "./components/CreateArticle.jsx";
import UpdateArticle from "./components/UpdateArticle.jsx";

function App() {
  console.log("App render");

  const [id, setId] = useState("");
  const [mode, setMode] = useState("welcome");
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    { id: "1", title: "UI/UX 개발", desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현", level: "4" },
    {
      id: "2",
      title: "재사용이 가능한 UI 개발",
      desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능",
      level: "2",
    },
    { id: "3", title: "애니메이션 구현", desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현", level: "3" },
  ]);

  const welcome = { title: "Welcome", desc: "Welcome to react" };

  let _title = null;
  let _desc = null;
  let _level = null;
  let _article = null;

  const selectedArticle = useMemo(() => content.find((item) => item.id === id), [content, id]);

  const handleChangeModeWelcome = useCallback(() => {
    setMode("welcome");
  }, []);
  const handleChangeModeRead = useCallback((_id) => {
    setMode("read");
    setId(_id);
  }, []);
  const handleChangeModeCreate = useCallback(() => {
    setMode("create");
  }, []);
  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요?")) {
      setContent((prev) => prev.filter((item) => item.id !== id));
      setMode("welcome");
    }
  };
  const handleSubmitCreate = (_title, _desc, _level) => {
    const newId = uuidv4();
    let _content = content.concat({ id: newId, title: _title, desc: _desc, level: _level });
    setContent(_content);
    setId(newId);
    setMode("read");
  };
  const handleSubmitUpdate = (_title, _desc, _level) => {
    setContent((prev) => prev.map((p) => (p.id === id ? { ...p, title: _title, desc: _desc, level: _level } : p)));
    setMode("read");
  };

  const renderArticle = () => {
    switch (mode) {
      case "read":
        return (
          <MyArticle
            title={selectedArticle?.title ?? "Title"}
            desc={selectedArticle?.desc}
            level={selectedArticle?.level}
            onChangeModeUpdate={() => {
              setMode("update");
            }}
            onDelete={handleDelete}
          />
        );
        break;
      case "create":
        return <CreateArticle onSubmit={handleSubmitCreate} />;
        break;
      case "update":
        return (
          <UpdateArticle
            title={selectedArticle?.title ?? "Title"}
            desc={selectedArticle?.desc}
            level={selectedArticle?.level}
            onSubmit={handleSubmitUpdate}
          />
        );
        break;
      default: // case "welcome":
        if (mode !== "welcome") console.error(`mode에 잘못된 값 "${mode}"가 할당됨`);
        return <MyArticle title={welcome.title} desc={welcome.desc} />;
    }
  };

  return (
    <>
      <MyHeader title={subject.title} desc={subject.desc} onChangeMode={handleChangeModeWelcome} />
      <Nav id={id} data={content} onChangeMode={handleChangeModeRead} />
      {renderArticle()}
      <hr />
      <Controls onChangeModeCreate={handleChangeModeCreate} />
    </>
  );
}

export default App;
