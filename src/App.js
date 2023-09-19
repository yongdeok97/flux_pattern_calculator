import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import CalcComponents from './components/calcComponents';
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div>
        <h1>Redux Counter Example</h1>
        <CalcComponents />
      </div>
    </Provider>
  );
};

export default App;