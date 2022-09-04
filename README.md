### Proyecto Ventas de Automoviles
El proyecto consta del desarrollo de un marketplace de automóviles basados en los recursos de la API de mercado libre.
Como primer proyecto desarrollado en REACT se buscó introducir conceptos básicos pero valiosos para comenzar a interpretar
el lenguaje.

### GIF
En la carpeta gif se encuentra una breve precentacion del proyecto para dar una rapida demostracion de las funcionalidades

### App.js 
→ Contendrá la lógica principal de la app y en la misma se incluirá el elemento BrowserRouter

### CartWidget.js 
→ Contendrá la cantidad de productos ingresado hasta el momento

### Checkout.js 
→ sera el encargado de procesar la orden aceptando o rechzando los productos segun corresponda de la
    trabajara sinconozado con firebase para asegurar el stock de la orden

### Form.js 
→ Formulario en el cual el usuario completara la sus datos personales para que la orden sea personalizada a cada comprador

### ItemCart.js 
→ Desplegará haciendo uso del formato de una tarjeta la información de cada producto agregado al carrito de comprasion

### ItemCartContainer.js 
→ Contrendra el despliegue de la lista de compra hasta el momento ingresada en el carrito

### ItemCounter.js 
→ Sera el encargado de manejar el aumento o disminucion de la cantidad de cada producto que el usuario quiera comprar controlando
 los topes segun el limite de stock que existe hasta el momento.

### ItemDetail.js 
→ Desplegara el detalle del producto para que el usuario estudie si el producto se ajusta a sus necesidades

### ItemDetailContainer.js 
→ Contendra a todos los elementos dedicados al despliegue de la informacion del detalle del producto

### ItemDetailList.js 
→ Desplegara un listado de especificaciones tecnicas del producto

### ItemList 
→ Listara los productos según las especificaciones de ItemListContainer haciendo uso de la función map() y que recurrirá a Item para el despliegue

### ItemListCart
→ Listara los productos que hasta el momento fueron ingresados al carrito de compra

### ItemListContainer 
→ devolverá todos los productos o filtrado por categoría. Luego listara los productos en tarjetas para ello recurre ItemList

### Item 
→ Desplegará haciendo uso del formato de una tarjeta la información recibida de ItemLIst
 
### ItemDetailContainer 
→ a través del uso de las funciones de firebase y de otros elementos creados desplegará los detalles específicos del producto que el usuario lo requiera.

### Navbar
→ Permitira de formasencilla clasificar alos productos en 5 categorias, seda, hatch, suvs, pickupo furgon

### CartContex
→ Sera el encargado de manejar toda la logica necesaria para la gestion del carrito de compras

### firebase/index
→ contendran las especificaciones necesarias para la conexion a la base de datos

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
