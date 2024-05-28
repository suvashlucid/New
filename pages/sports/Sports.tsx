import React, { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import Cbar from "../../header/content_bar/Cbar";
import Navbar from "../../header/navbar/Navbar";
import "./Sports.css";
const apiKey = import.meta.env.VITE_NEXT_PUBLIC_NEWS_API_KEY;

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const Sports: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${apiKey}`
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
      <div className="sportsmain">
        {filteredArticles.map((article, index) => (
          <div className={`sgrid${index + 1}`} key={index}>
            <img
              className="simg1"
              src={article.urlToImage}
              alt="cricket"
              height={240}
              width={240}
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <hr />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
