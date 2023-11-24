# Bundler for typescript
Boiler plate to bundle a typescript application 


## Initalize a project
```
npm init -y
```

## Initialize typescript project
```
tsc --init
```
.tsconfig:
```
{
    "outDir": "./dist",
    "rootDir": "./src", 
}
```

## HTML
Create a index.html and add the bundled script
```
<script src="./dist/app-bundle.js" defer></script>
```

## Configure webpack
```
npm i -D webpack webpack-cli typescript ts-loader
```

webpack.config.js:
```
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/app.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
```

## Compile
```
npx webpack
```

## Reference
https://dev.to/silvenleaf/simplest-way-to-compile-all-typescript-into-one-single-js-file-19bj
