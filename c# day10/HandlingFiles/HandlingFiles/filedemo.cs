﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HandlingFiles
{
    internal class filedemo
    {
        public void demo1()
        {
            //filestream,strem reader,stream wrtiter
            FileStream fs = new FileStream("c:\\mydirectory\\hello.txt",FileMode.OpenOrCreate,FileAccess.ReadWrite); //it will creates a new file
            //or this is also correct 
            //FileStream fs = new FileStream(@"c:\mydirectory\hello.txt", FileMode);

            StreamWriter sw = new StreamWriter(fs);
            sw.WriteLine("all the best for tmrw");
            sw.WriteLine("have a great day!");
            sw.WriteLine("hats off to you all!!");

            sw.Close();
            fs.Close();//close the file,so others can use it
            fs.Dispose();//release all resources

            Console.WriteLine("congo!! file created");

        }
        public void demo2()
        {
            FileStream fs = new FileStream("c:\\mydirectory\\hello.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite);
            StreamReader sr = new StreamReader(fs);

            string data=sr.ReadToEnd();
            Console.WriteLine(data);
            sr.Close();
            fs.Close();
            fs.Dispose();
        }
        public void demo3()
        {
            //how file info works
            FileInfo f =new FileInfo(@"c:\mydirectory\hello.txt");

            Console.WriteLine(f.FullName);
            Console.WriteLine(f.Length);
            Console.WriteLine(f.CreationTime);
            Console.WriteLine(f.DirectoryName);
            Console.WriteLine(f.LastAccessTime);
            Console.WriteLine(f.IsReadOnly);
        }
        public void demo4()
        {
            //binary reade / binary writer
            //.bin
            // why do you prefer binary files? 
            //binary : pdf files,videos,audio,binary
            //performance:faster than streamreader
            //it supports datatype
            /* FileStream fs = new FileStream("c:\\mydirectory\\hello.bin", FileMode.OpenOrCreate, FileAccess.ReadWrite);
            StreamReader sr = new StreamReader(fs);
            string data=sr.ReadToEnd();
            Console.WriteLine(data);
            sr.Close();
            fs.Close();
            fs.Dispose(); */

            //FileStream fs = new FileStream(@"d:\mydir\hello.bin",FileMode.OpenOrCreate,FileAccess.ReadWrite);
            //BinaryWriter binaryWriter = new BinaryWriter(fs);
            //binaryWriter.Write(100);
            //binaryWriter.Write("hello");
            //binaryWriter.Write(100.50); 
            //binaryWriter.Write(true);
            //binaryWriter.Write('A');

            //binaryWriter .Close();
            //fs.Close();
            //fs.Dispose();

            //Console.WriteLine("file created successfully");
        }
        public void demo5()
        {
            FileStream fs = new FileStream(@"d:\mydir\hello.bin", FileMode.OpenOrCreate, FileAccess.ReadWrite);
            BinaryReader binaryReader = new BinaryReader(fs);
            int i = binaryReader.ReadInt32();
            string s = binaryReader.ReadString();
            double d = binaryReader.ReadDouble();
            bool b = binaryReader.ReadBoolean();
            char c = binaryReader.ReadChar();
            Console.WriteLine(i);
            Console.WriteLine(s);
            Console.WriteLine(d);
            Console.WriteLine(b);
            Console.WriteLine(c);
            binaryReader.Close();
            fs.Close();
            fs.Dispose();
        }

    }
}
