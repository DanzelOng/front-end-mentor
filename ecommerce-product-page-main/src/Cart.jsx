import { productThumbnailViews } from "./products";
import iconSprites from "/images/icons.svg";

const Cart = ({ cartCount, clearCart }) => {
  return (
    <div className="fixed inset-0 px-3 before:fixed before:inset-0 before:z-[1000] before:bg-black/70 md:absolute md:block md:px-0">
      <div className="cart relative z-[1001] mx-auto mt-[6.5rem] w-full max-w-[23rem] rounded-lg bg-white md:mx-0 md:ml-auto md:mt-[5rem] md:block">
        <h3 className="border-b border-b-black/15 px-7 py-5 text-lg font-bold">
          Cart
        </h3>
        {cartCount ? (
          <div className="flex flex-col gap-6 px-6 py-7">
            <div className="flex flex-wrap justify-between gap-5">
              <div className="flex flex-wrap items-center gap-5">
                <img
                  src={productThumbnailViews[0]}
                  className="aspect-square h-12 rounded-md"
                />
                <div className="text-darkGrayishBlue">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {cartCount}{" "}
                    <span className="font-bold text-black">
                      ${(125 * cartCount).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <button aria-label="clears cart items" onClick={clearCart}>
                <svg className="aspect-square w-5 fill-gray/50 transition-all duration-200 hover:fill-black/65">
                  <use xlinkHref={`${iconSprites}#icon-delete`}></use>
                </svg>
              </button>
            </div>
            <a
              href="#"
              aria-label="Redirects to checkout page"
              className="block cursor-pointer rounded-lg bg-orange py-3 hover:text-veryDarkBlue/85 text-center font-bold text-veryDarkBlue transition-all duration-200 hover:bg-orange/65"
            >
              Checkout
            </a>
          </div>
        ) : (
          <p className="px-7 py-[3.75rem] text-center font-bold text-gray">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
