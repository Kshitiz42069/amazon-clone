import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from "./Payment";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51NjmWSSGIaKb7JmeM7oDAwsAO2TL23Rfg9bNCMnbkwEvIht4xiYCTJSlqQQqT27X8CxgyK5Kvl8LeP8zR4wnCt0C00pabwYsmW');
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("the user is:", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })

      }
    })
  },[])
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login/>]}/> 
          <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
          <Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
