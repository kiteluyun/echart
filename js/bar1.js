// 初始化echarts实例

var barecharts1=echarts.init(document.getElementById('bar1'));
var option1={
	xAxis:{
		data:['c','c++0','PHP','java','pyhton','.net'],
		// 标签文字样式
		axisLabel:{
			color:'rgba(255,255,255,.6)',
			fontSize:'12px'
		},
		// x轴的样式
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.1)',
				with:10,
				type:'solid'
			},
			show:false
		}
		
	},
	yAxis:{
		axisLine:{
			lineStyle:{
				color:'rgba(255,255,255,.6)',
				}
		},
		splitLine:{
			lineStyle:{
				color:'rgba(255,255,255,.1)'
			}
		}
	},
	series:[{
		name:'就业数据',
		type:'bar',
		data:[100,200,300,500,800,1300,600],
		barWidth:'35%',
		itemStyle:{
			barBorderRadius:5
		}
	}],
	color:['#2f89cf'],
	grid:{
		left:'0px',
		top:'10px',
		bottom:'4%',
		right:'4%',
		containLabel:true
	}
}
barecharts1.setOption(option1);