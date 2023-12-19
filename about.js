import React from 'react';
import '../App.css'; 

const About = () => (
  <div className="page">
    <h2>About Weather App</h2>
    <div className="about-content">
      <p>
        The Weather App is a simple application that allows you to check the current weather
        conditions for a specific city. You can enter the name of the city in the search bar
        and get information such as temperature, pressure, and sunset time.
      </p>
      <p>
        The application uses the OpenWeatherMap API to fetch real-time weather data and presents
        it in a user-friendly interface. Feel free to explore different cities and stay updated
        on the latest weather information.
      </p>
    </div>
  </div>
);

export default About;

