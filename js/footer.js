class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer>
        <p>© SHANNSPANPLAYSJS 2022</p>
        <p>non commercial - only for research and educational purpose
        all picture copyrights remain with their authors.</p>
      </footer>`
    }
    }    
    customElements.define('my-footer', MyFooter);

  
    


