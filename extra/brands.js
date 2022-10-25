// import { async } from "@firebase/util";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import ProductsTable from "../comps/productsTable";
import Axios from "axios";

export default function EditProducts({ products }) {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="admin-products section">
      <h1>All Produtcs</h1>
      <ProductsTable products={products} />
    </div>
  );
}

export async function getStaticProps() {
  let response = [];
  await Axios.get(`https://rxedu-api.vercel.app/api/v1/brand_drugs`)
    .then((_response) => {
      response = _response.data.data;
    })
    .catch(() => {
      console.log("Opps an error occured -- Locals2");
      // console.log(`${process.env.NEXT_PUBLIC_API_PRODUCTS}`);
    });
  // const data = response.json();
  // console.log(response);
  return {
    props: {
      products: response,
    },
  };
}
