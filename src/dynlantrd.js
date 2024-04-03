import Processors from "./utils/processors";
import Logger from "./utils/logger";

function RenderJSON(){
	let processors = new Processors(document.getElementById("jjj"));
  console.log('test');
	processors.insert("eee\n")
}

let dynlantrd = {};

// interfaces
dynlantrd.RenderJSON = RenderJSON;

// export dynlantrd
export default dynlantrd;
