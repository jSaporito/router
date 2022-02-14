import React from "react";
import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
export const EditPost = () => {
  const {
    posts,
    handleEdit,
    editBody,
    editTitle,
    setEditBody,
    setEditTitle,
  } = useContext(DataContext)

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h1>Edit Post</h1>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Title:</label>
            <input
              id="editTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="editBody">Post: </label>
            <textarea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>Edit</button>
          </form>
        </>
      )} 
    </main>
  );
};

export default EditPost