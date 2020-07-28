/////////////////////Factorial
const Factorial = n =>{
  if(n<0){
      return "error";
  }
  if(n==1 || n==0){
      return n;
  }
 return n+Factorial(n-1)
};
alert(Factorial(7));

////////////////Fibonacci

const fibonacci = n =>{
   if(n<=0){
       return 0
   }
   if(n==1){
       return 1;
 }
  return fibonacci(n-1)+fibonacci(n-2)
}
alert(fibonacci(5));


//////////////////////Prime

const Prime = n=>{
  if(n==2){
       alert(n==2);
   }
   if(typeof n!='number'){
       alert('Error')
  }
   for(let i=2;i<n;i++){
      
       if(n%i==0){
           alert('false');
           return false;
       }
       else{
           alert('true');
           return true;
       }

   }
           }
Prime(17);

////////////////////////toUpperCasetoLowerCase

const countSubString = (HELLO,w) => {
  let array=[];
  let j=0;
  for(let i=0;i<HELLO.length;i++){
      if(HELLO[i].toUpperCase()==w|| HELLO[i].toLowerCase()==w){
          array[j]=i;
          j++

      }
  }
 return array;

}
    alert(countSubString('heLloworld','l'));

//////////////////////////Array

const sqArray = array=>{
   const newArray=array.map(element=>{
       return Math.pow(element,2);
   })
  return newArray
}

alert(sqArray([7,4,11]));
