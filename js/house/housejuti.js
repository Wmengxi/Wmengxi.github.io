(function() {
  angular.module('myApp').controller('housejutiCtrl', housejutiCtrl);

  function housejutiCtrl($scope) {
    $(document).ready(function() {
      // 获取模态窗口
      var modal1 = document.getElementById('myModal1');
      var modal2 = document.getElementById('myModal2');
      var modal3 = document.getElementById('myModal3');

      // 获取图片模态框，alt 属性作为图片弹出中文本描述
      var img1 = document.getElementById('myImg1');
      var img2 = document.getElementById('myImg2');
      var img3 = document.getElementById('myImg3');
      var modalImg1 = document.getElementById("img01");
      var modalImg2 = document.getElementById("img02");
      var modalImg3 = document.getElementById("img03");
      var captionText1 = document.getElementById("caption1");
      var captionText2 = document.getElementById("caption2");
      var captionText3 = document.getElementById("caption3");
      img1.onclick = function() {
        modal1.style.display = "block";
        modalImg1.src = this.src;
        modalImg1.alt = this.alt;
        captionText1.innerHTML = this.alt;
      }
      img2.onclick = function() {
        modal2.style.display = "block";
        modalImg2.src = this.src;
        modalImg2.alt = this.alt;
        captionText2.innerHTML = this.alt;
      }
      img3.onclick = function() {
        modal3.style.display = "block";
        modalImg3.src = this.src;
        modalImg3.alt = this.alt;
        captionText3.innerHTML = this.alt;
      }

      // 获取 <span> 元素，设置关闭模态框按钮
      var span1 = document.getElementsByClassName("close")[0];
      var span2 = document.getElementsByClassName("close")[1];
      var span3 = document.getElementsByClassName("close")[2];

      //点击 <span> 元素上的 (x), 关闭模态框
      span1.onclick = function() {
        modal1.style.display = "none";
      }
      span2.onclick = function() {
        modal2.style.display = "none";
      }
      span3.onclick = function() {
        modal3.style.display = "none";
      }

      //选择日期
      $("#live_start").datetimepicker({
        format: 'hh:ii',
        startView: 2,
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        　　language: 'zh-CN', //汉化 
        　　autoclose: true //选择日期后自动关闭
      });
      $("#live_end").datetimepicker({
        format: 'hh:ii',
        startView: 2,
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        　　language: 'zh-CN', //汉化 
        　　autoclose: true //选择日期后自动关闭
      });

      //获取更多内容
      var click = document.getElementById('s_share3');
      var show = document.getElementById('more');
      click.onmouseover = function() {
        show.style.display = "block";
      };
      click.onmouseout = function() {
        show.style.display = "none";
      };
      show.onmouseover = function() {
        show.style.display = "block";
      };
      show.onmouseout = function() {
        show.style.display = "none";
      };

      //地图
      //地图初始化
      var map1 = new BMap.Map("map1");
      var point1 = new BMap.Point(116.425368, 39.937923);
      map1.centerAndZoom(point1, 15);

      //地图配置与操作
      window.setTimeout(function() {
        map1.panTo(new BMap.Point(116.425368, 39.937923));
      }, 2000);

      //地图控件
      map1.addControl(new BMap.NavigationControl());
      map1.addControl(new BMap.ScaleControl());
      map1.addControl(new BMap.OverviewMapControl());
      map1.addControl(new BMap.MapTypeControl());
      map1.setCurrentCity("北京");
      map1.enableScrollWheelZoom();

      //创建标注
      var marker1 = new BMap.Marker(point1); // 创建标注    
      map1.addOverlay(marker1);
      marker1.addEventListener("click", function() {
        var opts = {
          title: "速8酒店"
        }
        var infoWindow = new BMap.InfoWindow("<b>欢迎您的到来！</b>", opts);
        map1.openInfoWindow(infoWindow, new BMap.Point(116.425368, 39.937923));
      });


      //搜索
      map1.centerAndZoom(new BMap.Point(116.425368, 39.937923), 15);
      var local1 = new BMap.LocalSearch(map1, {
        renderOptions: {
          map: map1
        }
      });
      local1.search("景点");
    });
  }
})();

  
