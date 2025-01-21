import { Input } from '@/components/ui/input';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search Product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
