import { useEffect, useState } from 'react';
import './Weather.css';
import weatherDetails from '../../Apis/weather';
import Card from '../Card/Card';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [gettingData, setGettingData] = useState(false);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    let fetchWeatherData = async (location) => {
        if (location.length > 0) {
            try {
                setGettingData(true);
                let data = await weatherDetails(location);

                if (data) {
                    setWeatherData(data);
                    setError('');
                } else {
                    throw new Error("Weather data not available");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setGettingData(false);
            }
        }
    }

    return (
        <div className='content'>
            <div className='inputs' typeof='submit'>
                <form id="weatherForm" onSubmit={(e) => {
                    e.preventDefault();
                    fetchWeatherData(location);
                }}>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location Here...' required />
                    <button type='submit'>Search</button>
                </form>
            </div>


            <div className='cardData'>
                {gettingData ? (
                    <div className='loading'>
                        <img src="https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif" alt="Loading..." />
                    </div>
                ) : (
                    weatherData ? (
                        <Card
                            error={error}
                            name={weatherData.location.name}
                            region={weatherData.location.region}
                            country={weatherData.location.country}
                            temperature={weatherData.current.temp_c}
                            humidity={weatherData.current.humidity}
                            icon={weatherData.current.condition.icon}
                            pressure={weatherData.current.pressure_in}
                            condition={weatherData.current.condition.text}
                            windSpeed={weatherData.current.wind_kph}
                        />
                    ) : (
                        <div className='suggestion'>
                            <h1 style={{ fontSize: "32px", borderRadius: "12px" }}>Enter Location <br /> to see the weather ⛈️ details</h1>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Weather;
