import Form from "next/form";
import { Earth } from "lucide-react"
const SearchForm = () => {
  return (
    <Form action="/" scroll={false} className="flex items-center w-full max-w-150 mx-auto rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:ring-2">
      <input
        name="query"
        defaultValue=""
        placeholder="Enter website URL (https://example.com)"
        className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-sm"
      />

      <button type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Scan Website 
      </button>
    </Form>
  );
};

export default SearchForm;
