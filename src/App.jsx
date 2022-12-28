import React from "react";
import AddForm from "./components/AddForm";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <div>
      <PostsList>
        <AddForm />
      </PostsList>
    </div>
  );
};

export default App;
