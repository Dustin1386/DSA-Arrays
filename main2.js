const HashMap = require('./hasmaps')


// function main(){
// let lotr = new HashMap();

// HashMap.MAX_LOAD_RATIO = 0.5;
// HashMap.SIZE_RATIO = 3;

// lotr.set("Hobbit1", "Bilbo");
// lotr.set("Hobbit2", "Frodo");
// lotr.set("Wizard", "Gandalf");
// lotr.set("Human", "Aragorn");
// lotr.set("Elf", "Legolas");
// lotr.set("Maiar", "The Necomancer");
// lotr.set("Maiar", "Sauron");
// lotr.set("RingBearer", "Gollum");
// lotr.set("LadyOfLight", "Gladriel");
// lotr.set("HalfElven", "Arwen")
// lotr.set("Ent","Teebeard")
// lotr.set("LyOfLight", "Gladriel");
// lotr.set("lfElven", "Arwen")
// lotr.set("Et","Teebeard")
  
//    console.log(lotr.get('Hobbit1'))
//    console.log(lotr.get('Hobbit2'))
// }
// main()

// const WhatDoesThisDo = function(){
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new HashMap();
//     map1.set(str1,10);
//     map1.set(str2,20);
//     let map2 = new HashMap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3,20);
//     map2.set(str4,10);

//     console.log(map1.get(str1));
//     console.log(map2.get(str3));
// }
// WhatDoesThisDo()

function remove(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
          console.log(self)
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(remove('google'));

// let anagrams = [];
// const anagramListCreator =(word,anagram = "")=>{
//     if(!word){
//         anagrams.push(anagram);
//         return;
//     }
//     for(let i = 0; i < word.length; i++){
//         anagram += word[i]
//         anagramListCreator(word.slice(0,i) + word.slice(i + 1),anagram)
//         anagram = anagram.slice(0,anagram.length -1)
//     }
//     let anagramList = [...new Set(anagrams)];
//     for(let i = 0; anagramList.length; i++){
//         if(anagramList[i] === word){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// console.log(anagramListCreator('racecar'))
// console.log(anagramListCreator('radar'))
let palPerm = (s) =>{
    //if even there must be two of every char
    //if odd must be only one unique char
    //use hash table to store letters
    //if we see the same letter again delete from hash table
    //check hash at end  ood -1 even no keys
    let hash = {};
    let charCount = 0;

    for(let i = 0; i < s.length; i++){
        let c = s[i];
        if(c === ""){
            continue;
        }
        if(hash[c]){
            delete hash[c]
        }else{
            hash[c] = true
        }
        charCount++
    }
    if(charCount % 2 === 0){
        return Object.keys(hash).length === 0;
    }else{
        return Object.keys(hash).length === 1;
    }
}

console.log(palPerm("racecar"))