//maybe header & footer should have there own.js file? Will that fix the error? 
//Yes it does!! Found info about the "text/javascript" type online and placed in HTML head under the main js <script> link. Both the <script> in head (to access the file) and link to id in the HTML body for location.

class Header extends HTMLElement {
  constructor(){
    super();
  }
connectedCallback () {
    this.innerHTML = `
    <header>
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
    
    <div class="title-main">
    <div class="title-cutout"><span><sub>A</sub></span> FRINGE OF REEF</div>
    </div>
    <div>
    <nav class="topnav">
    <a class="navlinks" href="./index.html" target ="_blank"">Home</a>
    <a class="navlinks" href="./play.html" target="_blank">Play</a>      
    <a class="navlinks" href="./muse.html" target="_blank">Muse</a>
    </nav>
    </div>  
    
   
    </header>
    `;
}
}
    customElements.define('header-component', Header);



  
  
    




  


  
  
    


