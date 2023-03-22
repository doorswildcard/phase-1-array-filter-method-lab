// Code your solution here

function findMatching(arr, str){
    let match = arr.filter(name => name.toLowerCase() === str.toLowerCase());
    return match;
}

function fuzzyMatch(arr, str){
    let match = []
     match = arr.filter(name => name.slice(0,str.length) === str.slice())
    return match
}

function matchName(arr, str){
    let match = []
     match = arr.filter(arr => arr.name === str)
     return match

}
