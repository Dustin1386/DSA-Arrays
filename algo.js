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

