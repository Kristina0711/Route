import { Link } from 'react-router-dom';
import styles from './menu.module.css';

const Menu = () => {
    return (
        <>
            <header className={styles.header}>
                <Link className={styles.header_block} to="/">Home</Link>
                <Link className={styles.header_block} to="/YoutubeApp">Youtube</Link>
                <Link className={styles.header_block} to="/WeatherApp">Weather</Link>
                <Link className={styles.header_block} to="/CatApp">Cats</Link>
            </header>
        </>
    );
};

export default Menu;