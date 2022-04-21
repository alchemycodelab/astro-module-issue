/* this code is designed to work under both CJS and ES6, 
it works when running `npm start`, but 
it fails when running `npm run build` with 
"Named export 'Builder' not found" error 
*/
import pkg, { Builder as B, BuilderComponent as BC } from '@builder.io/react';

const Builder = pkg.Builder || B;
const BuilderComponent = pkg.BuilderComponent || BC;

/* comment out above code and uncomment code below for "recommended" CJS import, 
this now fails under [vite] SSR error with "ReferenceError: Builder is not defined"
*/

// import pkg from '@builder.io/react';
// const { builder, Builder: Builder$1, BuilderComponent: BuilderComponent$1 } = pkg;

/* rest of module */
import registerComponents from './register-components';

registerComponents(Builder);
	
export default function CMS({ page }) {
  return <BuilderComponent model="page" content={page} />;
}  
