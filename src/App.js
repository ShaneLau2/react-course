import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/react-course/" element={<AllMeetupsPage />} />
          <Route path="/react-course/favorites" element={<FavoritesPage />} />
          <Route path="/react-course/new-meetup" element={<NewMeetupPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
