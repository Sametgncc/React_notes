import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import StoreContext from "../../store";

const CurrencyList = () => {
  const { currencies } = useContext(StoreContext);
  const arrCurrency = Object.entries(currencies);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Exchange Rates
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
        {arrCurrency.map((item) => (
          <Dropdown.Item href="#/action-1" key={item[0]}>
            1 {item[0]} = {(1 / item[1]).toFixed(2)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CurrencyList;
