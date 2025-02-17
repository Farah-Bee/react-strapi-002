import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();

  return (
    <div className="category">
      <h2>Category: {name}</h2>
      <p>All articles related to {name}.</p>
    </div>
  );
};

export default Category;
