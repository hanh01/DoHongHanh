using Lap071.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lap071.Models
{
    class StudentManager
    {
        public static List<Student> GetStudents()
        {
            var students = new List<Student>();

            students.Add(new Student { StudentId = 1, Name = "Pham Ngoc Quynh", Address = "Thai Binh", CoverImage = "Assets/IMG_1840.JPG" });
            students.Add(new Student { StudentId = 2, Name = "Tran Thi An", Address = "Bac Ninh", CoverImage = "Assets/an.jpg" });
            students.Add(new Student { StudentId = 3, Name = "Nguyen Van Hoang", Address = "Thanh Hoa", CoverImage = "Assets/3.png" });
            students.Add(new Student { StudentId = 4, Name = "Nguyen Ngoc Trung Hieu", Address = "Khong Biet", CoverImage = "Assets/3.png" });
            students.Add(new Student { StudentId = 5, Name = "Trieu Cao Chinh", Address = "Thai Binh", CoverImage = "Assets/3.png" });
            return students;
        }
    }
}
