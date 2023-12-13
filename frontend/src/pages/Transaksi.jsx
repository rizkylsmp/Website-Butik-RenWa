import React, { useEffect, useState } from "react";
import axios from "axios";

const Transaksi = () => {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    const fetchAllTrans = async () => {
      try {
        const res = await axios.get("http://localhost:3100/produk");
        setTrans(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchAllTrans();
  }, []);

  console.log(trans);

  return <div>Transaksi</div>;
};

export default Transaksi;
