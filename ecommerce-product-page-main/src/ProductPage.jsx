import { useState } from "react";
import LightBox from "./LightBox";
import { productViews, productThumbnailViews } from "./products";
import iconSprites from "/images/icons.svg";

const ProductPage = ({
  currentView,
  addToCart,
  getNextView,
  getPreviousView,
  toggleProductView,
  lightBoxView,
  toggleLightBoxView,
  isCartOpen,
}) => {
  const [productQty, setProductQty] = useState(0);
  const incrementQty = () => setProductQty((qty) => ++qty);
  const decrementQty = () => setProductQty((qty) => (qty === 0 ? qty : --qty));
  return (
    <main className="mx-auto grid w-full max-w-7xl grid-cols-1 md:mt-20 md:grid-cols-2 md:gap-20 md:px-10">
      <section>
        <div className={`${isCartOpen ? "block" : "relative"}`}>
          <button
            className={`${isCartOpen ? "hidden" : ""} absolute bottom-[50%] left-[0%] flex translate-y-[50%] items-center rounded-full bg-white p-3 md:hidden`}
            onClick={getPreviousView}
          >
            <svg className="aspect-square w-3.5">
              <use xlinkHref={`${iconSprites}#icon-previous`}></use>
            </svg>
          </button>
          <button
            className="cursor-default md:cursor-pointer"
            onClick={() => window.innerWidth >= 768 && toggleLightBoxView()}
          >
            <img
              className="md:rounded-xl"
              src={productViews[currentView]}
              alt="limited edition sneakers"
            />
          </button>
          <button
            className={`${isCartOpen ? "hidden" : ""} absolute bottom-[50%] right-[0%] flex translate-y-[50%] items-center rounded-full bg-white p-3 md:hidden`}
            onClick={getNextView}
          >
            <svg className="aspect-square w-3.5">
              <use xlinkHref={`${iconSprites}#icon-next`}></use>
            </svg>
          </button>
        </div>
        <div className="hidden md:mt-5 md:block">
          <ul className="flex gap-5">
            {productThumbnailViews.map((view, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    toggleProductView(idx + 1);
                  }}
                >
                  <div
                    className={`${currentView === idx + 1 ? "border-orange" : "border-transparent"} rounded-lg border-2 transition-all duration-300`}
                  >
                    <div
                      className={`${currentView === idx + 1 ? "before:absolute before:inset-0 before:block before:rounded-lg before:bg-white before:opacity-65" : ""} relative before:transition-all before:duration-300 hover:before:absolute hover:before:inset-0 hover:before:block hover:before:rounded-lg hover:before:bg-white hover:before:opacity-65`}
                    >
                      <img
                        src={view}
                        alt={`sneaker thumbnail-${idx + 1}`}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="space-y-7 p-5 md:mt-20 md:p-0">
        <div className="space-y-4">
          <div className="flex flex-col gap-y-3">
            <h6 className="text-sm font-bold uppercase tracking-wider text-darkGrayishBlue">
              Sneaker Company
            </h6>
            <h2 className="text-4xl font-bold text-veryDarkBlue md:leading-snug lg:max-w-[80%]">
              Fall Limited Edition Sneakers
            </h2>
          </div>
          <div className="space-y-6">
            <p className="leading-7 text-darkGrayishBlue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they&apos;ll withstand
              everything the weather can offer.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 md:flex-col md:items-start md:gap-3">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-veryDarkBlue">
                  $125.00
                </span>
                <span className="rounded bg-veryDarkBlue px-2 font-bold text-white">
                  50%
                </span>
              </div>
              <span className="font-bold text-darkGrayishBlue line-through">
                $250.00
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex items-center justify-between rounded-md bg-lightGrayishBlue px-5 py-2 font-bold md:w-[40%]">
            <button
              className="p-1 text-2xl text-orange md:text-lg"
              onClick={decrementQty}
            >
              -
            </button>
            <span className="text-2xl text-veryDarkBlue md:text-lg">
              {productQty}
            </span>
            <button
              className="p-1 text-2xl text-orange md:text-lg"
              onClick={incrementQty}
            >
              +
            </button>
          </div>
          <button
            onClick={() => !!productQty && addToCart(productQty)}
            className="flex items-center justify-center gap-4 rounded-md bg-orange p-3 text-sm font-bold text-veryDarkBlue transition-all duration-200 hover:bg-orange/50 md:w-[60%]"
          >
            <svg className="aspect-square w-6">
              <use xlinkHref={`${iconSprites}#icon-cart`}></use>
            </svg>
            Add to cart
          </button>
        </div>
      </section>
      {lightBoxView && (
        <LightBox
          currentView={currentView}
          toggleLightBox={toggleLightBoxView}
          getNextView={getNextView}
          getPreviousView={getPreviousView}
          toggleProductView={toggleProductView}
        />
      )}
    </main>
  );
};

export default ProductPage;
