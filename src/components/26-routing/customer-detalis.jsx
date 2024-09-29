import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetalis = () => {
  const params = useParams();
  console.log(params);

  return <div>Customer Details of  {params.customerId}</div>;
};

export default CustomerDetalis;
