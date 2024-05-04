import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./redux/store";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
