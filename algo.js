function urlify(string){
    let word  = string.replace('', '%20')
}

urlify('tahuna dfsdf')

function remove(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 5){
        let numArr = arr.splice(i,arr[i])
        console.log(numArr)
        }
    }
}

remove ([55,5,3,2])

// Max sum in the array

function highestSum(num){
    highestSum = 0
    currentSum = 0
    for(let i  of numbers){
        currentSum = Math.max(0,currentSum +i);
        highestSum = Math.max(highestSum, currentSum);

    }
}

//concat arrays
//  function sortArr (arr1,arr2){
//     let newArr = arr1.concat(arr2);
//    console.log(newArr.sort((a,b)=> a-b)) 
//  }
// sortArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])


function remove(string, charRemove){
    newString = "dfsd"
    for(let i = 0; i < string.length; i++){
        if(string[] === charRemove) {
          newString = string.splice(0,charRemove)
          return newString
        }
        else{
            return "ldd"
        }
    }console.log(newString)
    
}

remove("hello",'el')