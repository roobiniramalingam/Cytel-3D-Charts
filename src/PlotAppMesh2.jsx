import React, { Component } from 'react';
import Ploty from 'react-plotly.js';
var a = []; var b = []; var c = [];
var i;
for (i = 0; i < 50; i++) {
    var a_ = Math.random();
    a.push(a_);

    var b_ = Math.random();
    b.push(b_);

    var c_ = Math.random();
    c.push(c_);
}
class AppMesh2 extends React.Component {
    render() {
        return (
            <Ploty
                data={[{
                    alphahull: 5,
                    opacity: 0.8,
                    color: 'red',
                    type: 'mesh3d',
                    x: a,
                    y: b,
                    z: c,
                }]} layout={{ width: 450, height: 450, title: '3D Mesh Plot with Alphahull' }}
            />
        );
    }
}
export default AppMesh2