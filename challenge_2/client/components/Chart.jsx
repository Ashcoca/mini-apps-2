import React from 'react';

import {Line} from 'react-chartjs-2';


const Chart = (props) => {
  return (
    <div>
      <h2>Crypto Currency Trends</h2>
      <Line data={props.data} />
    </div>
  );
};


export default Chart;