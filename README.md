## Instalación y desarrollo

Es necesario tener instalado _Node_ y _npm_ en tu máquina. Si no lo tienes instalado, puedes descargarlo aqui: [https://nodejs.org/en/](https://nodejs.org/en/).
Se ha usado la version `v16.11.0` de _Node_ y la versión `7.16.0` de _npm_. Para evitar problemas de compatibilidad, puedes usar el paquete _n_ de _npm_ para instalar esa versión.

```shell
npm install -g n
n 16.11.0
node -v
# v16.11.0
npm install -g npm@7.16.0
npm -v
# 7.16.0
```

Además, se ha usado _yarn_ `1.17.3` en lugar de _npm_ como gestor de paquetes. Aunque no hay ningún problema en usar _npm_. Para instalar _yarn_:

```shell
npm install -g yarn@1.17.3
yarn -v
# 1.17.3
```

Ya puedes clonar el repositorio:

```shell
git clone git@
```

Una vez clonado, ve al directorio donde se haya descargado e instala las dependencias:

```shell
yarn install
# o npm install
# Esto tarda bastante, puedes ir a por un café mientras...
```

Para correr la aplicación en modo desarrollo:
```shell
yarn start
```


## Estructura del proyecto

```
lights-camera-action
├── node_modules
├── .env
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    ├── setupTests.js
    ├── api
    │   ├── adapters
    │   ├── fixtures
    │   ├── instances
    │   ├── models
    │   └── services
    ├── components
    ├── constants
    ├── hooks
    ├── store
    ├── types
    └── utils
```

## Dependencias externas

A la hora de formatear el código, utilizo _prettier_ junto con un archivo de configuración personalizado (_.prettierrc_). Además, he configurado el proyecto para que ejecute automáticamente el formateo de _prettier_ justo antes de hacer un commit con las librerías _husky_ y _pretty-quick_.

Para las rutas, he usado _react-router-dom_.
Para las llamadas a la API he utilizado _axios_. También he utilizado la librería _qs_ para el parseo de parametros en las llamadas.

En el testing utilizo *React Testing Library* con sus dependencias _@testing-library/react_, _@testing-library/user-event_, _@testing-library/dom_.

He usado *SASS* como preprocesador de CSS, para ello se necesita de las dependencias _node-sass_ y _sass-loader_
 
Para el manejo del estado de la aplicación he usado *Redux* con sus dependencias _react-redux_ para una aplicación en *React* y _redux-thunk_ para el manejo de lógica asíncrona.

## Decisiones de diseño