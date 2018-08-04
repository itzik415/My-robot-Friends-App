import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfiled: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfiled: event.target.value })
    }

    render () {
        const filterdRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className='f1'>My Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterdRobots} />
            </div>
        );
    }
    
}

export default App;