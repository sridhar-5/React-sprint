import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,

    //suppose we want to dynamically render a list
    //all the elements in the list are in this array
    list: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.list.length !== 0) {
      return (
        <ul>
          {this.state.list.map((listitem) => (
            <li key={listitem}>{listitem}</li>
          ))}
        </ul>
      );
    } else {
      return <p>List should atleast have one item</p>;
    }
  }

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      //we are already defining all of this in a react container with id root
      //now if we dont want another div that is doing nothing we can add react.fragment instead then the div will not be rendered

      // <div>
      //   <h1>Hello world</h1>
      //   <button>Increment by one</button>
      // </div>

      //we can render classes dynamically as well
      // just like if the count = 0 we giver the badge in yello and if it is > 0 then badge is in blue color
      <React.Fragment>
        <h1 style={this.styles} className={this.getBadgeClass()}>
          {this.IncreaseByOne()}
        </h1>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {/* This is the second way of the conditional rendering using the logical operators */}
          {this.state.list.length === 0 && "There are no tags!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  IncreaseByOne() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

/*
There are two ways to conditionally render a react component
1. we can add a seperate render method 
2. using the logic operators
*/

/*
Binding event handlers in react 

in the handleIncrement method this is not defined 
so we have to bin this to handleIncrement method 


What happens when a button is clicked in react?

at the point of click we are indirectly calling the setState method  that method tell rect that state of that 
method is going to change and then react will schedule a call to the render method sometime in future that method is called 
so when that method is called then react will compare the both virtual dom trees and the old and the new ones and then look 
for changes of there is a change found then react will reach out to the actuall dom in the browser and change thaty single thing
so int he above code only the h1 tag is uopdated and nothing else.

*/
