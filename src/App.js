import './App.css';
import Home from './pages/Home'
import Main from './pages/Main'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Searcher from './pages/Searcher'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers'
import initialState from './initialState'

const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Provider store = {store}>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Main} />
            <Route exact path="/products/:categoryProduct/:id" component={Shop}/>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/searcher" component={Searcher} />
          </Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;