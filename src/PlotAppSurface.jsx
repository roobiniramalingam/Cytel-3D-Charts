import React, { Component } from 'react';
import Ploty from 'react-plotly.js';
var inputData = [
    ['0', '10', '15'],
    ['1', '50', '0'],
    ['2', '20', '0'],
    ['3', '30', '0']];

class AppSurface extends React.Component {

    render() {
        return (
            <Ploty
                data={[{
                    z: inputData,
                    type: 'surface'
                }]} layout={{ width: 450, height: 450, title: 'Topographical 3D Surface Plot' }}
            />
        );
    }
}
export default AppSurface