using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab10.Models
{
    class MenuManager
    {
        public static void GetNews(string category, ObservableCollection<NewsMenu> newsMenus)
        {
            var allMenus = getNewsMenus();
            var fillteredNewsMenus = allMenus.Where(p => p.Category == category).ToList();
            newsMenus.Clear();

            fillteredNewsMenus.ForEach(p => newsMenus.Add(p));

        }

        private static List<NewsMenu> getNewsMenus()
        {
            var menus = new List<NewsMenu>();
            menus.Add(new NewsMenu() { Id = 1, Category = "Cake", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/Cake1.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Cake", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/Cake2.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Cake", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/Cake3.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Cake", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/Cake4.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Cake", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/Cake5.jpg" });

            menus.Add(new NewsMenu() { Id = 1, Category = "Drink", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/drink1.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Drink", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/drink2.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Drink", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/drink3.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Drink", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/drink4.jpg" });
            menus.Add(new NewsMenu() { Id = 1, Category = "Drink", Name = "a", Price = "50.000", Qty = "5", Image = "Assets/drink5.jpg" });

            return menus;
        }
    }
}
