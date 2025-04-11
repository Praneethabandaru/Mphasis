var customerdetails = /** @class */ (function () {
    function customerdetails() {
        this.obj = [
            { custid: 100, custname: "raj", address: "chennai" },
            { custid: 200, custname: "vijay", address: "blr" },
            { custid: 300, custname: "airan", address: "hyd" }
        ];
    }
    // obj:Icustomer[]=[
    //     {custid:100,custname:"raj",address:"chennai"},
    //     {custid:200,custname:"vijay",address:"blr"},
    //     {custid:300,custname:"kiran",address:"hyd"} 
    //   ]
    // here when we miss the spelling or something then if we use Icustomer[] then it will throw an error to us bcz the interface Icustomer detals should match with it but if we use any datatype it will not give us any error is we miss the spelling also.
    customerdetails.prototype.display = function () {
        //write a code to display all details 
        this.obj.forEach(function (c) {
            console.log(c.custid);
            console.log(c.custname);
            console.log(c.address);
            console.log("----------");
        });
    };
    customerdetails.prototype.showbyid = function () {
        //write a code to display cust by id
        // this.obj.forEach(e => {
        //     console.log(e.custid);
        //     console.log("----------");
        // });
        var c = this.obj.filter(function (e) { return e.custid == 100; });
        console.log(c);
    };
    customerdetails.prototype.showbyname = function () {
        //write a code to display cust starts with a 
        // this.obj.forEach(e => {
        //     console.log(e.custname);
        //     console.log("----------");
        // });
        var c = this.obj.filter(function (c) { return c.custname.startsWith('a'); });
        console.log(c);
    };
    return customerdetails;
}());
var obb = new customerdetails();
obb.display();
obb.showbyid();
obb.showbyname();
