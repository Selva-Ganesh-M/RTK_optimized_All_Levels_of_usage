import React from "react";
import AddForm from "./components/AddForm";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PostsList>
                <AddForm />
              </PostsList>
            }
          />
          <Route exact path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
