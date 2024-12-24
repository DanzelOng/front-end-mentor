import { useState } from "react";
import Cart from "./Cart";
import { navigationLinks } from "./products";
import avatarImg from "/images/image-avatar.png";
import iconSprites from "/images/icons.svg";

const Header = ({ toggleCart, isCartOpen, cartCount, clearCart }) => {
  const [isMenuOpen, setMenuBar] = useState(false);
  const toggleMenu = () => setMenuBar((state) => !state);
  return (
    <header className="relative mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-7 p-6 md:border-b md:border-black/15 md:px-0">
      <div className="flex gap-5 md:gap-[3.75rem]">
        <button
          aria-label="toggles navigation menu"
          aria-controls="header-navigation"
          className="block md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className={`${isMenuOpen ? "z-[10002]" : ""} relative aspect-square w-5 fill-gray`}
          >
            <use
              xlinkHref={`${iconSprites}#icon-${!isMenuOpen ? "menu" : "close"}`}
            ></use>
          </svg>
        </button>
        <a href="#" className="cursor-pointer">
          <svg className="h-[1.25rem] w-[8.625rem]">
            <use xlinkHref={`${iconSprites}#logo`}></use>
          </svg>
        </a>
        <nav id="header-navigation" className="relative">
          {isMenuOpen && (
            <div
              data-menuOverlay
              className="fixed inset-0 z-[9999] bg-black/70"
            ></div>
          )}
          <ul
            className={`${!isMenuOpen ? "translate-x-[-100.5%]" : "translate-x-[0]"} fixed inset-0 z-[10001] w-[50%] gap-7 space-y-5 bg-white p-6 pt-24 font-kumbhSans text-lg font-bold text-veryDarkBlue transition-all duration-300 md:static md:flex md:translate-x-0 md:space-y-0 md:bg-transparent md:p-0 md:pt-0 md:text-base md:font-normal md:before:hidden`}
          >
            {navigationLinks.map((link, idx) => (
              <li key={idx} className="relative">
                <a
                  className={`${isMenuOpen ? "hover:text-orange" : "hover:before:bg-orange hover:before:opacity-100"} transition-all duration-200 before:absolute before:inset-0 before:top-[211%] before:block before:h-[5px] before:bg-transparent before:opacity-0 before:transition-all before:duration-300`}
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-7">
        <button
          className={`${isCartOpen ? "bg-white" : "hover:border-veryDarkBlue"} ${cartCount ? "before:absolute before:right-[-1.5px] before:top-[-2px] before:flex before:h-4 before:w-5 before:items-center before:justify-center before:rounded-full before:bg-orange before:text-xs before:text-white before:content-[attr(data-cartCount)] md:before:h-5 md:before:w-6" : ""} relative z-[1005] rounded-full border-2 border-transparent px-1 transition-all duration-300 md:px-2`}
          aria-label="toggles cart"
          data-cartCount={cartCount}
          onClick={toggleCart}
        >
          <svg className="aspect-square w-6">
            <use xlinkHref={`${iconSprites}#icon-cart`}></use>
          </svg>
        </button>
        <img
          className="w-8 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 hover:border-orange md:w-10"
          src={avatarImg}
          alt="avatar"
        />
      </div>
      {isCartOpen && <Cart cartCount={cartCount} clearCart={clearCart} />}
    </header>
  );
};

export default Header;
