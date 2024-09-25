import { articles } from "../data/articles";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
    const [filterTag, setFilterTag] = useState("");

    const filteredArticles = filterTag
        ? articles.filter((article) => article.tags.includes(filterTag))
        : articles;

    return (
        <div>
            <h2>Welcome to the Adventurers Guild News</h2>
            <p>Stay up to date with the latest quests, guild news, and tips for aspiring adventurers.</p>

            <h3>Latest Guild News</h3>

            <div>
                <button onClick={() => setFilterTag("")}>All</button>
                <button onClick={() => setFilterTag("beginner")}>Beginner</button>
                <button onClick={() => setFilterTag("experienced")}>Experienced</button>
                <button onClick={() => setFilterTag("news")}>News</button>
            </div>

            <div>
                {filteredArticles.map((article) => (
                    <div key={article.id}>
                        {article.image && <img src={article.image} alt={article.title} />}
                        <h3>{article.title}</h3>
                        <p>{article.snippet}</p>
                        <div>
                            {article.tags && <span>{article.tags[0]}</span>}
                        </div>
                        <Link to={`/articles/${article.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>

        

    );
};

export default HomePage;