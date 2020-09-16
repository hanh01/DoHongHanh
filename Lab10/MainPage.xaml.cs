using Lab10.Models;
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

namespace Lab10
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private ObservableCollection<NewsMenu> NewsMenus;
        public MainPage()
        {
            this.InitializeComponent();
            NewsMenus = new ObservableCollection<NewsMenu>();
        }

        private void HamburgerButton_Click(object sender, RoutedEventArgs e)
        {
            MySplitView.IsPaneOpen = !MySplitView.IsPaneOpen;
        }

        private void ListBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (Cake.IsSelected)
            {
                MenuManager.GetNews("Cake", NewsMenus);
                TitleTextBlock.Text = "Cake";
            }else if (Drink.IsSelected)
            {
                MenuManager.GetNews("Drink", NewsMenus);
                TitleTextBlock.Text = "Drink";
            }
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            Cake.IsSelected = true;
        }
    }
}
