import React from "react";
import FocusTrapPopover from "./Loginbutton"
import FocusTrapPopover2 from "./Signup";
const HomeNavbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ride share</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active mx-3 "style={{fontSize:'1.3rem', fontWeight:600}} aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3" href="#" style={{fontSize:'1.3rem', fontWeight:600}}>About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled mx-3"style={{fontSize:'1.3rem', fontWeight:600}} href="#" tabindex="-1" aria-disabled="true">Our Team</a>
        </li>
      </ul>

      <form class="d-flex mt-1">
     <div className="mx-2"><FocusTrapPopover/></div> 
     <div className="mx-2"><FocusTrapPopover2/></div> 
      </form>
    </div>
  </div>
</nav>
        </>

    );
}
export default HomeNavbar ;