import React from 'react';
import Tweet from './tweet'
import {Link} from 'react-router-dom'


function Tweets () {
    const tweets = [
        {name: 'Austin', age: 26, tweet: 'oh damn'},
        {name: 'Joe', age: 28, tweet: 'abcdefg'},
        {name: 'Bob', age: 24, tweet: '123467'},
        {name: 'Bill', age: 25, tweet: 'abc123'},
        ];


    return(
        <div className='tweets'>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} age={tweet.age} tweet={tweet.tweet}/>
            ))}
        </div>
    )
};

export default Tweets

