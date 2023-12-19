import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import About from './pages/about';
import Contact from './pages/contact';
import Settings from './pages/settings';
import weatherIcon from './img/погодаа.png';

const API_KEY = "36030eade332676b7e97117f36d8929b";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </nav>
);

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Enter the name of the city!",
      });
    }
  };

   render() {
    return (
      <Router>
        <div className="wrapper">
          <Navigation />
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 info">
                  <Info />
                </div>
                <div className="col-sm-7 form">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Form weatherMethod={this.gettingWeather} />
                          <Weather
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            pressure={this.state.pressure}
                            sunset={this.state.sunset}
                            error={this.state.error}
                          />
                        </>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
          <div className="additional-content">
            {}<br></br>
            <img
          src={weatherIcon}
          alt="Weather Icon"
          style={{ width: '50px', height: '50px' }} 
        /> "What makes a good day is not the date, not the weather, but the people:)"
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
