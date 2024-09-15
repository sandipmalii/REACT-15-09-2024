function customRender(element, container) {
  /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

        const domElement = document.createElement(element.type);
        domElement.innerHTML = element.children;
      
        for (const prop in element.props) {
          if (prop === 'children') continue;
          domElement.setAttribute(prop, element.props[prop]);
        }
      
        container.appendChild(domElement);
      }
      
      const reactElement = {
        type: 'a',
        props: {
          href: 'https://reactjs.org/',
          target: '_blank',
        },
        children: 'Click on me to go to reactjs ',
      };
      
      const mainContainer = document.querySelector('#root');
      
      customRender(reactElement, mainContainer);
      