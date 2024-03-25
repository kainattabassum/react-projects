In React, both props and state are used to store data that can be used to customize the appearance and behavior of a component. However, they serve different purposes and have different properties.

## Props
 - are short for "properties". They are read-only values that are passed from a parent component to a child component. Props can be used to customize the appearance and behavior of a child component, but they cannot be modified directly. Instead, a child component must pass the props to a new child component or use them to update the state of the component.

 ```javascript
 function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Example usage:
<Greeting name="Alice" />
 ```

 ## state
-  is a mutable object that is managed by a component. It is used to store values that can change over time, such as a counter or a user input. The state of a component can be modified using the setState method, which triggers a re-render of the component.

- class component
```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}
```
