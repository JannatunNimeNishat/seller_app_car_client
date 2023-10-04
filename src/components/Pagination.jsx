import { useContext } from "react";
import { CarContext } from "../providers/contextProvider";


const Pagination = () => {
    const { allCars, totalPages, handlePageClick, currentPage } = useContext(CarContext);
    return (
        <div className="my-5 border items-center py-5 mt-5  shadow-2xl drop-shadow-2xl  rounded-2xl text-gray-500 flex justify-between px-8">
            <p className="text-gary-500">{allCars?.data?.length} from {allCars?.totalCars}</p>

            <div className="flex gap-4 items-center ">
                {/* perv */}
                <span
                    className="cursor-pointer"
                    // onClick={() => handlePageClick(allCars?.prev?.page)}
                    onClick={() => handlePageClick(currentPage - 1)}
                >prev</span>

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
                <span
                    className="cursor-pointer"
                    // onClick={() => handlePageClick(allCars?.next?.page)}
                    onClick={() => handlePageClick(currentPage + 1)}
                >next</span>


            </div>
        </div>
    );
};

export default Pagination;