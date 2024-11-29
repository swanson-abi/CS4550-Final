import React from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './SnackStack/store';
import SnackStack from './SnackStack';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="SnackStack" />} />
            <Route path="/StackStack/*" element={<SnackStack />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;