import { createRuntime } from './ojs_runtime.js';

let runtime = createRuntime();
runtime.setTargetElement(document.getElementById("div1"));
runtime.interpret(`
import {text} from '@jashkenas/inputs'

viewof name = text({
  title: "what's your name?",
  value: ''
})
`);

runtime.setTargetElement(document.getElementById("div2"));
runtime.interpret(`
md\`Hello **\${name}**, it's nice to meet you!\`
`);
