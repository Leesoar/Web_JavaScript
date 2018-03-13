<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Hello World!</title>
<script>
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
</head>
<body>

<h1>Hello World！</h1>
<p id="demo">点击下面按钮</p>

<button type="button" onclick="displayDate()">显示日期</button>

</body>
</html>