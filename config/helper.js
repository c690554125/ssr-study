import { fileURLToPath } from 'url';
import path from 'path';

export const resolvePath = (src) => path.resolve(path.dirname(fileURLToPath(import.meta.url)), src);
