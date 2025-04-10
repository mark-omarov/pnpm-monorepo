import { add, formatGreeting } from '@pnpm-monorepo-semantic/pkg-a';
import { capitalize } from '@pnpm-monorepo-semantic/pkg-b';

const result = add(5, 3);
const name = capitalize('mark');
const greeting = formatGreeting(name);

console.log(`Calculation result: ${result}`);
console.log(greeting);
console.log('New feature')
