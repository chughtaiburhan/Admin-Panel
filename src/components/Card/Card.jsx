import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts"; // Import ApexCharts

// Parent Card
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </div>
  );
};

// CompactCard
function CompactCard({ param, setExpanded }) {
  const Png = param.png;

  return (
    <motion.div className="CompactCard" onClick={setExpanded}>
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  // Sample data for the line chart
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 5,
        color: "#000",
        opacity: 0.2,
      },
      fill: {
        colors: ["#00c853"], // Change fill color to a vibrant green
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#66ffb3"], // Gradient color to a lighter green
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#00c853"], // Line color matching the fill color
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontSize: '12px', // Adjust tooltip font size
        },
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0', // Change grid line color
        position: 'back',
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          style: {
            colors: '#777', // Axis label color
            fontSize: '12px', // Axis label font size
          },
        },
      },
    },
    series: [{
      name: 'Data',
      data: param.series, // Ensure this contains your data
    }],
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart
          series={param.series} type="area" options={data.options}
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
