import { useState } from "react";

const Dislike = () => {
  const [dislikeCount, setDislikeCount] = useState(0);

  const dislike = () => {
    return setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="gray_border dislike_padding">
      <button className="text_xl" onClick={dislike}>
        👎
      </button>
      <p>Dislikes: {dislikeCount}</p>
    </div>
  );
};

export default Dislike;
