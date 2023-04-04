let FinalArray =[]   // empty array to store obje values
let obj={ value: 1, rest: { value: 2, rest: { value: 3, rest: {value:4 , rest:null}} }}



function AddtoArray(objetGiven){

    for(let key in objetGiven){

           if(objetGiven[key]>0){
            FinalArray.push(objetGiven[key])
           }else{
             let {...data} = objetGiven[key]
             for(let x in data){

                 const{value} = data[x];

                 FinalArray.push(value)
        
             }


           }
           



    //     const values = objetGiven[key];
    //           let {value}=values
    //    console.log(value);
        // FinalArray.push(objetGiven[key])
    }
}

// passing argument obj
AddtoArray(obj)

console.log(FinalArray);