import React, { Children } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const MainContext = createContext();
function MainProvider({ children }) {
  const [basket, setbasket] = useLocalStorage("Value", []);

  function add(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      basket[index].count++;
      setbasket([...basket]);
    } else {
      setbasket([...basket, { ...item, count: 1 }]);
    }
  }
  function decrease(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    const element = basket[index];
    if (element.count > 1) {
      basket[index].count--;
      setbasket([...basket]);
    }
  }
  function removeBasket(item){
     setbasket(basket.filter((x)=>x._id!==item._id))
  }
  function Gettotal() {
      console.log(basket);
    return basket
      .reduce((prev, initial) => prev + (initial.count * initial.age), 0)
      .toFixed(2);
  }
  return (
    <>
      <MainContext.Provider value={{ basket, add, decrease, Gettotal,removeBasket }}>
        {children}
      </MainContext.Provider>
    </>
  );
}

export default MainProvider;
