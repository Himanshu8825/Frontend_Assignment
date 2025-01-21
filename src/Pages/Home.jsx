import { Button } from '@/components/ui/button';
import { AddProduct, ProductList, Search } from '@/Index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center bg-white shadow-md p-4 mb-6 rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
        <Button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </header>

      <main className="w-[80%] mx-auto bg-white shadow-md p-6 rounded-md">
        <div className="mb-4">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="mb-4">
          <AddProduct products={products} setProducts={setProducts} />
        </div>

        <div>
          <ProductList products={filteredProducts} setProducts={setProducts} />
        </div>
      </main>
    </div>
  );
};

export default Home;
