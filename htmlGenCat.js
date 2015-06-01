<script>

/*

// HtmlGen

// function i'dont know :c

// author : 16bit

// date    : 01/06/2015

// time     : 03:04:18

// obs       : beta.

*/
function     _title(params){
        document.write("<title>" + params[0] + "</title>");
}
function     _menu(params){
    for (i=0;i<params.length;i++){
        document.write(params[i].replace(","," "));
    }
}
function     _top(params){
var imageTop = "<img src='x' width='ypx' height='zpx' />".replace("x",params[0])
                                                         .replace("y",params[1])
                                                         .replace("z",params[2]);
        document.write(imageTop);
}
function     _post(params){
    for (i=0;i<params.length;i++){
        //<textarea style="width: 1323px; height: 307px;"> HELLO !!! ;v  </textarea>
        var textArea = "<textarea style='width: 1323px; height: 307px;''> TEXT  </textarea>".replace("TEXT",params[i]);
        document.write(textArea);
    }
}

var  topimg = [
                "cat.jpg",
                "1320",
                "300" ];
var  name   = [
                "<center> ",
                "teste    ",
                "teste   ",
                "</center>"];
var  post   = [

                "HELLO !!! ;v "
                ];
var  title  = [
                 "Cat site ;)"
                ];

_top(topimg);
_menu(name);
_post(post);
_title(title);

</script>
