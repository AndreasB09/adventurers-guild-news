import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <h1>Adventurers Guild News</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quests">Quest Board</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;