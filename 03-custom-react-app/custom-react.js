customRendering = (createReactElement, container) => {
    /*
        const domElement = document.createElement(createReactElement.type)
        domElement.innerHTML = createReactElement.children
        
        // problem when user have multiple attributes 
        domElement.setAttribute('href', createReactElement.props.href)
        domElement.setAttribute('target', createReactElement.props.target)

        container.appendChild(domElement)
    */

    const domElement = document.createElement(createReactElement.type)
    domElement.innerHTML = createReactElement.children
    for (const prop in createReactElement.props) {
        console.log(prop);
        domElement.setAttribute(prop, prop)
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click here to visit google'
}

const mainContainer = document.querySelector('#root')

customRendering(reactElement, mainContainer)