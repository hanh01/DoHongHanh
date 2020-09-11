using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Lap071.Models;
using lap071.Models;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace lap071
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private List<Student> Students;

        public MainPage()
        {
            this.InitializeComponent();
            Students = StudentManager.GetStudents();
        }
        private void GridView_ItemClick1(Object sender, ItemClickEventArgs e)
        {
            var student = (Student)e.ClickedItem;
            ResultTextBlock1.Text = "You selected" + student.Name;
        }
       
    }
}
