import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults, isLoading, fetchError } = useContext(DataContext)
  return (
    <main className="Home">
      {isLoading  &&  <p className="statusMsg" style={{color:'#8c21be'}}>Loading posts...</p>}
      {fetchError &&  <p className="statusMsg" style={{color:'red'}}>{fetchError}</p>}
      {!isLoading &&  !fetchError && (searchResults.length ? <Feed posts={searchResults}/> : <p className="statusMsg"> No posts</p>)}
    </main>
  );
};

export default Home;
