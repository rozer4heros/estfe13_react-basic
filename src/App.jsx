import "./App.css";
import { useState, useCallback } from "react";
import MyHeader from "./components/MyHeader.jsx";
import Nav from "./components/Nav.jsx";
import MyArticle from "./components/MyArticle.jsx";
import Controls from "./components/Controls.jsx";
import CreateArticle from "./components/CreateArticle.jsx";
import UpdateArticle from "./components/UpdateArticle.jsx";

function App() {
  console.log("App render");

  const [id, setId] = useState(1);
  const [mode, setMode] = useState("welcome");
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    { id: 1, title: "UI/UX 개발", desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현" },
    { id: 2, title: "재사용이 가능한 UI 개발", desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능" },
    { id: 3, title: "애니메이션 구현", desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현" },
  ]);
  const [maxId, setMaxId] = useState(content.length);

  const welcome = { title: "welcome", desc: "Welcome to react" };

  let _title = null;
  let _desc = null;
  let _article = null;

  if (mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <MyArticle title={_title} desc={_desc} mode={mode} />;
  } else if (mode === "read") {
    const selected = content.find((c) => c.id === id);
    if (selected) {
      _title = selected.title;
      _desc = selected.desc;
      _article = (
        <MyArticle
          title={_title}
          desc={_desc}
          mode={mode}
          onChangeModeUpdate={() => {
            setMode("update");
          }}
        />
      );
    }
  } else if (mode === "create") {
    _article = (
      <CreateArticle
        onSubmit={(_title, _desc) => {
          const newId = maxId + 1;
          let _content = content.concat({ id: newId, title: _title, desc: _desc });
          setContent(_content);
          setMaxId(newId);
          setId(newId);
          setMode("read");
        }}
      />
    );
  } else if (mode === "update") {
    const selected = content.find((c) => c.id === id);
    if (selected) {
      _title = selected.title;
      _desc = selected.desc;
      _article = (
        <UpdateArticle
          _title={_title}
          _desc={_desc}
          onSubmit={(_title, _desc) => {
            // Submit된 내용 반영하기 (미구현)
            setMode("read");
          }}
        />
      );
    }
  }

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

  return (
    <>
      <MyHeader title={subject.title} desc={subject.desc} onChangeMode={handleChangeModeWelcome} />
      <Nav data={content} onChangeMode={handleChangeModeRead} />
      {_article}
      <hr />
      <Controls onChangeModeCreate={handleChangeModeCreate} />
    </>
  );
}

export default App;
