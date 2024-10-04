import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgba(145, 254, 159, 0.47)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: 'rgba(255, 173, 173, 0.56)',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3 style={{ color: "#fff" }}>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#1e1e1e", // Dark background for the table
          borderRadius: "0.7rem",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#fff" }}>Product</TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>Tracking ID</TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>Date</TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>Status</TableCell>
              <TableCell align="left" style={{ color: "#fff" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{ backgroundColor: "#2a2a2a" }} // Dark background for rows
              >
                <TableCell component="th" scope="row" style={{ color: "#fff" }}>
                  {row.name}
                </TableCell>
                <TableCell align="left" style={{ color: "#fff" }}>{row.trackingId}</TableCell>
                <TableCell align="left" style={{ color: "#fff" }}>{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className="Details" style={{ color: "#fff" }}>Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
