# CONTEXT

Context provides a way to pass data through the component tree without having to pass props down manually at every level. It allows you to share values like themes, preferred language, or authentication status to all components of a React application, no matter how deep they are nested in the component tree.

React Context consists of three main parts:

1. Context Object: This is created using _React.createContext()_.
   - It returns an object with two components: _Provider_ and _Consumer_.
2. Provider: The _Provider_ component is used to wrap the parent component(s) that want to share data. It accepts a _value_ prop that will be passed down to the _Consumer_ components.
3. Consumer: The _Consumer_ component is used to consume the data provided by the _Provider_. It allows components to subscribe to the context changes and access the context data.

### ThemeContext.js

```javascript
import React from "react";

// Create a context object
const ThemeContext = React.createContext();

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
```

### App.js

```javascript
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";

function App() {
  const theme = "light";

  return (
    <ThemeProvider value={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
```

### Header.js

```javascript
import React from "react";
import { ThemeConsumer } from "./ThemeContext";

function Header() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <header style={{ background: theme === "light" ? "#eee" : "#333" }}>
          Header
        </header>
      )}
    </ThemeConsumer>
  );
}

export default Header;
```

### Content.js

```javascript
import React from "react";
import { ThemeConsumer } from "./ThemeContext";

function Content() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <div style={{ color: theme === "light" ? "#333" : "#eee" }}>
          Content
        </div>
      )}
    </ThemeConsumer>
  );
}

export default Content;
```

In this example, we have created a ThemeContext and provided a ThemeProvider in the App component. The Header and Content components consume the theme value using the ThemeConsumer component.

_Context provides a way to avoid prop drilling, especially when dealing with deeply nested components that need access to shared data. However, it's important to use it judiciously and avoid overusing it for every piece of shared data in your application, as it can make the code harder to understand and maintain._
