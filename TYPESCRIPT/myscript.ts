// function display()
// {
//    var res = (document.getElementById("t1") as HTMLInputElement).value
//     //alert(res);
//     var d =(document.getElementById("d1") as HTMLInputElement)
//     d.innerHTML = res;
// }
interface Icustomer
{
    custid:number;
    custname:string;
    address:string;
}
function display1()
{
    let obj:Icustomer[]=[
        {custid:100,custname:"raj",address:"chennai"},
        {custid:200,custname:"vijay",address:"blr"},
        {custid:300,custname:"akhii",address:"hyd"}
    ]
    var d=document.getElementById("d1") as HTMLDivElement;
    let res:string=" ";
    obj.forEach(c=>{
            res +=`<li>${c.custid}</li>
            <li>${c.custname}</li>
            <li>${c.address}</li>`
    });
    d.innerHTML=res;
}
function showbyname()
{ 
    let obj:Icustomer[]=[
        {custid:100,custname:"raj",address:"chennai"},
        {custid:200,custname:"vijay",address:"blr"},
        {custid:300,custname:"akhii",address:"hyd"}
    ]
    var d=document.getElementById("d2") as HTMLDivElement
        let res1:string=" ";
        obj.forEach(c=>{
            res1 += `<li>${c.custname}</li> `;
        });
        d.innerHTML=res1;
}
