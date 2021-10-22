import React, { useState } from "react";
// table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Content = (props) => {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // table
  // const createData = (id, slot1, slot2, slot3, time) => {
  //   return {  slot1, slot2, slot3, time };
  // };

  const [rows, setRows] = useState([
    {
      slot1: JSON.parse(localStorage.getItem("slot1")),
      slot2: JSON.parse(localStorage.getItem("slot2")),
      slot3: JSON.parse(localStorage.getItem("slot3")),
    },
  ]);
  console.log(rows);
  //   handle btn
  const closeBtn = () => {
    setOpen(false);
  };
  const spinBtn = () => {
    props.spinFunc();
  };
  let num = 0;
  return (
    <div style={{ padding: "0 2%" }}>
      <TableContainer style={{ marginTop: "2%" }} component={Paper}>
        <h2 style={{ textAlign: "center" }}>Results</h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Slot 1</TableCell>
              <TableCell align="right">Slot 2</TableCell>
              <TableCell align="right">Slot 3</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {(num = num + 1)}
                </TableCell>
                <TableCell align="right">{row.slot1}</TableCell>
                <TableCell align="right">{row.slot2}</TableCell>
                <TableCell align="right">{row.slot3}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          width: "10%",
          margin: "auto",
          marginTop: "2%",
          marginBottom: "6%",
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          Start Game
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button onClick={spinBtn} size="large" variant="contained">
              spin
            </Button>
            <Button size="large" variant="contained">
              fake
            </Button>
            <Button onClick={closeBtn} size="large" variant="contained">
              Close
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1%",
            }}
          >
            <h3
              style={{
                height: "50px",
                width: "30%",
                backgroundColor: "aquamarine",
                border: "1px solid black",
                textAlign: "center",
                fontSize: "40px",
              }}
            >
              {props.slot1[props.slot1.length - 1]}
            </h3>
            <h3
              style={{
                height: "50px",
                width: "30%",
                backgroundColor: "aquamarine",
                border: "1px solid black",
                textAlign: "center",
                fontSize: "40px",
              }}
            >
              {props.slot2[props.slot2.length - 1]}
            </h3>
            <h3
              style={{
                height: "50px",
                width: "30%",
                backgroundColor: "aquamarine",
                border: "1px solid black",
                textAlign: "center",
                fontSize: "40px",
              }}
            >
              {props.slot3[props.slot3.length - 1]}
            </h3>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Content;
