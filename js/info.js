//Contact.html db poetry

const apiPoem = 'https://poetrydb.org/random'
    console.log(apiPoem);

const poemBtn = document.getElementById('poem-btn');

poemBtn.addEventListener('click', fetchPoem)


function fetchPoem() {
    fetch(apiPoem)
    .then((response) => response.json())
    .then((data) => {
        let poemName = data[0].title;
        let poemWriter = data[0].author;
        let poemPop = data[0].lines;
        document.getElementById("title-poem").innerHTML = poemName;
        document.getElementById("author-poem").innerHTML = poemWriter;
        document.getElementById("random-poem").innerHTML = poemPop;            
        console.log(data);
    });
} 

fetchPoem();
