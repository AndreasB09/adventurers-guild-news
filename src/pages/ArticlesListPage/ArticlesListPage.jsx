import { articles } from "../../data/articles";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './ArticlesListPage.module.css';

const ArticlesListPage = () => {

    const [filterTag, setFilterTag] = useState("");

    const filteredArticles = filterTag
        ? articles.filter((article) => article.tags.includes(filterTag))
        : articles;

    return (
        <div className={styles.container}>
            <h2>All Articles</h2>
            <div className={styles.btnContainer}>
                <button onClick={() => setFilterTag("")}>All</button>
                <button onClick={() => setFilterTag("beginner")}>Beginner</button>
                <button onClick={() => setFilterTag("experienced")}>Experienced</button>
                <button onClick={() => setFilterTag("news")}>News</button>
            </div>
            <div>
                {filteredArticles.map((article) => (
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