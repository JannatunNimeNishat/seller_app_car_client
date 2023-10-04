import { useState } from "react";
import { createContext } from "react";
import data from '../../public/cars.json'
export const CarContext = createContext();


const ContextProvider = ({ children }) => {

    // global state
    const [allCars, setAllCars] = useState(data);
    
    //local state
    const [cars, setCars] = useState(data);


    const search = (value) => {
        const regex = new RegExp(value, 'i');
        const searchedCars = allCars?.filter(car => regex.test(car?.model))
        setCars(searchedCars );
        console.log('search', value, searchedCars);


    }

    const value = {
        cars,
        search
    }

    return (
        <CarContext.Provider value={value}>
            {children}
        </CarContext.Provider>
    );
};

export default ContextProvider;