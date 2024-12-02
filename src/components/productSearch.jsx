import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/cartSlice";

export default function ProductSearch() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    dispatch(setSearchQuery(inputValue));
  };

  const handleClearInput = () => {
    setSearchValue("");
    dispatch(setSearchQuery(""));
  };

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
      <Input
        type="text"
        placeholder="Search products..."
        value={searchValue}
        onChange={handleInputChange}
        className="pl-8 pr-10"
      />
      {searchValue && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full"
          onClick={handleClearInput}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
}
