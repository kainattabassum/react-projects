## useState()
- This hook allows functional components to manage state. It returns a stateful value and a function to update that value, similar to this.setState() in class components.

## useEffect(setup, dependencies?)
- The useEffect Hook allows you to perform side effects in your components.
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- It replaces lifecycle methods like 
  1. componentDidMount
  2. componentDidUpdate
  3. componentWillUnmount 
in class components.

## useCallback(fn, dependencies) 
- Call useCallback at the top level of your component to cache a function definition between re-renders:

- useCallback and useMemo: These hooks are used for performance optimization. useCallback memoizes a callback function, while useMemo memoizes the result of a computation.

```javascript 
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

## useRef
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.

```javascript
const ref = useRef(initialValue)
```