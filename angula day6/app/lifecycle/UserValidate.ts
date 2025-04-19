import { AbstractControl } from "@angular/forms";

 

//abstract class is a way  to read the value from input
 export function checkalphabet(txtval:AbstractControl)
 {
    var res = txtval.value
    return res.startsWith('A')?null : {msg:true}
 }


































 