import { App } from 'illutions';
import { cfg } from './cfg';
import { classes } from './classes';

document.addEventListener('DOMContentLoaded', () => {
  App.run(cfg, classes);
}); 