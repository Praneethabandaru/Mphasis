import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService { 
  
  Addnums(a:number,b:number):string
  {
    let c=a-b;
    // debugger

    return "the sums is :" +c
  }
  constructor()
  {
    console.log('constructor called')
  }
  dividenums(a:number,b:number):any
  {
    try 
    {
      let c=a/b;
      if(b==0)
      {
        throw new Error("you are trying to divide whith zero");
      } 
      return "the res is :" +c;
    }
    catch (error) 
    {
      console.log(error);
    }
  
  }
  validateage(nums:number)
  {
    // try
    // {
      if(nums<18)
        {
          throw new Error("age is less than 18")
        }
        else{
          console.log("invalid age");
        }
    // } 
    // catch (error)
    // {
    //   console.log(error);
    // }
   
  }
  
}
