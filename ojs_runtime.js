import { Interpreter } from 'https://cdn.skypack.dev/@alex.garcia/unofficial-observablehq-compiler';
import { Inspector, Runtime } from 'https://cdn.skypack.dev/@observablehq/runtime';
      
export function createRuntime()
{
  const runtime = new Runtime();
  const mainMod = runtime.module();
  let targetElement = document.body;

  // the "standard" observer is
  // 
  // const observer = Inspector.into(document.body);
  // 
  // but the result of Inspector.into always appends into a fixed container
  // our only new trick is we can vary the targetElement container
  // from the outside via `setTargetElement`
  function ourObserver() {
    return new Inspector(targetElement.appendChild(document.createElement("div")));
  }
  
  const interpreter = new Interpreter({ module: mainMod, observer: ourObserver });
  
  let result = {
    setTargetElement(el) {
      targetElement = el;
    },
    async interpret(src) {
      let result = await interpreter.module(src);
      return result;
    }
  };
  
  return result;
}
