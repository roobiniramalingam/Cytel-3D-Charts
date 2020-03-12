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

function App() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ marginLeft: '567px', fontSize: '30px', fontWeight: 'bold' }}>
        <label style={{ alignContent: 'center' }} > 3D - Charts </label>
      </div>
      <div className="row">
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

      </div>
    </div >
  );
}

export default App;
