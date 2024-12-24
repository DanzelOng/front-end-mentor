import { useState } from "react";
import Header from "./Header";
import ProductPage from "./ProductPage";

const App = () => {
  const [productCartCount, setProductCartCount] = useState(0);
  const [productCurrentView, setProductCurrentView] = useState(1);
  const [lightBoxView, setLightBoxView] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addToCart = (qty) => setProductCartCount((count) => qty + count);
  const clearCart = () => setProductCartCount(0);
  const getNextView = () =>
    setProductCurrentView((view) => (view === 4 ? 1 : ++view));
  const getPreviousView = () =>
    setProductCurrentView((view) => (view === 1 ? 4 : --view));
  const toggleProductView = (num) => setProductCurrentView(num);
  const toggleLightBoxView = () => setLightBoxView((state) => !state);
  const toggleCart = () => setIsCartOpen((state) => !state);
  return (
    <>
      <div className="md:mx-6">
        <Header
          toggleCart={toggleCart}
          isCartOpen={isCartOpen}
          cartCount={productCartCount}
          clearCart={clearCart}
        />
      </div>
      <ProductPage
        currentView={productCurrentView}
        addToCart={addToCart}
        getNextView={getNextView}
        getPreviousView={getPreviousView}
        toggleProductView={toggleProductView}
        lightBoxView={lightBoxView}
        toggleLightBoxView={toggleLightBoxView}
        isCartOpen={isCartOpen}
      />
    </>
  );
};

export default App;
