import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return (
    <div className="article">
      <h2>Article {id}</h2>
      <p>This is a detailed article page.</p>
    </div>
  );
};

export default Article;
