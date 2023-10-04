import { useState } from "react";
import { createContext } from "react";
import data from '../../public/cars.json'
export const CarContext = createContext();


const ContextProvider = ({ children }) => {
    
    const [cars, setCars] = useState(data);

    

    const search = (value) => {
        console.log('search', value);
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