import React from 'react';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar';
import NavBar from "./NavigationBar";
import Animals from "./Animals";
import Activities from "./Activities";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function Home() {
  return(
      <div>
        <NavigationBar/>
        <Animals/>
        <Activities/>  
         
             
      </div>
    
  );
}