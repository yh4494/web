//制作人yh4494    www.cutewindow.com
var cDan = Array();				//存放下拉菜单数数据
var cLian = Array();			//存放下拉菜单所对应得数组

//从nav_m中加载数组
function loadArr(){
	var oDivLoad = document.getElementById("nav_m");
	var oUl2 = oDivLoad.getElementsByTagName("ul")[0];
	var oUl3 = oDivLoad.getElementsByTagName("ul")[1];
	var aLi4 = oUl2.getElementsByTagName("li");
	var aLi5 = oUl3.getElementsByTagName("li");
	
	//初始化数组
	for(var a = 0;a < 7; a++ ){ cDan[a] = new Array(); cLian = new Array(); }
	for(var j = 0;j < aLi4.length ;j++){
		cDan[j] = aLi4[j].innerHTML.split(","); 
		cLian[j] = aLi5[j].innerHTML.split(",");
	}
}
window.onload = function(){
	//----------------加载DOM----------------
	var aUl1 = document.getElementById("uL1");
	var oDiv = document.getElementById("nav_1_js");
	var aLi1 = aUl1.getElementsByTagName("li");
	var aLi2 = oDiv.getElementsByTagName("a");
	var t;
	loadArr();
	
	for(var i = 0;i < aLi1.length;i ++){
		aLi1[i].index = i;
		aLi1[i].onmouseover =  function(){
			oDiv.style.display =  "block";
			oDiv.style.marginLeft = "" + (this.index + 1)*100 + "px";
			if(aLi2.length > 0) 	del();
			clearTimeout(t);
			for(var j = 0;j < cDan[this.index].length;j++){
				if(j >= aLi2.length){
					//创建节点
					var aLi3 = document.createElement("li");
					var aA1 = document.createElement("a");
					//添加到父类节点中去
					oDiv.appendChild(aLi3);
					aLi3.appendChild(aA1);
					aA1.href = cLian[this.index][j];
					aA1.innerHTML = cDan[this.index][j];
					continue;
				}
				aLi2[j].innerHTML = cDan[this.index][j];
				aLi2[j].href = cLian[this.index][j];
			}
		}
		oDiv.onmouseout = aLi1[i].onmouseout = function(){
			t = setTimeout(function Time(){ del(); oDiv.style.display = "none"; },100);
		}
	}
	oDiv.onmouseover =  function(){ clearTimeout(t); }
	//删除所有的节点
	function del(){
	for(var q = 0;q < aLi2.length;q++){
		oDiv.removeChild(aLi2[q].parentNode);
	}
}
}