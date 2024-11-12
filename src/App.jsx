import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ArticlePage from "./pages/ArticlePage/ArticlePage.jsx";
import ArticlesListPage from "./pages/ArticlesListPage/ArticlesListPage.jsx";
import QuestBoardPage from "./pages/QuestBoardPage/QuestBoardPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { QuestProvider } from "./context/QuestContext.jsx";

function App() {
  return (
    <QuestProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="articles" element={<ArticlesListPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/quests" element={<QuestBoardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </Router>
    </QuestProvider>
  );
}

export default App;
