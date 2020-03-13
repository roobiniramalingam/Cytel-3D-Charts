import React, { Component } from 'react';
import Ploty from 'react-plotly.js';

var trace1 = {
    y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
    type: 'box',
    name: 'All Points',
    jitter: 0.3,
    pointpos: -1.8,
    marker: {
        color: 'rgb(7,40,89)'
    },
    boxpoints: 'all'
};

var trace2 = {
    y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
    type: 'box',
    name: 'Only Wiskers',
    marker: {
        color: 'rgb(9,56,125)'
    },
    boxpoints: false
};

var trace3 = {
    y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
    type: 'box',
    name: 'Suspected Outlier',
    marker: {
        color: 'rgb(8,81,156)',
        outliercolor: 'rgba(219, 64, 82, 0.6)',
        line: {
            outliercolor: 'rgba(219, 64, 82, 1.0)',
            outlierwidth: 2
        }
    },
    boxpoints: 'suspectedoutliers'
};

var trace4 = {
    y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
    type: 'box',
    name: 'Wiskers and Outliers',
    marker: {
        color: 'rgb(107,174,214)'
    },
    boxpoints: 'Outliers'
};



var datavalue = [trace1, trace2, trace3, trace4];

var layout = {
    title: 'Box Plot Styling Outliers'
};

class AppBoxPlot2 extends Component {

    render() {
        return (
            <Ploty
                data={datavalue} layout={layout}
            />
        );
    }
}
export default AppBoxPlot2