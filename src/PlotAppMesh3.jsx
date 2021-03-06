import React, { Component } from 'react';
import Ploty from 'react-plotly.js';

var intensity = [0, 0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714, 0.7142857142857143, 0.8571428571428571, 1];
var data = [{
    type: "mesh3d",
    x: [0, 0, 1, 1, 0, 0, 1, 1],
    y: [0, 1, 1, 0, 0, 1, 1, 0],
    z: [0, 0, 0, 0, 1, 1, 1, 1],
    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
    intensity: intensity,
    colorscale: [
        [0, 'rgb(255, 0, 255)'],
        [0.5, 'rgb(0, 255, 0)'],
        [1, 'rgb(0, 0, 255)']
    ]
}
];
class AppMesh3 extends React.Component {
    render() {
        return (
            <Ploty
                data={data} layout={{ width: 450, height: 450, title: '3D Mesh Cube' }}
            />
        );
    }
}
export default AppMesh3