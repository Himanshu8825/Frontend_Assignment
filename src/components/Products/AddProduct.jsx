import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const AddProduct = ({ products, setProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { toast } = useToast();

  const handleAddProduct = () => {
    if (!name || !price) {
      toast({
        title: 'All Fields Are Required',
        variant: 'destructive',
      });
      return;
    }

    const isProduct = products.find((product) => product.name === name);
    if (isProduct) {
      toast({
        title: 'Product Already Exists',
        variant: 'destructive',
      });
      return;
    }

    setProducts([...products, { name, price }]);
    toast({
      title: 'Product Added Successfully :)',
    });

    setName('');
    setPrice('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add Product</h2>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button
        onClick={handleAddProduct}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all"
      >
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
