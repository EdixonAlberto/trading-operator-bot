import { config } from 'dotenv';
import { resolve } from 'path';

let node_env = process.env.NODE_ENV;

node_env = (node_env === undefined) ? 'production' : node_env;

const path = resolve('src', 'env', `.env.${node_env}`);
const env = config({ path });

if (env.parsed) {
  console.log(`>> Dotenv OK - env mode: ${node_env}`);
} else console.log(`>> Dotenv ERROR - ${env.error}`);
