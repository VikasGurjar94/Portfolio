import { NavLinks } from "@/constants";
import { X } from "lucide-react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {

  const sidebarOpenClose = showNav
    ? "translate-x-0"
    : "translate-x-[-100%]";

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    closeNav(); // closes menu after click
  };

  return (
    <div>

      {/* overlay */}
      <div
        className={`${sidebarOpenClose} fixed transform transition-all duration-500 inset-0 z-[1002]`}
      >

        {/* black overlay */}
        <div
          onClick={closeNav}
          className={`absolute ${sidebarOpenClose} transform transition-all duration-500 inset-0 bg-black opacity-70`}
        ></div>

        {/* menu */}
        <div
          className={`relative ${sidebarOpenClose} transform transition-all duration-500 delay-300 text-white flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-[1050]`}
        >

          {NavLinks.map((link, index) => {
            const sectionId = link.href.replace("#", "");

            return (
              <button
                key={index}
                onClick={() => handleScroll(sectionId)}
                className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
              >
                {link.name}
              </button>
            );
          })}

          <X
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          />

        </div>
      </div>
    </div>
  );
};

export default MobileNav;