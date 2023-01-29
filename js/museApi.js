const apiPoem = 'https://poetrydb.org/title/sea'

// new sea based theme for poems required rework of API call:
// API returns a nested array rather than a single poem unit 
//(which is what the previous random API poem selection did)

let i = 0;


function fetchPoem() {
    fetch(apiPoem)
    .then((response) => response.json())
    .then((data) => {

        let nextPoem = i++;           
        let poemName = data[nextPoem].title;
        let poemWriter = data[nextPoem].author;
        let poemPop = data[nextPoem].lines;

        document.getElementById("title-poem").innerHTML = poemName;
       
        document.getElementById("author-poem").innerHTML = poemWriter;

        document.getElementById("random-poem").innerHTML = poemPop;  
        //to return to start of array and begin again 
        function rotatePoem() {
            if(i < 0) i = data.length - 1;
            if(i === data.length) i = 0;            
        }
        rotatePoem();
        
    })};
    
const poemBtn = document.getElementById('poem-btn');

poemBtn.addEventListener('click', fetchPoem);



