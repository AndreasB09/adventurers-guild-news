import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import QuestBoardPage from './pages/QuestBoardPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/quests" element={<QuestBoardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;