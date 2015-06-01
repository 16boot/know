<script>

/*

// HtmlGen

// function i'dont know :c

// author : 16bit

// date    : 01/06/2015

// time     : 03:04:18

// obs       : beta.

*/

                
function     _title(params)    {
    document.write("<title>" + params[0] + "</title>");
    var icon = "<link rel='shortcut icon' href='favicon.ico' type='image/x-icon'/>".replace("favicon.ico",params[1]);
    return icon;
}
function     _menu(params)     {
    for (i=0;i<params.length;i++){
        return params[i].replace(","," ");
    }
}
function     _top(params)      {
var imageTop = "<img src='x' width='ypx' height='zpx' />".replace("x",params[0])
                                                         .replace("y",params[1])
                                                         .replace("z",params[2]);
        return  imageTop
}
function     _post(params)     {
    for (i=0;i<params.length;i++){
        //<textarea style="width: 1323px; height: 307px;"> HELLO !!! ;v  </textarea>
        var textArea = "<textarea style='width: 1323px; height: 307px;''> TEXT  </textarea>".replace("TEXT",params[i]);
        return textArea;
    }
}
function     _gen(params)      {
    
    var html =  "<html>" + 
                "<head>" + 
                "<title>" + params[0] + "</title>" +
                "</head>"+
                "<body>" +
                params[1]+
                params[2]+
                params[3]+
                "</body></html>";
    return html;
}
function     saveTextAsFile()  {
	var textToWrite = document.getElementById("inputTextToSave").value = _gen(element);
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Baixar arquivo";
	if (window.webkitURL != null)
	{
        // Para webkit
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Para o Firefox
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}
function     destroyClickedElement(event){
	document.body.removeChild(event.target);
}
function     loadFileAsText()            {
	var fileToLoad = document.getElementById("fileToLoad").files[0];
	var fileReader = new FileReader();

	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	
	fileReader.readAsText(fileToLoad, "UTF-8");
}
    
    var  topimg =  [
                "http://imguol.com/blogs/128/files/2015/02/cpsQq-4507.jpg",
                "1412",
                "311" ];
    var  name   =  [
                "<center> ",
                "teste    ",
                "teste   ",
                "</center>"
                ];
    var  post   =  [
                "HELLO !!! ;v "
              ];
    var  title  =  [
                 "Cat site ;)",
                 "http://imguol.com/blogs/128/files/2015/02/cpsQq-4507.jpg"
              ];
    var  element = [
    _title(title),
    _top(topimg), 
    _menu(name),
    _post(post)
                ];
   
</script>


<table>
	<tr><td>Texto para ser salvo:</td></tr>
	<tr>
		<td colspan="3">
			<textarea id="inputTextToSave" style="width:512px;height:256px" disabled ></textarea>
		</td>
	</tr>
	<tr>
		<td>Nome do arquivo a ser salvo:</td>
      <td><input id="inputFileNameToSaveAs" /></td>
		<td><button onclick="saveTextAsFile()">Salvar texto</button></td>
	</tr>

</table>
