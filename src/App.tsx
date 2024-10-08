import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewsFeed from './pages/NewsFeed';
import ArticleView from './pages/ArticleView';
import ArticleEditor from './pages/ArticleEditor';
import GroupList from './pages/GroupList';
import GroupDetail from './pages/GroupDetail';
import CourseCatalog from './pages/CourseCatalog';
import CourseView from './pages/CourseView';
import SearchResults from './pages/SearchResults';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news-feed" element={<NewsFeed />} />
            <Route path="/article/:id" element={<ArticleView />} />
            <Route path="/article/edit/:id?" element={<ArticleEditor />} />
            <Route path="/groups" element={<GroupList />} />
            <Route path="/group/:id" element={<GroupDetail />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/course/:id" element={<CourseView />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
