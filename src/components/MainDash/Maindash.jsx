import React from "react";
import Cards from "../Cards/Cards";
import "./Maindash.css";
import Table from "../Table/Table";

const Maindash = () => {
  return (
    <div className="MainDash">
    <h1>Dashboard</h1>
    <Cards />
    <Table />
  </div>
  )
}

export default Maindash

