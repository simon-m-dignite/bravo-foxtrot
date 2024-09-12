import React, { useEffect } from "react";
import Products from "../../components/Products/Products";
import Lenis from "lenis";

const ProductsPage = () => {
  useEffect(() => {
    document.title = "Products - Bravo Foxtrot";
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Products />
    </div>
  );
};

export default ProductsPage;
