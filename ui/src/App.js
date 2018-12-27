import React, { Component } from 'react';
import GameBoard from "./GameBoard";
import MoveSelector from "./MoveSelector";
import axios from "axios";

import './App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.state.player = 0;
    }

    onPlayerMove(column) {
        console.log("player move column", column);
        var apiUrl = (process.env.REACT_APP_API_URL) || "/api/v0" + "/move";
        axios.post(apiUrl, {column})
            .then(response => {
                console.log({response});
                this.setState(Object.assign({}, this.state, {player: !this.state.player}))
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        Connect Four
                    </h1>
                </header>
                <main>
                    <div>{this.state.player ? "Black" : "Red"} player's turn</div>
                    <MoveSelector onPlayerMove={this.onPlayerMove.bind(this)}/>
                    <GameBoard player={this.state.player} />
                </main>
            </div>
        );
    }
}

export default App;
