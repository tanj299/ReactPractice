import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';

/**
 * App is the most top-level component
 * App (Parent) -> ItemPage, CartPage, Item, Nav (Children)
 */

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  }

  renderContent() {
    switch(this.state.activeTab) {
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>
      case 1: return <span> Cart </span>
      default: 
    }
  }

  render() {
    let {activeTab} = this.state; 
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;