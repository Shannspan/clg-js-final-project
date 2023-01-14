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

  

        <div class="navlinks">
        <ul>
        <li><a href="index.html" target ="_blank"">Home</a></li>
        <li><a href="./beachcombing.html" target="_blank">Play</a></li>      
        <li><a href="./contact.html" target="_blank">Muse</a></li>
        <ul>
    </div>
    </nav>
    
    
   
    </header>
    `;
}
}
    // customElements.define('header-component', Header);

    // const toggleNav = document.getElementsByClassName("toggle-nav")[0]

    // const navlinks = document.getElementsByClassName("navlinks")[0]

//THIS EVENT LISTENER IS CAUSING AN ERROR 
    // toggleNav.addEventListener('click', () => {
    //   navlinks.classList.toggle('active')
    // })



  


  
  
    


