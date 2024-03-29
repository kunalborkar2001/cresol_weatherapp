import "./Card.css"

const Card = ({error,name, region, country,temperature, humidity, icon, pressure, condition, windSpeed}) => {
    return (
        <div className='card'>
            {error ? (
                <p>No data found</p>
            ) : (
                <>
                    <div className='details'>
                        <img src={icon} alt="kunalborkar2001@gmail.com" />
                        <div className='right'>
                            <ul>
                                <li><h1 className="name">{name} <span className='degree'>{temperature}°C</span></h1></li>
                                <li><p>Region : {region}</p></li>
                                <li>Country : {country}</li>
                            </ul>
                        </div>

                    </div>
                    <div className='down'>
                        <div>
                            <p>Humidity : {humidity}</p>
                            <p>Condition : {condition}</p>
                        </div>
                        <div>
                            <p>Wind Speed : {windSpeed} km/h</p>
                            <p>Pressure : {pressure} inHg</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Card