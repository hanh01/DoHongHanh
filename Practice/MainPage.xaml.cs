using Practice.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace Practice
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private List<Icon> Icons;
        private ObservableCollection<Product> Products;
        public MainPage()
        {
            this.InitializeComponent();
            Icons = new List<Icon>();
            Icons.Add(new Icon { NameIcon = "Cake1", IconPath = "Assets/cake1.jpg" }); ;
            Icons.Add(new Icon { NameIcon = "Cake2", IconPath = "Assets/cake2.jpg" });
            Icons.Add(new Icon { NameIcon = "Cake3", IconPath = "Assets/cake3.jpg" });
            Icons.Add(new Icon { NameIcon = "Cake4", IconPath = "Assets/cake4.jpg" });
            Icons.Add(new Icon { NameIcon = "Cake5", IconPath = "Assets/cake5.jpg" });
            ImageComboBox.ItemsSource = Icons;
            ImageComboBox.SelectedIndex = 0;

            Products = new ObservableCollection<Product>();
        }
        private void NewProductButton_Click(object sender, RoutedEventArgs e)
        {
            string avatar = ((Icon)ImageComboBox.SelectedValue).IconPath;
            Products.Add(new Product { Products = ProductTextBox.Text, Description = DescriptionTextBox.Text, Image = avatar });

            ProductTextBox.Text = "";
            DescriptionTextBox.Text = "";
            ImageComboBox.SelectedIndex = -1;

            ProductTextBox.Focus(FocusState.Programmatic);
        }
    }
}
