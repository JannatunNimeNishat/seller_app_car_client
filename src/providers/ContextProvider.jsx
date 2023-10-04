import { useState } from "react";
import { createContext } from "react";

export const CarContext = createContext();

const ContextProvider = ({ children }) => {
    const [cars, setCars] = useState([{ text: 'hi' }]);
    const value = {
        cars
    }

    return (
        <CarContext.Provider value={value}>
            {children}
        </CarContext.Provider>
    );
};

export default ContextProvider;