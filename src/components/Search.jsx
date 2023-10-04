import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CarContext } from "../providers/contextProvider";

const Search = () => {
    const { search } = useContext(CarContext);

    return (
        <div className="bg-[#e0ecf7] rounded-3xl shadow-xl drop-shadow-2xl border   px-5 py-5 mt-8 flex items-center gap-5">
            {/*search bar*/}
            <div className="relative border w-[300px]">
                <input className="rounded-3xl  px-5 w-[300px] py-2" type="text" placeholder="Search"
                    onChange={(e) => search(e.target.value)}
                />
                <AiOutlineSearch className="h-6 w-6 absolute top-2 right-3" />
            </div>
            <select className="bg-transparent text-gray-500" name="" id="">
                <option value="">Relevance</option>
                <option value="">Relevance</option>
                <option value="">Relevance</option>
            </select>
            <select className="bg-transparent text-gray-500" name="" id="">
                <option value="">All brands</option>
                <option value="">All brands</option>
                <option value="">All brands</option>
            </select>
        </div>
    );
};

export default Search;