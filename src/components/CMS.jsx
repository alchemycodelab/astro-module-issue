import { builder, Builder, BuilderComponent } from '@builder.io/react';
import registerComponents from './register-components';
builder.init('b9c103cda0f24735921c917287d4fc23');
registerComponents(Builder);
	
export default function CMS({ page }) {
  return <BuilderComponent model="page" content={page} />;
}  
