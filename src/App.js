import { Routes, Route } from 'react-router-dom';
import YoutubeApp from './components/youtube/components/YoutubeApp';
import WeatherApp from './components/weather/WeatherApp';
import CatApp from './components/cats/CatApp';
import Menu from './components/Menu';

const App = () => {
    return (
        <>
            <Menu />

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="YoutubeApp" element={<YoutubeApp />} />
                <Route path="WeatherApp" element={<WeatherApp />} />
                <Route path="CatApp" element={<CatApp />} />
            </Routes>
        </>
    );
};
export default App;

const Home = () => {
    return (
        <>
            <h2>Home page</h2>
        </>
    );
};