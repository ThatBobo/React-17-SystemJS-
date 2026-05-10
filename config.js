SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    ".": {
      main: './src/App.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.development.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js',
    'react-router-dom': 'https://unpkg.com/react-router-dom@5.3.0/umd/react-router-dom.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/App.js')
  .catch(console.error.bind(console));