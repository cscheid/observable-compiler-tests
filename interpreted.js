import { Interpreter } from 'https://cdn.skypack.dev/@alex.garcia/unofficial-observablehq-compiler';
import { Inspector, Runtime } from 'https://cdn.skypack.dev/@observablehq/runtime';
      
function createRuntime()
{
  const runtime = new Runtime();
  const mainMod = runtime.module();
  const observer = Inspector.into(document.body);
  const interpreter = new Interpreter({ module: mainMod, observer });
  
  let result = {
    async interpret(src) {
      let result = await interpreter.module(src);
      return result;
    }
  };
  
  return result;
}
