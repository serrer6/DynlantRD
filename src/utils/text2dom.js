function ConversionEnter(originaltext){
	let textin = originaltext;
	let outtext = "";
	if(textin.includes("\n") || textin.includes("\r") || textin.includes("\r\n")|| textin.includes("↵")){
		outtext = textin.replace(/(\n|\r|\r\n|↵)/g, '<br/>');
	}
	if(outtext.includes("\s")){
		outtext = textin.replace(/\s/g, '&nbsp;');
	}
	return outtext;
}

function text2dom(text){
	let out = "";
	let input = text;
	out = ConversionEnter(input);
	return out;
}

export default text2dom;
