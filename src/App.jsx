import React from "react";
import Nav from "./components/Nav/Nav";
import PriceList from "./components/PriceList/PriceList";
import Dashboard from "./components/Dashboard/Dashboard";
import Piehart from "./components/PieChart/Piehart";

const App = () => {
  return (
    <div className=" md:w-5/6 mx-auto ">
      <Nav></Nav>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Piehart></Piehart>
    </div>
  );
};

export default App;
