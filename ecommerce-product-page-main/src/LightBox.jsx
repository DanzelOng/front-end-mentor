import { productViews, productThumbnailViews } from "./products";
import iconSprites from "/images/icons.svg";

const LightBox = ({
  currentView,
  toggleLightBox,
  getNextView,
  getPreviousView,
  toggleProductView,
}) => {
  return (
    <div className="inset-0 hidden place-items-center before:absolute before:inset-0 before:z-[1000] before:opacity-70 md:fixed md:grid md:before:bg-black">
      <div className="z-[1001] flex flex-col gap-6 p-5">
        <button
          onClick={toggleLightBox}
          aria-label="closes product lightbox"
          className="ml-auto"
        >
          <svg className="aspect-square w-6 fill-lightGrayishBlue transition-all duration-200 hover:fill-orange">
            <use xlinkHref={`${iconSprites}#icon-close`}></use>
          </svg>
        </button>
        <div className="relative">
          <button
            className="absolute bottom-[50%] left-[0%] flex translate-x-[-50%] translate-y-[50%] items-center rounded-full bg-white p-3"
            onClick={getPreviousView}
          >
            <svg className="aspect-square w-3.5">
              <use xlinkHref={`${iconSprites}#icon-previous`}></use>
            </svg>
          </button>
          <button className="cursor-default">
            <img
              className="w-full max-w-[25rem] md:rounded-xl"
              src={productViews[currentView]}
              alt="limited edition sneakers"
            />
          </button>
          <button
            className="absolute bottom-[50%] right-[0%] flex translate-x-[50%] translate-y-[50%] items-center rounded-full bg-white p-3"
            onClick={getNextView}
          >
            <svg className="aspect-square w-3.5">
              <use xlinkHref={`${iconSprites}#icon-next`}></use>
            </svg>
          </button>
        </div>
        <ul className="flex justify-center gap-5">
          {productThumbnailViews.map((view, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  toggleProductView(idx + 1);
                }}
              >
                <div
                  className={`${currentView === idx + 1 ? "border-orange" : "border-transparent"} relative w-[3.75rem] rounded-lg border-2 transition-all duration-300`}
                >
                  <div
                    className={`${currentView === idx + 1 ? "before:absolute before:inset-0 before:z-[] before:block before:rounded-lg before:bg-white before:opacity-65" : ""} relative before:transition-all before:duration-300 hover:before:absolute hover:before:inset-0 hover:before:z-[999] hover:before:block hover:before:rounded-lg hover:before:bg-white hover:before:opacity-65`}
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
    </div>
  );
};

export default LightBox;
