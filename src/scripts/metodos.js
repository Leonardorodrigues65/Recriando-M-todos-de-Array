let numbers = [25 , 38 , 19 , 45 , 80]



// -----  MAP ----------- // 


function callbackMap (element , index , array ){

    return `O numero:[${element - (element * 0.5 )}]  index:${index} e ele faz parte do Array [${array}]`

}


function map (array , callback) {

    let newArray = []


    for(let i = 0 ; i < array.length ; i++){

        newArray.push(callback(array[i] , i , array))
    }

    return newArray

}

console.log(map(numbers , callbackMap))




//------   FILTER  ----------- //



function callbackFilter(element , index , array){

    return `O numero [${element }] index: ${index } e ele faz parte  do array [${array}]`


}


function filter(array , callback) {

    let arrFilter = []

    for(let i = 0 ; i < array.length ; i++){

        if(array[i] > 2 ){

            arrFilter.push(callback(array[i] ,i , array))
        }
    }

    return arrFilter

}


console.log(filter( numbers  , callbackFilter))





// ----- FIND ------- //


function callbackFind(element , index , array){

    return array[index];

}



function find (array , callback ){

    let  numFind 


    for(let i = 0 ; i < array.length ; i++){

        if(array[i] == 38){

            numFind = (callback(array[i] , i , array))
        }

    }

    return numFind

}

console.log(find( numbers , callbackFilter))




// ------  REDUCE ------////




function callbackReduce(accumulator , amount ){

    return accumulator

}


function reduce (array , callback){

    let accumulator = 0

    for(let i = 0 ; i < array.length ; i++){

        accumulator += (callback(array[i], i , array))
    }

    return `O total é ${accumulator}`

}

console.log(reduce(numbers , callbackReduce))



// ------- INCLUDE ----- //



function include(array , seekNumber){

    for(let i = 0 ; i < array.length ; i++){

        if(array[i] == seekNumber){

            return true

        }
    }

    return false

}

console.log(include(numbers , 39))




// ---- indexOf ----- // 


function indexOf (array , seekNumber){

    for(let i = 0 ; i < array.length ; i++){

        if(array[i] == seekNumber){

            return i
        }
    }

   return '-1'

}


console.log(indexOf(numbers , 38))




