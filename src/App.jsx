import CreatePage from "@/pages/create/CreatePage";
import HomePage from "@/pages/home/HomePage";
import ListPage from "@/pages/list/ListPage";
import MessagePage from "@/pages/message/MessagePage";
import PostPage from "@/pages/post/PostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // ROUTER 경로 설정 미리 해두었어요.
    // Header나 버튼 겹치는 페이지는 Layout에서 공용컴포넌트 넣고
    // Outlet으로 페이지 내용만 바꿔주는 형식을 하고 싶어요.

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post">
          <Route index element={<CreatePage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/edit" element={<PostPage page="edit" />} />
          <Route path=":id/message" element={<MessagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
