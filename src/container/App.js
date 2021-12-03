import React from "react";
import { Button, Card, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputForQuizTitle from "../components/InputForQuizTitle";
import ListOfQuizes from "../components/ListOfQuizez";

 const App = () => {
  
  return (
    <div className="container">
      <InputForQuizTitle/>
      <ListOfQuizes/>
    </div>
  );
}

export default App;
