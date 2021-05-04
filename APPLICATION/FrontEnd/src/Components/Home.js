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