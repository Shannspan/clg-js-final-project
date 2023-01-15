const apiPoem = 'https://poetrydb.org/title/sea'
    //console.log(apiPoem);

const poemBtn = document.getElementById('poem-btn');

const click = poemBtn.addEventListener('click', fetchPoem ); 


// Below function fetchPoem is returning 'undefined' in console - however it IS working to an extent - what does that mean and how can I refine it to make next index in API array of sea poems appear on click? 

function fetchPoem() {
    fetch(apiPoem)
    .then((response) => response.json())
    .then((data) => {
        let poemName = data[0].title;
        let poemWriter = data[0].author;
        let poemPop = data[[0]].lines;

        document.getElementById("title-poem").innerHTML = poemName;
        document.getElementById("author-poem").innerHTML = poemWriter;
        //document.getElementById("random-poem").innerHTML = poemPop;   
        
        //console.log(data);
    });
} 

const seaPoem = fetchPoem(); 
console.log(seaPoem);
// do I need to complete all of fetch poem before running seaPoem? 
const text = document.getElementById("random-poem");
text.innerHTML = seaPoem;
let counter = 1;

function changeText(){
    var len = apiPoem.length;
    if(counter < len){
      console.log(apiPoem[counter]);
      text.innerHTML = apiPoem[counter];
      counter ++;
    }};


