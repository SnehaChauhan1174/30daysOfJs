//Day 1
//Activity 1:Variable Declaration
//Declaration of var data type

var id_check=1234
console.log(id_check) //output:1234

//Declaration of let data type

let named="sneha"
console.log(named) //output:sneha

//Activity 2:  constant declaration

  //Declaration of const data type
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
  console.log(Name) //output: mango
  
    str ="apple" //TypeError: Assignment to constant variable.

