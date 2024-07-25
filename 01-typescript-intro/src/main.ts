import './style.css'
import './topics/03.functions.ts'
//import './topics/01-basic-types.ts';
//import './topics/02-object-interface.ts;
import './topics/03.functions.ts';

import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo 💚
`
console.log('hola mundo')
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
