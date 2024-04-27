import { useSearchContext } from "../context/SearchContext";

export default function Search() {
  const { searchQuery, setSearchQuery } = useSearchContext();

  //   console.log(searchQuery);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        className="w-[12rem] border border-[#ffe8cc] px-[8px] py-3 text-[16px]  focus:border-2 focus:border-[#ffa94d] focus:outline-none focus:rounded-sm"
        placeholder="Search posts..."
        type="text"
        onChange={handleChange}
        onBlur={handleChange}
      />
    </div>
  );
}
