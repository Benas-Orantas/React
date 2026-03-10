import "./LikeDislike.css"
import Like from "./Like";
import Dislike from "./Dislike";

const LikeDislike = () => {
  return (
    <section className="like-dislike_component component">
      <h3>Likes & Dislikes</h3>
      <div className="flex_center flex-row gap-2">
        <Like />
        <Dislike />
      </div>
    </section>
  );
};

export default LikeDislike;
