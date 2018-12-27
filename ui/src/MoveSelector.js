import React, { Component } from 'react';
import * as d3 from "d3";

//import './App.css';


class MoveSelector extends Component {

    componentDidMount() {
        this.update.bind(this);
    }

    update() {

        var nPieces = 7;
        var s = 500;
        var w = s;
        var r = 20;
        var h = r * 3;
        var space = s / nPieces;
        var offset = space / 2; 
        var vOffet = h / 2;
        var player = this.props.player;

        var svg = d3.select("#move-selector")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

        svg.append("g").selectAll("circle")
            .data(Array(w).fill(null))
            .enter()
            .append("circle")
            .attr("cx", function(d, i) {return i * space + offset;})
            .attr("cy", vOffet)
            .attr("r", r)
            .attr("fill", "white")
            .attr("stroke", "#ddd")
            .style("cursor", "pointer")
            .on("mouseover", function handleMouseOver(d, i) {
                var fill = player ? "black" : "red";
                d3.select(this).attr("fill", fill);
            })
            .on("mouseout", function handleMouseOut(d, i) {
                d3.select(this).attr("fill", "white");
            })
            .on("click", function handleClick(d, i) {
                this.props.onPlayerMove(i, this)
            }.bind(this))
    }


    render() {
        return (
            <div id="move-selector" className="MoveSelector">
            </div>
        );
    }
}

export default MoveSelector;
