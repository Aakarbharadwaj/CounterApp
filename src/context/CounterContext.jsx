import { createContext, useContext, useState } from "react"

const counterContext = createContext();
export const useCounter = () => useContext(counterContext)


export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const increment = () => {

        count < 5 ? setCount((prev) => prev + 1) : setCount(prev);
    }

    const decrement = () => {
        count > -5 ? setCount((prev) => prev - 1) : setCount(prev);
    }
    
    return (
        <counterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </counterContext.Provider>
    );
}
