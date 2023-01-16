const apiPoem = 'https://poetrydb.org/title/sea'

// new sea based theme for poems required rework of API call:
// API returns a nested array rather than a single poem unit 
//(which is what the previous random API poem selection did)

let i = 0;

function fetchPoem() {
    fetch(apiPoem)
    .then((response) => response.json())
    .then((data) => {
       
        let poemName = data[i++].title;
        let poemWriter = data[i++].author;
        let poemPop = data[i++].lines;

        document.getElementById("title-poem").innerHTML = poemName;
       
        document.getElementById("author-poem").innerHTML = poemWriter;

        document.getElementById("random-poem").innerHTML = poemPop;  
        
    })};
    
fetchPoem();

const poemBtn = document.getElementById('poem-btn');

poemBtn.addEventListener('click', fetchPoem); 

