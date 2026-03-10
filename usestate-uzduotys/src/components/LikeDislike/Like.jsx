import { useState } from "react";

const Like = () => {
  const [likeCount, setLikeCount] = useState(0);

  const like = () => {
    return setLikeCount(likeCount + 1);
  };

  return (
    <div className="gray_border p-5">
      <button className="text_xl" onClick={like}>
        👍
      </button>
      <p>Likes: {likeCount}</p>
    </div>
  );
};

export default Like;
