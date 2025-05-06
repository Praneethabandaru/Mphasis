using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace oops
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //how to create object
            login ob =new login();
            ob.uname = "mphasis";
            ob.password= "india";
            ob.Validate();

            Employee e = new Employee();
            //Console.WriteLine("enter the age");
            //e.age = int.Parse(Console.ReadLine()); //set block is called 

            //Console.WriteLine(e.age); //this is not possible without get block we cant read the values 

            //Console.WriteLine("Enter the name");
            //e.name = Console.ReadLine();
            //Console.WriteLine(e.name);

            //Console.WriteLine("enter the address");
            //e.address = Console.ReadLine();
            //Console.WriteLine(e.address);

            //e.id = 100;
            //Console.WriteLine(e.id);

            //object initializer
            ipl o = new ipl()
            { 
                teamname = "rcb", 
                captain = "virat",
                budget = 1098765
            };
            o.printdetail();

            Movies m1 = new Movies()
            {
                MovieId=1,
                MovieName="Hi Nanna",
                Actor="Nani",
                Actress="mrunal thakur"
            };
            m1.showdetails();

            Movies m2 = new Movies()
            {
                MovieId = 2,
                MovieName = "Bahubali",
                Actor = "Prabhas",
                Actress = "Anushka Sharma"
            };
            m2.showdetails();

            Car c = new Car()
            {
                carname = "baleno",
                brand = "maruthi",
                carcapacity = 5
            };
            c.displaycardetails();

            Myteam m = new Myteam()
            {
                Teamid = 1,
                TeamNames = new string[]{ "csk", "rcb", "srh" }
            };
            m.printteamdetails();
        }
    }
}
