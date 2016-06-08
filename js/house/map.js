(function() {
	angular.module('myApp').controller('mapCtrl', mapCtrl);

	function mapCtrl($scope) {

		//地图初始化
		var map = new BMap.Map("map");
		var point = new BMap.Point(116.404, 39.915);
		map.centerAndZoom(point, 15);

		//地图配置与操作
		window.setTimeout(function() {
			map.panTo(new BMap.Point(116.404, 39.915));
		}, 2000);

		//地图控件
		map.addControl(new BMap.NavigationControl());
		map.addControl(new BMap.ScaleControl());
		map.addControl(new BMap.OverviewMapControl());
		map.addControl(new BMap.MapTypeControl());
		map.setCurrentCity("北京");
		map.enableScrollWheelZoom();

		//创建标注
		var marker = new BMap.Marker(point); // 创建标注    
		map.addOverlay(marker);

		//搜索
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
		var local = new BMap.LocalSearch(map, {
			renderOptions: {
				map: map
			}
		});
		local.search("旅馆");
	}
})();