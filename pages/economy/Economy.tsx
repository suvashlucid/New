import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import Cbar from "../../header/content_bar/Cbar";
import Navbar from "../../header/navbar/Navbar";
import "./Economy.css";

const apiKey: string | undefined = import.meta.env
  .VITE_NEXT_PUBLIC_NEWS_API_KEY; // Use environment variable
const query: string = "economy";

const URL = (query: string) =>
  `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    query
  )}&sortBy=publishedAt&apiKey=${apiKey}`;

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

function Economy() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!apiKey) {
      console.error("API key not found!");
      return;
    }

    axios
      .get(URL(query))
      .then((response) => {
        setArticles(response.data.articles.slice(0, 15)); // Limit to 15 articles
      })
      .catch((error) => {
        console.error("Error fetching the news articles", error);
      });
  }, []);

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Cbar />
      <div className="main">
        {articles.map((article, index) => (
          <div key={index} className={`news_item news_item${index + 1}`}>
            <div>
              <img
                className="news_img"
                src={article.urlToImage || "https://via.placeholder.com/400"}
                alt={article.title}
                height="200px"
                width="100%"
              />
            </div>
            <div className="news_content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>{new Date(article.publishedAt).toLocaleTimeString()}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Economy;
