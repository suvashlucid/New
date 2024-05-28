import React, { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import Cbar from "../../header/content_bar/Cbar";
import Navbar from "../../header/navbar/Navbar";
import "./News.css";

const apiKey =
  (import.meta.env as { VITE_NEXT_PUBLIC_NEWS_API_KEY: string })
    .VITE_NEXT_PUBLIC_NEWS_API_KEY || `db1c0a34077943c0846e008e96c8a772`;

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if (!apiKey) {
          throw new Error("API key is undefined");
        }

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        if (!data.articles) {
          throw new Error("Articles data is undefined");
        }

        setArticles(data.articles.slice(0, 23)); // Limit to 23 articles
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("An error occurred while fetching articles");
        console.log(apiKey);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(
    (article) => article.description && article.urlToImage
  );

  return (
    <div>
      <Navbar />
      <Cbar />
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="tech-container">
          {filteredArticles.map((article, index) => (
            <div className={`tech-item sgrid sgrid${index + 1}`} key={index}>
              <img
                className="simg"
                src={article.urlToImage}
                alt={article.title}
              />
              <div className="tech-content">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default News;
