import React from "react";

export default class DailyForecast extends React.Component {
    constructor(props) {
        super(props);

    }


    // async componentDidMount() {
    //     const home = [-96.8084, 27.7799]; //lng, lat
    //     const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${home[1]}&lon=${home[0]}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    // }



    render() {
        return(
            <div>
                <div>
                    <h1>Day 1</h1>
                    <div>{this.props.day}</div>
                </div>
            </div>
        );
    }
}