let numbers = [24 , 38 , 19 , 45 , 80]


function callbackMap(number){

    const multi = number * 2

    return multi
}

function map(number , callback){
    
    let array = []

    for(let i = 0 ; i < number.length ; i++){

        let value = number[i]

        let result = callback(value , i , number)

        array.push(result)
    }

    return array

}

console.log(map(numbers , callbackMap))



// ----   FILTER  --------- // 



function callbackFilter(number){

    const biggerNumber = number > 30

    return biggerNumber
}


function filter(number , callback){

    let array = []

    for(let i = 0 ; i < number.length ; i++){

        let value = number[i]

        let result = callback(value , i , number)

        if(result){

            array.push(value)
        }
    }

    return array

}

console.log(filter(numbers , callbackFilter))




// ------ FIND ------- ////

function callbackFind(number){

    const biggerNumber = number > 30

    return biggerNumber

}


function find(number , callback){

    for(let i = 0 ; i < number.length ; i++){

        let value = number[i]

        let result = callback(value , i , number)

        if(result){

            return value
        }
    }

}

console.log(find(numbers , callbackFind))




// ----- REDUCE ----- ///


function callbackReduce(accumalator , currentValue){

    const sum = accumalator + currentValue

    return sum 
}

function reduce(number , callback , initialValue = 0 ){

    let accumalator = 0 

    for(let i = 0 ; i < number.length ; i++){

        let value = number[i]

        accumalator = callback(accumalator , value , i , number)
    }

    return initialValue + accumalator
}

console.log(reduce(numbers , callbackReduce))


// ----- INCLUDES  ------ ///


function includes(number , seekNumber){

    let result = 0 

    for(let i = 0 ; i < number.length ; i++){

        let value = number[i]

        if(seekNumber == value){

            result = value

        }
    }

    if(result  === seekNumber){

        return true

    }else{

        return false 
    }

}

console.log(includes(numbers , 80))



// ---- IndexOf ---///



function indexOf( number , seekvalue , seekPosition = 0 ) {

    let position = ''

    for(let i = seekPosition ; i < number.length ; i++){

        let value = number[i]

        if(seekvalue === value ){

            position = i 
        }
    }

    if(position !== ''){

        return position

    }else{

        return '-1'
    }


}

console.log(indexOf(numbers , 24))



