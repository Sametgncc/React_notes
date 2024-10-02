import React, { useEffect } from "react";
import { AppRouter } from "./router";
import StoreContext from "./store";
import UseCurrencies from "./hooks/useCurrencies";
import Loading from "./components/00-common/loading";

export const App = () => {
  
  const { currencies,error, loading } = UseCurrencies();

  if (loading)  return <Loading/>;

  return (
    <StoreContext.Provider value={{ currencies }}>
      <AppRouter />
    </StoreContext.Provider>
  );
};

export default App;
