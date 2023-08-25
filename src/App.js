import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItems/AddItems';

class App extends Component {
  initialState = {
    items: [
      { id: 1, name: 'Hamza', age: 22 },
      { id: 2, name: 'Mohammed', age: 23 },
      { id: 3, name: 'Abdo', age: 24 },
    ],
  };

  state = {
    items: [
      { id: 1, name: 'Hamza', age: 22 },
      { id: 2, name: 'Mohammed', age: 23 },
      { id: 3, name: 'Abdo', age: 24 },
    ]
  };

  componentDidMount() {
    const storedItems = JSON.parse(localStorage.getItem('todos'));
    if (storedItems.length>0) {
      this.setState({ items: storedItems});
    }
    else{
      this.setState({ items: this.initialState.items});
    }
  }
  
  componentDidUpdate() {
    const { items } = this.state;
    console.log(items)
    localStorage.setItem('todos', JSON.stringify(items));
  
  }
  
  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}
export default App;