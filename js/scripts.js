const input = 'The Vancouver Canucks will win the Stanely cup before I die';
const vowels = ['a', 'e', 'i', 'o','u']
const resultArray = []
for(let inputIndex =0; inputIndex <input.length; inputIndex++){
  //console.log(`inputIndex is ${inputIndex}.`)
   if(inout[inputIndex] === 'e'){
     resultArray.push(input[inputIndex]);
     if(inout[inputIndex] === 'u'){
     resultArray.push(input[inputIndex]);
   }
  for(let vowelIndex = 0; vowelIndex<vowels.length; vowelIndex++){

   if(input[inputIndex] ===  vowels[vowelIndex]){
     //console.log(input[inputIndex]);
     resultArray.push(input[inputIndex]);
   }
  }
    //console.log(`vowelIndex is ${vowelIndex}.`)
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);