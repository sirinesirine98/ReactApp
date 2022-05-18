import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    };
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
  
      getPosts();
    }, [deletePost]);
  
    return (
        <div className="homePage">
          {postLists.map((post) => {
            return (
              <div className="post">
                <div className="postHeader">
                  <div className="title">
                  <h3 > {post.title} </h3>
                  </div>
                 
                </div>
        
                <div className="postTextContainer"> {post.postText} </div>
                <h5>@{post.author.name}</h5>
              </div>
            );
          })}
        </div>
      );
    }
export default Home;