# Astro Import Issue on Build

This repo reproduces an issue with third-party ecosystem modules that present as CJS modules under npm,
but typically have rollup build `"module": "dist/builder-react.es5.js",` pseudo-ES6 module presentation that
works under vite, webpack, nextJS, etc.

This project will work when run with `npm start`.

However, when trying to build with `npm run build`, it throws an error based on the import in
file [`/src/components/CMS.jsx`](`/src/components/CMS.jsx`):

```
 error   Named export 'Builder' not found. The requested module '@builder.io/react' is a CommonJS module, which may not support all module.exports as named exports.
  CommonJS modules can always be imported via the default export, for example using:
  
  import pkg from '@builder.io/react';
  const { Builder, BuilderComponent, builder } = pkg;
```

If this recommendation is implemented, the code now fails under vite SSR because the imports are `undefined`.

The intermediate issue (the first error) was added recently to astro and IMO this error needs to be disabled or be
configurable.