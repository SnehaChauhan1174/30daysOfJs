//Day 1
//Activity 1:Variable Declaration
  //task1:Declare a variable using var assign it a number and log the value to the console



var id_check=1234
console.log(id_check) //output:1234

//Declare the variable using let assign it a string and log the value to the console


let named="sneha"
console.log(named) //output:sneha

//Activity 2:  constant declaration

  //Declare a variable using conbst assign it a boolean value and log the value 
  
   const isEmpty=true
    console.log(isEmpty) //output:true

 //Activity 3: Data types
   let number= 1174;                                  
   let bool=false                         
   let name1 = "sneha9";                            
   const post={
    username:"@snehachauhan",
    content:"this is myn first#post",
    likes:200,
    reposts:5,
    tags:["Coding","_Development_"]
};  
   let arr =[0,1,2,3];            
  
   console.log(typeof number)  //Output: number
   console.log(typeof bool)    //Output:boolean
   console.log(typeof name1)   //Output: string
   console.log(typeof post)    //Output: object
   console.log(typeof arr)    //Output: object
   // Activity 4: Reassigning values
  
  //task5: Declare a variable using 'let' ,assign it to an initial value, reassign a new value  and log both value to console.
  
  let reassign = "initial value";
  console.log(reassign);  //output : initial value

  reassign= "new value";
  console.log(reassign)  // output : new value

//Actvity 5: Understanding 'const'
  //task 6: try reassigning a variable declared with "const" and observe the error.

  const str = "mango" ;
  console.log(str) //output: mango
  
    str ="apple" //TypeError: Assignment to constant variable.

