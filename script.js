// [] square bracket = array
// {} curly bracket = object

const myAPI = [ 
                // data 0
                {fruit: "Apple", good: "yes"},
                // data 1 
                {fruit: "Banana", good: "no"},
                // data 2 
                {fruit: "Orange", good: "yes"}
              ];

console.log(myAPI[1].fruit);
console.log(myAPI[1].good);

const catFact = [
    {fact: "Cats are the best", length: "17"},
    {fact: "Cats have four legs", length: "21"}

]

// Fetched catFact variable. Specificly object nr1. Specificly the key fact.
console.log(catFact[1].fact);

async function catFactGenerator() {
     // FETCH
     const respones = await fetch("https://catfact.ninja/facts");
     
     // MODIFY
    const catFactData = await respones.json();

     // SEND
     console.log(catFactData.data[1].fact);

    
};

catFactGenerator()