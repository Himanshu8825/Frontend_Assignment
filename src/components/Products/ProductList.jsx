import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';

const ProductList = ({ products, setProducts }) => {

  const {toast} = useToast();

  const handleDelete = (name) => {
    setProducts(products.filter((product) => product.name !== name));
    toast({
      title: 'Product Deleted ',
      variant: 'destructive',
    });
  };

  if (!products || products.length === 0) {
    return <p className="text-red-700">No Product Found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Product List
      </h2>
      <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <TableCaption className="text-sm text-gray-600 mb-4">
          A list of your products.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[100px] text-gray-700 text-left px-4 py-2">
              Name
            </TableHead>
            <TableHead className="text-right text-gray-700 px-4 py-2">
              Price
            </TableHead>
            <TableHead className="text-right text-gray-700 px-4 py-2">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={product.name}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } hover:bg-gray-100 transition`}
            >
              <TableCell className="font-medium text-gray-900 px-4 py-2">
                {product.name}
              </TableCell>
              <TableCell className="text-right text-gray-800 px-4 py-2">
                ${product.price}
              </TableCell>
              <TableCell className="text-right text-gray-800 px-4 py-2">
                <Button
                  onClick={() => handleDelete(product.name)}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
