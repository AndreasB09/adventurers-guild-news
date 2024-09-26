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
            {article.content && article.content.length > 0 ? (
                article.content.map((contentItem, index) => {
                if (contentItem.type === "image") {
                    return <img key={index} src={contentItem.src} alt={contentItem.alt} />;
                }
                if (contentItem.type === "paragraph") {
                    return <p key={index}>{contentItem.text}</p>;
                }
                return null;
                })
            ) : (
                <p>No content available for this article.</p>
            )}
        </div>
    );
};

export default ArticlePage;