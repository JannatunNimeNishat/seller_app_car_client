import { useEffect, useState } from "react";
import { createContext } from "react";
// import data from '../../public/cars.json'
export const CarContext = createContext();

const totalPages = [
    {
        id: 1,
        value: 1
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 3
    },
    {
        id: 4,
        value: 4
    },
    {
        id: 5,
        value: 5
    },
    {
        id: 6,
        value: 6
    },
    {
        id: 7,
        value: 7
    },
    {
        id: 8,
        value: 8
    },
    {
        id: 9,
        value: 9
    },
    {
        id: 10,
        value: 10
    },

]

const ContextProvider = ({ children }) => {

    // global state
    const [allCars, setAllCars] = useState([]);

    //local state
    const [cars, setCars] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData()
    }, [])


    const getData = (currentPage = 1, limit = 6) => {
        fetch(`http://localhost:5003/paginate?page=${currentPage}&limit=${limit}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                console.log(data.data, "userData");
                setAllCars(data);
                setCars(data)

            });
    }

    const search = (value = '') => {

        fetch(`http://localhost:5003/search/?searchValue=${value}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "search data");
                setAllCars(data);
                setCars(data)
            });

    }


    const handlePageClick = (pageNumber) => {
        setLoading(true);
        if (pageNumber <= 0 || pageNumber > 10) {
            setCurrentPage(1)
            getData(1);
        } else {
            setCurrentPage(pageNumber);
            getData(pageNumber);
        }
    }


    const value = {
        allCars,
        cars,
        search,
        totalPages,
        handlePageClick,
        currentPage,
        loading

    }

    return (
        <CarContext.Provider value={value}>
            {children}
        </CarContext.Provider>
    );
};

export default ContextProvider;