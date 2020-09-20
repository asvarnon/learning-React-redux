import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

export default class Weather extends React.Component {

    state = {
        loading: true
    }

    async componentDidMount() {
        const home = [-96.8084, 27.7799]; //lng, lat
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${home[1]}&lon=${home[0]}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }



    render() {
        return(
            <div>
                {this.state.loading ? <div>loading...</div> : <div>weather...</div>}
            </div>
        );
    }
}

