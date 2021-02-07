import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Row({ title, fetchUrl }) {
  const [data, setData] = useState([]);

  useEffet(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchDta();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
