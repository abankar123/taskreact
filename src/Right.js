import React from 'react'
import One from './One'
import Card from './Card'
import Table from './Table'
import BarChartComponent from './BarChartComponent'
import Pia from './Pia'

const Right = () => {
  return (
    <div className="container-fluid siderigth">

      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <One></One>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <Card></Card>
        </div>
      </div>

      <div className="row mb-3 mt-3" >

        <div className="col-lg-6 col-md-6 col-12" style={{ backgroundColor: "white" }} >
          <BarChartComponent></BarChartComponent>
        </div>
        <div className="col-lg-6 col-md-6 col-12" style={{ backgroundColor: "white" }}>
          <Pia></Pia>
        </div>


      </div>

      <div className="row" >
        <div className="col-lg-12 col-md-12 col-12" style={{ backgroundColor: "white" }} >
          <Table></Table>
        </div>
      </div>
    </div>


  )
}
export default Right;
