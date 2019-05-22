import React, { Component }from 'react';
import { Provider } from 'react-redux';
import  store from './store';

import AppNavbar from '../src/components/AppNavbar';
import ShoppingList from '../src/components/ShoppingList';
import ItemModal from '../src/components/itemModal';
import { Container }  from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
          <AppNavbar />
          <Container>
              <ItemModal />

              <ShoppingList />
          </Container>
      </div>
    </Provider>
  
    );
  }

}

export default App;
