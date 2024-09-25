import { useParams } from "react-router-dom";
import { articles } from '../data/articles';

const ArticlePage = () => {
    const { id } = useParams();

    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return <h2>Article not found</h2>
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.snippet}</p>
            <p>This is the full content of the article.</p>
        </div>
    );
};

export default ArticlePage;