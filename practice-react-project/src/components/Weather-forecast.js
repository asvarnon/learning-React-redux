import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import DailyForecast from "./DailyForecast";

export default class Weather extends React.Component {

    state = {
        loading: true,
        weather: null
    }

    async componentDidMount() {
        const home = [-96.8084, 27.7799]; //lng, lat
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${home[1]}&lon=${home[0]}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({weather: data, loading: false})
        console.log(data);
    }



    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.weather) {
            return <div>No weather forecast</div>
        }

        return(
            <div>
                {this.state.loading || !this.state.weather ? (
                    <div>loading...</div>)
                    : (
                        <div>
                            <div>{this.state.weather.daily[0].humidity}</div>
                            <DailyForecast />
                        </div>
                    )}
            </div>
        );
    }
}

