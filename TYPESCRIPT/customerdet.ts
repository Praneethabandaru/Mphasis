interface Icustomer
{
    custid:number;
    custname:string;
    address:string;
}
class customerdetails
{
    obj:any=[
        {custid:100,custname:"raj",address:"chennai"},
        {custid:200,custname:"vijay",address:"blr"},
        {custid:300,custname:"airan",address:"hyd"}
    ]
    // obj:Icustomer[]=[
    //     {custid:100,custname:"raj",address:"chennai"},
    //     {custid:200,custname:"vijay",address:"blr"},
    //     {custid:300,custname:"kiran",address:"hyd"} 
    //   ]
        // here when we miss the spelling or something then if we use Icustomer[] then it will throw an error to us bcz the interface Icustomer detals should match with it but if we use any datatype it will not give us any error is we miss the spelling also.
    display()
    {
        //write a code to display all details 
        this.obj.forEach(c=> {
            console.log(c.custid);
            console.log(c.custname);
            console.log(c.address);
            console.log("----------");
        });
    } 
    showbyid()
    {
        //write a code to display cust by id
        // this.obj.forEach(e => {
        //     console.log(e.custid);
        //     console.log("----------");
        // });
        let c=this.obj.filter(e=> e.custid==100)
            console.log(c);
    }
    showbyname()
    {
        //write a code to display cust starts with a 
        // this.obj.forEach(e => {
        //     console.log(e.custname);
        //     console.log("----------");
        // });
        let c=this.obj.filter(c=> c.custname.startsWith('a'))
            console.log(c);
    }
}
let obb = new customerdetails();
obb.display();
obb.showbyid();
obb.showbyname();
