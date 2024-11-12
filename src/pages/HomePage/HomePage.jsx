import { articles } from "../../data/articles";
import { Link } from "react-router-dom";
import { useState } from "react";
import QuestFeed from "../../components/QuestFeed";
import styles from './HomePage.module.css';

const HomePage = () => {
    const [filterTag, setFilterTag] = useState("");

    const filteredArticles = filterTag
        ? articles.filter((article) => article.tags.includes(filterTag) && !article.featured)
        : articles.filter(article => !article.featured);

    const featuredArticle = articles.find(article => article.featured);

    return (
        <div className={styles.container}>
            <h2>Welcome to the Adventurers Guild News</h2>
            <p>Stay up to date with the latest quests, guild news, and tips for aspiring adventurers.</p>

            <h3>Latest Guild News</h3>
            {featuredArticle && (
                <section>
                    <h3>Featured News</h3>
                    <div>
                        {featuredArticle.image && <img src={featuredArticle.image} alt={featuredArticle.title} />}
                        <h3>{featuredArticle.title}</h3>
                        <p>{featuredArticle.snippet}</p>
                        <Link to={`/articles/${featuredArticle.id}`}>Read More</Link>
                    </div>
                </section>
            )}

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

            <QuestFeed />
        </div>

        

    );
};

export default HomePage;