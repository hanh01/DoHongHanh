using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Content.Startup))]
namespace Content
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
