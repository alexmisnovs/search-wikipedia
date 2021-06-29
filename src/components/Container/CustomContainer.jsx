import { useSearch, useDebounce, useSearchForm } from "../../hooks";

const CustomContainer = ({ children }) => {
  const { searchValue, onSearchChange } = useSearchForm();
  const { articles } = useSearch(useDebounce(searchValue));
  return children({ searchValue, onSearchChange, articles });
};

export default CustomContainer;
