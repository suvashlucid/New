import axios from "axios";
import { useEffect, useState } from "react";
import "./Midbreaker.css";

const query = "latest news";

const apiKey = import.meta.env.VITE_NEXT_PUBLIC_NEWS_API_KEY;
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

function Midbreaker() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!apiKey) {
      console.error("API key not found!");
      return;
    }

    axios
      .get(URL(query))
      .then((response) => {
        const filteredArticles = response.data.articles.filter(
          (article: Article) => article.description && article.urlToImage
        );
        setArticles(filteredArticles);
      })
      .catch((error) => {
        console.error("Error fetching the news articles", error);
      });
  }, []);

  return (
    <div className="nonused">
      <div className="textbreakerr">
        <h3 className="textmb"> {articles[0]?.title} </h3>
      </div>

      <div className="Midbreaker">
        <div className="mbreaker1">
          <div className="mnews_content1">
            <h2>{articles[0]?.title}</h2>
            <p>{articles[0]?.description}</p>
            <hr />
          </div>
          <img
            className="mimmg1"
            src={articles[0]?.urlToImage || "https://via.placeholder.com/400"}
            alt={articles[0]?.title}
            height="200px"
            width="535px"
          />
        </div>
        <div className="mbreaker2">
          {articles.slice(1, 4).map((article, index) => (
            <div key={index} className="mnews_content2">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>{new Date(article.publishedAt).toLocaleTimeString()}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className="mbreaker3">
          <img
            className="mimmg3"
            src={articles[4]?.urlToImage || "https://via.placeholder.com/150"}
            alt={articles[4]?.title}
            height="150px"
            width="150px"
          />
          <div className="mnews_content3">
            <h2>{articles[4]?.title}</h2>
            <p>{articles[4]?.description}</p>
            <p>{new Date(articles[4]?.publishedAt).toLocaleTimeString()}</p>
            <hr />
          </div>
        </div>

        <div className="mbreaker4">
          <img
            className="mimmg4"
            src={articles[5]?.urlToImage || "https://via.placeholder.com/150"}
            alt={articles[5]?.title}
            height="150px"
            width="150px"
          />
          <div className="mnews_content4">
            <h2>{articles[5]?.title}</h2>
            <p>{articles[5]?.description}</p>
            <p>{new Date(articles[5]?.publishedAt).toLocaleTimeString()}</p>
            <hr />
          </div>
        </div>
        <div className="mbreaker5">
          <img
            className="mimmg4"
            src={articles[6]?.urlToImage || "https://via.placeholder.com/150"}
            alt={articles[6]?.title}
            height="150px"
            width="150px"
          />
          <div className="mnews_content5">
            <h2>{articles[6]?.title}</h2>
            <p>{articles[6]?.description}</p>
            <hr />
          </div>
        </div>
        <div className="mdiv22">
          <h2>{articles[7]?.title}</h2>
          <p>{articles[7]?.description}</p>
          <p>{new Date(articles[7]?.publishedAt).toLocaleTimeString()}</p>
          <hr />
        </div>
        <div className="mdiv66">
          <h2>{articles[8]?.title}</h2>
          <p>{articles[8]?.description}</p>
          <p>{new Date(articles[8]?.publishedAt).toLocaleTimeString()}</p>
          <hr />
        </div>
        <div className="mdiv9">
          <h2>{articles[9]?.title}</h2>
          <p>{articles[9]?.description}</p>
          <p>{new Date(articles[9]?.publishedAt).toLocaleTimeString()}</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Midbreaker;
