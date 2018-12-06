import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/Index.jsx';

ReactDOM.render(
  <Index url={'http://localhost:3000/events'}
  perPage={10} />, 
  document.getElementById('app'));
