import { createContext, useState } from "react";

export const RateContext = createContext();

export const RateContextProvider = ({ children }) => {

  const [showRate, setShowRate] = useState(false);
  const [rate, setRate] = useState(0);
  
  const onRate = (num) => {
    setRate(num);
  }

  const onHandleRate = () => {
    setShowRate(!showRate);
  };

  return <RateContext.Provider value={{showRate, onHandleRate, onRate, rate}}>{children}</RateContext.Provider>;
};
