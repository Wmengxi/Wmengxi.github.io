(function() {
  angular.module('myApp').controller('homeCtrl', homeCtrl);

  function homeCtrl($scope) {
    $("#homeCarousel").carousel('cycle');

    $('#datetimepicker').datetimepicker({
      format: 'hh:ii',
      startView: 2,
      minView: "month", //选择日期后，不会再跳转去选择时分秒 
      　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
      　　language: 'zh-CN', //汉化 
      　　autoclose: true //选择日期后自动关闭
    });
    $('#datetimepicker2').datetimepicker({
      format: 'hh:ii',
      startView: 2,
      minView: "month", //选择日期后，不会再跳转去选择时分秒 
      　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
      　　language: 'zh-CN', //汉化 
      　　autoclose: true //选择日期后自动关闭
    });
    $('[id^=carousel-selector-]').click(function() {
      var id_selector = $(this).attr("id");
      var id = id_selector.substr(id_selector.length - 1);
      id = parseInt(id);
      $('#countryCarousel').carousel(id);
    });
  }
})();