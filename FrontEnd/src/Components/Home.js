import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return(
      <div>
          <div class="nav-link" href="">
                  <Link to="/">
                    Home
              </Link>

                </div>
          <div class="nav-link" href="">
                  <Link to="/login">
                    Login
              </Link>

                </div>
      </div>
    
  );
}