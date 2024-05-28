import React, { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import Cbar from "../../header/content_bar/Cbar";
import Navbar from "../../header/navbar/Navbar";
import "./Tech.css";

const apiKey =
  import.meta.env.VITE_NEXT_PUBLIC_NEWS_API_KEY ||
  `6b8f28924dc140e1be1c59d61d075b32`;

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const Tech: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=tech&sortBy=publishedAt&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 24)); // Limit to 24 articles
      } catch (error) {
        console.error("Error fetching articles:", error);
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
      <Footer />
    </div>
  );
};

export default Tech;
