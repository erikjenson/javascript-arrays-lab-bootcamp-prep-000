var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(a){
  kittens=[...kittens, a];
  return kittens;
}

function destructivelyPrependKitten(a){
  kittens=[a,...kittens];
  return kittens;
}
