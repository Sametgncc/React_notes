import React, { useEffect, useState } from "react";
import { Card, Container, FormControl } from "react-bootstrap";
import data from "./countries.json";

const CountryFilter = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!search){
      setCountries([]);
      return;
    }
    const arr = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())  
    );
    setCountries(arr);
  }, [search]);

  return (
    <Container className="mt-5 ">
      <h1 className="text-center">Country Filter</h1>
      <FormControl
        placeholder="Enter Country Name"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      ></FormControl>
      <Card className="mt-5">
        <Card.Body>
          {countries.map((item, index) => (
            <p key={item.code}>
              {" "}
              {index + 1}-{item.name}{" "}
            </p>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CountryFilter;