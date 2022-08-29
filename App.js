import React, { Component } from 'react';
import axios from 'axios';

import './App.css'

class App extends React.Component {
    
    state = { advice: ''};

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
        //call function
        this.fetchAdvice();
    }

    // create a seperate class, dont need const bc this is a function inside of a class which then makes it a method

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                const { advice } = res.data.slip;
                // need to set state in order to pull out advice string only in return
                this.setState({ advice: advice });
                console.log(res.data.slip.advice);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    render() {
        const {advice} = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;