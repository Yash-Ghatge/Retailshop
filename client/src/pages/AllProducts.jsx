import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
const AllProducts = () => {
  const { searchQuery } = useAppContext();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const res = await fetch(`http://localhost:4000/api/product/list?page=${page}&limit=${limit}`);
      const data = await res.json();

      setProducts(data.products || []);
      setLoading(false);
    };

    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-6">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>

      <div className="flex justify-center mt-8">
          <Pagination page={page} totalPages={5} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default AllProducts;
