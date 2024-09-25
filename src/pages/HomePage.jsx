import { articles } from "../data/articles";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to the Adventurers Guild News</h2>
            <p>Stay up to date with the latest quests, guild news, and tips for aspiring adventurers.</p>

            <h3>Latest News</h3>
            <div>
                {articles.map((article) => (
                    <div key={article.id}>
                        <h4>{article.title}</h4>
                        <p>{article.snippet}</p>
                        <Link to={`/articles/${article.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default HomePage;