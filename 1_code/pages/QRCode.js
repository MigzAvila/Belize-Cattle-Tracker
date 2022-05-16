import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App text = 
    "antbio_type: tetracycline. birth_date: 01/12/2020 breed: Hereford cattle_id : 340 cattle_weight : 134lbs dna_type: Roman Briton, welsh combination farmer: Bob Smith gender: male location: Spanish Lookout rearing_type: free roaming repro_stat: none und_hlth_issues: bovine mastitis"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

