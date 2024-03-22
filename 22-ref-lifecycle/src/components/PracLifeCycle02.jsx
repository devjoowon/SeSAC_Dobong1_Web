import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PracLifeCycle02() {
  const [posts, setPosts] = useState([]);

  // useEffect는 async await를 지원하지 않기 때문에 함수로 따로 만들어야 함 (밑에는 .then 사용)
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   setPosts(response.data);
    // });
    getPosts();
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
