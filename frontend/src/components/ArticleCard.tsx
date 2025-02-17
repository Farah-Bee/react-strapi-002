import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  summary: string;
  slug: string;
  category: string;
  imageUrl: string;
  published: string;
}

const ArticleCard = ({ title, summary, slug, category, imageUrl, published }: ArticleCardProps) => {
  return (
    <div className="article-card">
      {imageUrl && <img src={imageUrl} alt={title} className="article-image" />}
      <div className="article-content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <p className="article-meta">
          <span>{category}</span> | <span>{new Date(published).toDateString()}</span>
        </p>
        <Link to={`/article/${slug}`} className="read-more">Read More</Link>
      </div>
    </div>
  );
};

export default ArticleCard;
