## react-router-dom

- React Router is a popular library for handling routing in React applications. It provides a declarative way to define dynamic routing in React, allowing you to navigate between different components based on the URL.
- react-router-dom is a package that provides DOM bindings for React Router. It builds on top of the core React Router library (react-router) by providing additional components specifically designed for web applications.

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
]);
```

### OR

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<GithubUser />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);
```

### THEN

```javascript
<RouterProvider router={router} />
```
