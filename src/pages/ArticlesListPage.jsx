import { articles } from "../data/articles";
import { Link } from "react-router-dom";

const ArticlesListPage = () => {

    return (
        <div>
            <h2>All Articles</h2>
            <div>
                {articles.map((article) => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.snippet}</p>
                    <Link to={`/articles/${article.id}`}>Read More</Link>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesListPage;