import React, { useEffect } from "react";
import axios from "axios";

const Transaksi = () => {
  // const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllTrans = async () => {
      try {
        const res = axios.get("http:localhost:8800/produk");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTrans();
  });

  return <div>Transaksi</div>;
};

export default Transaksi;
