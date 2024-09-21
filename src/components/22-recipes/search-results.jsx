import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Recipes from "./recipes";
import Recipe from "./recipe";

const SearchResults = ({ searchText }) => {
  const [recipes, setRecipes] = useState([]);


  //! Debouncing 
  useEffect(() => {
    const loadData = async () => {
      const res = await axios(
        `https://dummyjson.com/recipes/search?q=${searchText}`
      );

      const { data } = res;

      setRecipes(data.recipes);

    };

    const debounce = setTimeout(() => {
      loadData();
    })

    // ! Buradaki return ilk render  da calismaz 
    // ! Ne zamman ki searchText state degeri degisir o zman calisir 
   return () => clearTimeout(debounce);

  }, [searchText]);

  return (
    <Container className="my-4">
      <p>
          <em> {recipes.length} recipes found</em>
      </p>

      {searchText}

      <Row className="my-4" xs={1} sm={2} md={3} lg={4} xl={5}>
        {recipes.map((item) => (
          <Col key={item.id}>
            <Recipe {...item}></Recipe>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
