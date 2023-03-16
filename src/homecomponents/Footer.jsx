import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import './style.css'

function Footer() {
  return (
    <div>
     
    
        <div className="footer">
           <p>   This website was made by PICT Sophomore Students .....! ❤️ 🚀</p>
           <p>connect with me on github <span> </span><GitHubButton href="https://github.com/ruturaj-7802"  aria-label="Follow @Ruturaj-7802 on GitHub">Follow @Ruturaj-7802</GitHubButton>
           </p>

          <div class="footer-copyright text-center py-3">© 2022 Copyright Reserved @ Ruturaj Patil</div>  
        </div>
    </div>
  )
}

export default Footer


