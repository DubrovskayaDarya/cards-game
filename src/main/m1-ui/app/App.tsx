import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../m2-bll/b1-store/store";
import {Header} from "../header/Heder";
import {Main} from "../main/Main";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Provider store={store}>
              <Header/>
              <Main/>
          </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
