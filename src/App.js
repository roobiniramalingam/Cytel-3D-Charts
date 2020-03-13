import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlotAppMesh from './PlotAppMesh'
import PlotAppMesh2 from './PlotAppMesh2'
import PlotAppMesh3 from './PlotAppMesh3'
import PlotAppMesh4 from './PlotAppMesh4'
import PlotAppSurface from './PlotAppSurface'
import PlotAppSurface2 from './PlotAppSurface2'
import PlotAppLine from './PlotAppLine'
import PlotAppCube from './PlotAppCube'
import ScatterLinePlot from './ScatterLinePlot'
import ScatterLinePlot2 from './ScatterLinePlot2'
import BoxPlot from './BoxPlot'
import BoxPlot2 from './BoxPlot2'

function App() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ marginLeft: '567px', fontSize: '25px', fontWeight: 'bold' }}>
        <label style={{ alignContent: 'center' }} > Data Visualization (Charts) </label>
      </div>
      {/* <div className="row">
        <div class="col-3" style={{ marginLeft: '175px' }}><PlotAppSurface /></div>
        <div class="col-3" style={{ marginTop: '-460px', marginLeft: '645px' }} ><PlotAppSurface2 /></div>
      </div>
      <div className="row">
        <div class="col-3" style={{ marginLeft: '175px' }}><PlotAppMesh /></div>
        <div class="col-3" style={{ marginTop: '-453px', marginLeft: '645px' }}><PlotAppMesh2 /></div>
      </div>
      <div className="row">
        <div class="col-3" style={{ marginLeft: '175px' }}><PlotAppMesh3 /></div>
        <div class="col-3" style={{ marginTop: '-460px', marginLeft: '645px' }} ><PlotAppMesh4 /></div>
      </div>
      <div className="row">
        <div class="col-3" style={{ marginLeft: '175px' }}><PlotAppLine /></div>
        <div class="col-3" style={{ marginTop: '-460px', marginLeft: '645px' }} ><PlotAppCube /></div>

      </div> */}
      <div className="row">
        <div class="col-3" style={{ marginLeft: '58px' }}><ScatterLinePlot /></div>
        <div class="col-3" style={{ marginTop: '-496px', marginLeft: '665px' }} ><ScatterLinePlot2 /></div>
      </div>
      <div className="row">
        <div class="col-3" style={{ marginLeft: '58px' }}><BoxPlot /></div>
        <div class="col-3" style={{ marginTop: '-496px', marginLeft: '665px' }}><BoxPlot2 /></div>

      </div>

    </div >
  );
}

export default App;
