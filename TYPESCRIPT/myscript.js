function display1() {
    var obj = [
        { custid: 100, custname: "raj", address: "chennai" },
        { custid: 200, custname: "vijay", address: "blr" },
        { custid: 300, custname: "akhii", address: "hyd" }
    ];
    var d = document.getElementById("d1");
    var res = " ";
    obj.forEach(function (c) {
        res += "<li>".concat(c.custid, "</li>\n            <li>").concat(c.custname, "</li>\n            <li>").concat(c.address, "</li>");
    });
    d.innerHTML = res;
}
function showbyname() {
    var obj = [
        { custid: 100, custname: "raj", address: "chennai" },
        { custid: 200, custname: "vijay", address: "blr" },
        { custid: 300, custname: "akhii", address: "hyd" }
    ];
    var d = document.getElementById("d2");
    var res1 = " ";
    obj.forEach(function (c) {
        res1 += "<li>".concat(c.custname, "</li> ");
    });
    d.innerHTML = res1;
}
