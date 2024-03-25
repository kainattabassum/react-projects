## useEffect(setup, dependencies?)
- The useEffect Hook allows you to perform side effects in your components.
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.

## useCallback(fn, dependencies) 
- Call useCallback at the top level of your component to cache a function definition between re-renders:

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