import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plusIcon from "../assets/images/plus.svg";
import moonIcon from "../assets/images/moon-fill.svg";
import sunIcon from "../assets/images/sun-line1.svg";
import { CREATE } from "../services/consts";
import "../assets/css/style.css";
import CardList from "../components/CardList";
import Skeleton from "react-loading-skeleton";

function Home() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('selected-theme') === 'dark');

    useEffect(() => {
        const darkTheme = 'dark-theme';
        if (isDarkMode) {
            document.body.classList.add(darkTheme);
        } else {
            document.body.classList.remove(darkTheme);
        }
        localStorage.setItem('selected-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className='block'>
            <div className='container' >
                <div className="nav">
                    <h1 className='title'>     NOTES</h1>
                    <img 
                        src={isDarkMode ? sunIcon : moonIcon} 
                        className="img-moon" 
                        alt="theme-icon" 
                        id="theme-button" 
                        onClick={toggleTheme} 
                    />
                </div>
                <Link to={CREATE} className='fixed-bottom-right'>
                    <img src={plusIcon} alt="Plus"/>
                </Link>
                <CardList />
            </div>
        </div>
    );
}

export default Home;
