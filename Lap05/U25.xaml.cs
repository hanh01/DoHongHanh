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

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=234238

namespace Lap05
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class U25 : Page
    {
        public U25()
        {
            this.InitializeComponent();
        }
        private void MyCalendarView_SelectedDatesChanged(
            CalendarView sender,
            CalendarViewSelectedDatesChangedEventArgs args)
        {
            var selectedDates = sender.SelectedDates.Select(p => p.Date.Month.ToString() + "/" + p.Date.Day.ToString())
                .ToArray();

            var values = string.Join(",", selectedDates);
            CalendarViewResultTextBlock.Text = values;
        }

        private void InnerFlyoutButton_Click(object sender, RoutedEventArgs e)
        {
            MyFlyout.Hide();
        }
        private string[] selectionItems = new string[]
          {"Ferdinand", "Frank", "Frida", "Higel", "Tag", "Tanya", "Tanner", "Todd" };
        private void MyAutoSuggestBox_TextChanged(
            AutoSuggestBox sender,
            AutoSuggestBoxTextChangedEventArgs args)
        {
            var autoSuggesBox = (AutoSuggestBox)sender;
            var filtered = selectionItems.Where(p => p.StartsWith(autoSuggesBox.Text))
                .ToArray();

            autoSuggesBox.ItemsSource = filtered;
        }
  
    }
}
