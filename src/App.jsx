import React from "react";
import AddForm from "./components/AddForm";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import EditPost from "./components/EditPost";
import { useSelector } from "react-redux";
import { selectAll } from "./features/posts/postSlice";
import Test from "./components/Test";

const App = () => {
  const posts = useSelector(selectAll);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              // <Test />
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
