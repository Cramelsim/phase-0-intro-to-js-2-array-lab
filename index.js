// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
     return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop(cats);
}
function destructivelyRemoveFirstCat(){
    return cats.shift(cats);
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat() {
    return cats.slice(0, -1); 
  }
  function removeFirstCat(){
    return cats.slice(1);
  }
