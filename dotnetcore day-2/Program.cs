using yourlib;
using Newtonsoft.Json;
Console.WriteLine("Hello, World!");
// Mylibcls obj = new Mylibcls();
// obj.Add(10,20);
// obj.Multiply(10,20);

var data = new 
{
    studentid=101,
    studentname="Rahul",
    studentaddress="USA"
};
Console.WriteLine($"{data.studentid} {data.studentname} {data.studentaddress}");
string json = JsonConvert.SerializeObject(data,Formatting.Indented);
System.Console.WriteLine(json);