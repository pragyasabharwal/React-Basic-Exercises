import { useState } from "react";

export function LikeList() {
  const [list, setList] = useState([
    {
      text: "I will be going on a vacation!",
      id: 1,
      likedStatus: false
    },
    {
      text: "I am feeling sick..",
      id: 2,
      likedStatus: false
    }
  ]);

  function likeHandler(id, likedStatus) {
    setList((list) =>
      list.map((item) => {
        if (item.id === id) {
          return { ...item, likedStatus: !likedStatus };
        }
        return item;
      })
    );
  }

  function RenderList() {
    return list.map(({ text, id, likedStatus }) => (
      <>
        <div style={{ margin: "1em" }}>{text}</div>{" "}
        <button onClick={() => likeHandler(id, likedStatus)}>
          {" "}
          {likedStatus === false ? "like" : "liked"}{" "}
        </button>
      </>
    ));
  }

  return (
    <div className="App">
      <h1> Like list </h1>
      <RenderList />
    </div>
  );
}
