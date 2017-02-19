function checkPword(){
	var pword = document.forms['pwordForm']['newPword'].value;
	var patt = /^[a-z0-9!!@#$%\^&*_\-<=>?]{6,}$/i;
	if(! patt.test(pword)){
		alert("密码只能为数字、字母或特殊符号的组合，并且至少6位！");
		return false;
	}
	return true;
}

function importPrompt(){
	return confirm("导入须知：本程序只接受“.csv”格式的表格文件，" +
					"普通的excel文件须先进行转换，以免产生解码错误。" +
					"另外，文件的第一行将被视作新建表的表头，所以请确保" + 
					"该行中各列不含特殊符号（如各种标点符号和括号等），并且不应当有重复列！");
}

function tryEncrypt(){
	var form = document.forms['addRowForm'];
	for(var i=0; i<form.length; i++){
		if(form[i].name == "password"){
			originalValue = form[i].value;
			if(originalValue)
				form[i].value = hex_md5(originalValue);
		}
	}
}