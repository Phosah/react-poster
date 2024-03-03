import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </>
    </>
  );
}

export default App;
