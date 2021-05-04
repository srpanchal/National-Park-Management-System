/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React from 'react';
import NavigationBar from './NavigationBar';
import Animals from "./Animals";
import Activities from "./Activities";


export default function Home() {
  return(
      <div>
        <NavigationBar/>
        <Animals/>
        <Activities/>    
      </div>
  );
}