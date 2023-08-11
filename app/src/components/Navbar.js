import { useState } from "react"
import "../font.css"

const Navbar = ()=>{
    const [active,setActive] = useState(0)
  
    return(
      <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
          <span className="font-logo" style={{ fontSize:"25px",fontWeight:"600"}}> Peek-A-Queue </span>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={()=>setActive(1?active==0:0)}>
          <span aria-hidden="true"> </span>
          <span aria-hidden="true"> </span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      {
        active==1&&(
          <div style={{position:"absolute",left:"0",height:"200px",width:"100%",top:"50px",background: "white",overflow:"auto"}}>
            <a class="navbar-item" href='/'>
              Home
            </a>
      
            <a class="navbar-item" href='/dashboard'>
              Dashboard
            </a>

            <a class = "navbar-item" onClick={()=>window.localStorage.clear()}>
              Clear Browser Cache
            </a>
      </div>
        )
      }
      
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href='/'>
            Home
          </a>
    
          <a class="navbar-item" href='/dashboard'>
            Dashboard
          </a>
    
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
    
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Page1
              </a>
              <a class="navbar-item">
                Page2
              </a>
              <a class="navbar-item">
                Page3
              </a>
              <hr class="navbar-divider"/>
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        {/* <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div> */}
  
        
  
      </div>
    </nav>
  
    )
  }

export default Navbar