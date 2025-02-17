// Home.tsx
import { useEffect, useState } from "react";
import { fetchArticles } from "../services/strapi";

interface Article {
  id: number;
  documentId: string;
  Title: string;
  Slug: string;
  Content: { type: string; text: string }[]; // Ensure we are fetching content
  Image?: { url: string };
}

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedArticles = await fetchArticles();
        console.log("Processed articles:", fetchedArticles);
        if (Array.isArray(fetchedArticles)) {
          setArticles(fetchedArticles);
        } else {
          setError("Invalid data format from API.");
        }
      } catch (err) {
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {loading && <p>Loading articles...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.Title || "No Title"}</h2>
              {article.Image && (
                <img
                  src={`http://localhost:1337${article.Image.url}`}
                  alt={article.Title}
                  style={{ width: "100%", maxWidth: "500px" }}
                />
              )}
              <p>
                {article.Content.length > 0
                  ? article.Content.map((c, index) => (
                      <span key={index}>{c.text} </span>
                    ))
                  : "No Content"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No articles available.</p>
      )}
    </div>
  );
};

export default Home;
