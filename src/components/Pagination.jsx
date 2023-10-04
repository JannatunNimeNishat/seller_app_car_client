import { useContext } from "react";
import { CarContext } from "../providers/contextProvider";

import { BsArrowLeftShort,BsArrowRightShort } from "react-icons/bs";

const Pagination = () => {
    const { allCars, totalPages, handlePageClick, currentPage } = useContext(CarContext);
    return (
        <div className=" my-5 border items-center py-5 mt-5  shadow-2xl drop-shadow-2xl  rounded-2xl text-gray-500 flex justify-between px-8">
            <p className="text-gary-500">{allCars?.data?.length} from {allCars?.totalCars}</p>

            <div className="flex gap-4 items-center ">
                {/* perv */}
                <BsArrowLeftShort
                    className="cursor-pointer h-8 w-8 bg-[#e0ecf7] shadow-xl drop-shadow-2xl border rounded-xl text-gray-500" 
                    onClick={() => handlePageClick(currentPage - 1)}
                />

                {
                    totalPages.map((item) => <div
                        key={item.id}
                        className="bg-[#e0ecf7] px-3 py-1 shadow-xl drop-shadow-2xl border rounded-xl "
                    >
                        <p className={` font-bold cursor-pointer
             ${currentPage === item.id && 'text-red-500'} 
            `}
                            onClick={() => handlePageClick(item.id)}
                        >{item?.value}</p>

                    </div>)
                }

                {/* next */}
                <BsArrowRightShort
                    className="cursor-pointer h-8 w-8 bg-[#e0ecf7] shadow-xl drop-shadow-2xl border rounded-xl text-gray-500"

                    onClick={() => handlePageClick(currentPage + 1)}
                />


            </div>
        </div>
    );
};

export default Pagination;