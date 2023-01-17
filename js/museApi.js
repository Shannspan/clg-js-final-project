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
        
    })};
    
fetchPoem();

// below code in working in terms of clicking through and restarting BUT it's not the array. can I incluse in the function above as need to refer to the data variable 

const poemBtn = document.getElementById('poem-btn');

poemBtn.addEventListener('click', () => {
    poemBtn.textContent = fetchPoem[i],
    i++
    if(i >= fetchPoem.length) {
        i = 0
    }
}); 

