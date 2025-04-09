import { formatGreeting } from '@pnpm-monorepo-semantic/pkg-a';
import { multiply, capitalize } from '@pnpm-monorepo-semantic/pkg-b';

const product = multiply(4, 7);
const user = capitalize('john');
const message = formatGreeting(user);

console.log(`Multiplication result: ${product}`);
console.log(message);
