import React, { Component } from 'react';
import './GameBoard.css';

import * as d3 from "d3";

var n = null;
var testDataSet = 
    [
        [n,n,n,n,n,n,n],
        [n,n,n,n,n,n,n],
        [n,n,n,n,n,n,n],
        [n,n,n,n,n,n,n],
        [n,n,n,n,n,n,0],
        [n,n,n,n,n,n,1],
        [n,n,n,n,n,n,0]
    ]
;

class GameBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.state.data = testDataSet;
    }

    componentDidMount() {

        var nPieces = 7;
        var s = 500;
        var w = s;
        var h = s;
        var r = 20;
        var space = s / nPieces;
        var offset = space / 2; 
        
        var svg = d3.select("#game-board")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

        svg.selectAll("g")
            .data(this.state.data)
            .enter()
            .append("g")
            .attr("index", function(d,i) {return i})
            .selectAll("circle")
            .data(function(d) {console.log("gd", d);return d})
            .enter()
            .append("circle")
            .attr("cx", function(d, i) {return offset + space * +this.parentNode.getAttribute("index");})
            .attr("cy", function(d, i) {return i * space + offset;})
            .attr("r", r)
            .attr("fill", function(d) {switch (d) {case 0:return "black";case 1:return "red";default: return "white";}})
            .attr("stroke", "black")
            .text(function(d) {return d})
    }

    render() {
        return (
            <div id="game-board" className="GameBoard">
                
            </div>
        );
    }
}

export default GameBoard;
