import { useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import close_icon_dark from "../../assets/close_icon_dark.png";
import close_icon from "../../assets/close_icon.svg";
import menu_icon_dark from "../../assets/menu_icon_dark.svg";
import menu_icon from "../../assets/menu_icon.svg";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const textColor = theme === "dark" ? "text-white" : "text-gray-700";

  const sidebarBg = theme === "dark" ? "bg-[#101010]" : "bg-white";

  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40
      py-4 sticky top-0 z-20 backdrop-blur-xl font-medium
      ${
        theme === "dark" ? "bg-[#101010]/70" : "bg-transparent sm:bg-white/50"
      }`}
    >
      <div className="w-32 sm:w-40"></div>

      <div
        className={`sm:text-sm max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0
        max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:pt-20 max-sm:transition-all sm:bg-transparent
        ${
          sidebarOpen
            ? "max-sm:w-60 max-sm:pl-10"
            : "max-sm:w-0 max-sm:overflow-hidden"
        }
        flex sm:flex-row sm:items-center sm:gap-5 ${textColor} ${sidebarBg} `}
      >
        <img
          src={theme === "dark" ? close_icon_dark : close_icon}
          alt="Close menu"
          className="w-5 absolute top-4 right-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {["Home", "Projects", "Skills", "Contact Us"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            onClick={() => setSidebarOpen(false)}
            className={`
      border-b-2 border-transparent      /* خط سفلي موجود دائمًا لكنه شفاف */
      sm:hover:border-b-[#00ff08]       /* يظهر أخضر عند hover على sm أو أكبر */
      transition-colors duration-300 ease-out
      ${theme === "dark" ? "text-white" : "text-black"}
    `}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          onClick={toggleTheme}
          src={theme === "light" ? sunIcon : moonIcon}
          alt="Toggle theme"
          className="w-5 h-5 cursor-pointer mr-3"
        />

        <img
          src={theme === "dark" ? menu_icon_dark : menu_icon}
          alt="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />
        <a
          href="#contact-us"
          className="
  text-sm
  max-sm:hidden
  flex items-center gap-2
  bg-[#00FF08]
  text-[#222]
  px-6 py-2
  rounded-[15px]
  cursor-pointer
  tracking-[1px]
  transition-all
  duration-500
  ease-out
  shadow-[0_0_15px_#00FF08]
  hover:scale-[1.05]
  hover:shadow-[0_0_5px_#00FF08,0_0_15px_#00FF08,0_0_30px_#00FF08]

  active:scale-[0.98]
"
        >
          Connect
        </a>
      </div>
    </div>
  );
}

export default Navbar;
