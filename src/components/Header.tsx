import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logo from "../assets/images/logo.png";

const Header = () => {
  const toggleMobileMenu = () => {
    const sidebar = document.querySelector('aside');
    sidebar?.classList.toggle('-translate-x-full');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            data-mobile-menu-trigger 
            className="p-2 hover:bg-accent rounded-full transition-colors md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden transition-transform duration-300 hover:scale-[2.5] hover:z-50 cursor-pointer">
              <img 
                src={logo} 
                alt="The Office of Nils Johansson Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-light tracking-wider text-muted-foreground/80">
                The Office of
              </span>
              <h1 className="text-xl font-medium tracking-tight text-foreground -mt-1 sm:text-2xl">
                Nils Johansson
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Profile button removed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
