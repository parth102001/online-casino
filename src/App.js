import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
// login modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [data, setData] = useState({
  //   balance: 10,
  //   slot1: "",
  //   slot2: "",
  //   slot3: "",
  //   time: "",
  // });
  // slot state
  const [slot1, setSlot1] = useState(["X"]);
  const [slot2, setSlot2] = useState(["X"]);
  const [slot3, setSlot3] = useState(["X"]);
  const [balance, setBalance] = useState(10);
  const [login, setLogin] = useState(false);
  // modal
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  // login input
  const userInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const loginFunc = () => {
    setOpen(true);
  };
  const logoutFunc = () => {
    localStorage.removeItem("user");
    setLogin(false);
  };
  const loginBtn = () => {
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    setLogin(true);
    setOpen(false);
  };

  // content
  const randomNo = () => {
    const generateNo = Math.ceil(Math.random() * 80);
    return generateNo;
  };

  const spinFunc = () => {
    let first = randomNo();
    let second = randomNo();
    let third = randomNo();
    console.log(first, second, third);
    if (balance > 0) {
      setBalance(balance - 2);

      if (first >= 0 && first <= 20) {
        setSlot1([...slot1, "♠️"]);
      } else if (first >= 21 && first <= 40) {
        setSlot1([...slot1, "♦️"]);
      } else if (first >= 41 && first <= 60) {
        setSlot1([...slot1, "♥️"]);
      } else if (first >= 61 && first <= 80) {
        setSlot1([...slot1, "♣️"]);
      }
      // secon2
      if (second >= 0 && second <= 20) {
        setSlot2([...slot2, "♠️"]);
      } else if (second >= 21 && second <= 40) {
        setSlot2([...slot2, "♦️"]);
      } else if (second >= 41 && second <= 60) {
        setSlot2([...slot2, "♥️"]);
      } else if (second >= 61 && second <= 80) {
        setSlot2([...slot2, "♣️"]);
      }
      //third
      if (third >= 0 && third <= 20) {
        setSlot3([...slot3, "♠️"]);
      } else if (third >= 21 && third <= 40) {
        setSlot3([...slot3, "♦️"]);
      } else if (third >= 41 && third <= 60) {
        setSlot3([...slot3, "♥️"]);
      } else if (third >= 61 && third <= 80) {
        setSlot3([...slot3, "♣️"]);
      }
      if (
        (slot1 === slot2 && slot3 !== slot1) ||
        (slot1 !== slot2 && slot3 === slot1) ||
        (slot1 !== slot2 && slot2 === slot3)
      ) {
        setBalance(balance + 0.5);
      } else if (slot1 === slot2 && slot2 === slot3 && slot1 === slot3) {
        setBalance(balance + 2);
      } else if (slot1 === "♠️" && slot2 === "♠️" && slot3 === "♠️") {
        setBalance(balance + 5);
      }
      if (login) {
        localStorage.setItem("slot1", JSON.stringify(slot1));
        localStorage.setItem("slot2", JSON.stringify(slot2));
        localStorage.setItem("slot3", JSON.stringify(slot3));
      }
    }
  };

  return (
    <div className="App">
      <Header
        balance={balance}
        logoutFunc={logoutFunc}
        loginFunc={loginFunc}
        login={login}
      />
      <Content slot1={slot1} slot2={slot2} slot3={slot3} spinFunc={spinFunc} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="form">
            <h2>Login</h2>
            <div>
              <h3>Email</h3>
              <input
                name="email"
                value={user.email}
                onChange={userInput}
                type="text"
              />
            </div>
            <div>
              <h3>Password</h3>
              <input
                name="password"
                value={user.password}
                onChange={userInput}
                type="password"
              />
            </div>
            <Button onClick={loginBtn} variant="contained">
              Login
            </Button>
          </form>
        </Box>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
