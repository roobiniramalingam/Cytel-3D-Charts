import React, { Component } from 'react';
import Ploty from 'react-plotly.js';

var x = ['day 1', 'day 1', 'day 1', 'day 1', 'day 1', 'day 1',
    'day 2', 'day 2', 'day 2', 'day 2', 'day 2', 'day 2']

var trace1 = {
    y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
    x: x,
    name: 'India',
    marker: { color: '#3D9970' },
    type: 'box'
};

var trace2 = {
    y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
    x: x,
    name: 'China',
    marker: { color: '#FF4136' },
    type: 'box'
};

var trace3 = {
    y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
    x: x,
    name: 'USA',
    marker: { color: '#FF851B' },
    type: 'box'
};

var datavalue = [trace1, trace2, trace3];

var layout = {
    yaxis: {
        title: 'normalized moisture',
        zeroline: false
    },
    boxmode: 'group',
    width: 550, height: 500,
    title: 'Sample Box Plot'
};

class AppBoxPlot extends Component {

    render() {
        return (
            <Ploty
                data={datavalue} layout={layout}
            />
        );
    }
}
export default AppBoxPlot