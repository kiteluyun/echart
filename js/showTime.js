var t=null;
t=setTimeout(getTime,1000)
function getTime(){
	clearTimeout(t)
	var dt=new Date();
	var year=dt.getFullYear();
	var month=dt.getMonth()+1;
	var day=dt.getDate();
	var hour=dt.getHours();
	var minute=dt.getMinutes();
	var second=dt.getSeconds();
	
	document.getElementById('showTime').innerHTML=
	"当前时间："+year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";
	t=setTimeout(getTime,1000)
}