import React,{Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent.js';
import { DISHES } from '../shared/dishes';
class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    
  render() {
    return (
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <div container="row">
            <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
