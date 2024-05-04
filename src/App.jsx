import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./redux/store";

import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import ModalContextProvider from "./utils/ModalContext";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
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
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
