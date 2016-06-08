(function() {
  angular.module('myApp').controller('houseCtrl', houseCtrl);

  function houseCtrl($scope) {
    //日期选择
    $('#datetimepicker-house-from').datetimepicker({
      format: 'hh:ii',
      startView: 2,
      minView: "month", //选择日期后，不会再跳转去选择时分秒 
      　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
      　　language: 'zh-CN', //汉化 
      　　autoclose: true //选择日期后自动关闭
    });
    $('#datetimepicker-house-to').datetimepicker({
      format: 'hh:ii',
      startView: 2,
      minView: "month", //选择日期后，不会再跳转去选择时分秒 
      　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
      　　language: 'zh-CN', //汉化 
      　　autoclose: true //选择日期后自动关闭
    });
    //价格选择
    $(function() {
      $("#slider-range").slider({
        range: true,
        min: 65,
        max: 3000,
        values: [65, 3000],
        slide: function(event, ui) {
          $("#amount").val("￥" + ui.values[0] + " - ￥" + ui.values[1]);
        }
      });
      $("#amount").val("￥" + $("#slider-range").slider("values", 0) +
        " - ￥" + $("#slider-range").slider("values", 1));
    });
  }
})();