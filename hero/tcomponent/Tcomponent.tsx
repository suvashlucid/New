import axios from "axios"; // Add this import
import { useEffect, useState } from "react";
import "../tcomponent/Tcomponent.css";

const apiKey: string | undefined = import.meta.env
  .VITE_NEXT_PUBLIC_NEWS_API_KEY;
const query: string = "latest news";
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

function Tcomponent() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(URL(query))
      .then((response) => {
        setArticles(response.data.articles.slice(0, 5)); // Limit to 5 articles
      })
      .catch((error) => {
        console.error("Error fetching the news articles", error);
      });
  }, []);

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div className="first">
        <div>
          <img
            className="immg1"
            src={articles[0]?.urlToImage || "https://via.placeholder.com/400"}
            alt={articles[0]?.title}
            height="360px"
            width="100%"
          />
        </div>

        <div className="news_content1">
          <h3>{articles[0]?.title}</h3>
          <p>{articles[0]?.description}</p>
          <p>{new Date(articles[0]?.publishedAt).toLocaleTimeString()}</p>
          <hr />
        </div>
      </div>
      <div className="second">
        <img
          className="immmg1"
          src={articles[1]?.urlToImage || "https://via.placeholder.com/400"}
          alt={articles[1]?.title}
          height="400px"
          width="100%"
        />
        <div className="news_contents2">
          <h3>{articles[1]?.title}</h3>
          <p>{articles[1]?.description}</p>
        </div>
      </div>

      <div className="third">
        {articles.slice(2, 5).map((article, index) => (
          <div key={index} className={`news_contents3.${index + 1}`}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{new Date(article.publishedAt).toLocaleTimeString()}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tcomponent;
