import React, { Component } from 'react';
import Ploty from 'react-plotly.js';
var data = [{
    type: "mesh3d",
    x: [0, 1, 2, 0],
    y: [0, 0, 1, 2],
    z: [0, 2, 0, 1],
    i: [0, 0, 0, 1],
    j: [1, 2, 3, 2],
    k: [2, 3, 1, 3],
    intensity: [0, 0.33, 0.66, 1],
    colorscale: [
        [0, 'rgb(255, 0, 0)'],
        [0.5, 'rgb(0, 255, 0)'],
        [1, 'rgb(0, 0, 255)']
    ]
}
];
class AppMesh3 extends React.Component {
    render() {
        return (
            <Ploty
                data={data} layout={{ width: 450, height: 450, title: '3D Mesh Tetrahedron' }}
            />
        );
    }
}
export default AppMesh3