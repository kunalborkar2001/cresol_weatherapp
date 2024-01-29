import { useEffect, useState } from 'react';
import './Card.css';
import weatherDetails from '../../Apis/weather';

const Card = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [gettingData, setGettingData] = useState(false);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    let fetchWeatherData = async (location) => {
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

    return (
        <div>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location Here...' required />
            <button type='submit' onClick={() => fetchWeatherData(location)}>Search</button>

            {gettingData ? (
                <div className='loading'>
                    <img src="https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif" alt="Loading..." />
                </div>
            ) : (
                <div className='card'>
                    {error ? (
                        <p>No data found</p>
                    ) : (
                        <>
                            <div className='details'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyr_FwMIcppToiOqzBPOSE4P5N_PuM67WaoJN31twHQ&s" alt="kunalborkar2001@gmail.com" />
                                <div className='right'>
                                    <ul>
                                        <li><h1>Nagpur <span className='degree'>12°C</span></h1></li>
                                        <li><p>Region : Maharashtra</p></li>
                                        <li>Country : India</li>
                                    </ul>
                                </div>

                            </div>
                                <div className='down'>
                                    <div>
                                        <p>Last Updated : 2024-01-29 21:30</p>
                                        <p>Condition : mist</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Card;
