import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Article #{id}</h2>
            <p>This is where the full article content will appear.</p>
        </div>
    );
};

export default ArticlePage;