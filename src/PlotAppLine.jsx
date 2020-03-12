import React, { Component } from 'react';
import Ploty from 'react-plotly.js';

var pointCount = 31;
var i, r;

var x = [];
var y = [];
var z = [];
var c = [];

for (i = 0; i < pointCount; i++) {
    r = 10 * Math.cos(i / 10);
    x.push(r * Math.cos(i));
    y.push(r * Math.sin(i));
    z.push(i);
    c.push(i)
}

class PlotLineApp extends React.Component {
    render() {
        return (
            <Ploty
                data={[{
                    type: 'scatter3d',
                    mode: 'lines',
                    x: x,
                    y: y,
                    z: z,
                    opacity: 1,
                    line: {
                        width: 6,
                        color: c,
                        reversescale: false
                    }
                }]} layout={{ width: 450, height: 450, title: '3D Line - Markers Plot' }}
            />
        );
    }
}
export default PlotLineApp