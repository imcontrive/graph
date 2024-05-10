import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Graph = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Graph</h1>
      {jsonData && (
        <Plot
          data={jsonData}
          layout={{ title: 'Your Graph Title' }}
        />
      )}
    </div>
  );
};

export default Graph;
