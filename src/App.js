import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import CalcComponents from './components/calcComponents';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter Example</h1>
        <CalcComponents />
      </div>
    </Provider>
  );
};

export default App;