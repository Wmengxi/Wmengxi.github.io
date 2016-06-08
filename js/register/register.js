(function() {
    angular.module('myApp').controller('registerCtrl', registerCtrl);

    function registerCtrl($scope) {
        $(document).ready(function() {
            $('#datetimepicker-birthday').datetimepicker({
                format: 'hh:ii',
                startView: 2,
                minView: "month", //选择日期后，不会再跳转去选择时分秒 
                　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
                　　language: 'zh-CN', //汉化 
                　　autoclose: true //选择日期后自动关闭
            });
            $("#register-in").click(function() {
                $(".landing").hide();
                $(".login").show();
                $(".hide-bg").show();
                $("#weixin").hide();
                $("#qq").hide();
                $("#build-new").hide();
            });
            $("#login-in").click(function() {
                $(".login").hide();
                $(".landing").show();
                $("#change-email").hide();
                $("#change-phone").show();
                $("#input-email").show();
                $("#input-phone").hide();
                $(".hide-bg").show();
                $("#weixin").hide();
                $("#qq").hide();
                $("#build-new").hide();
            });
            $("#box-wechat").click(function() {
                $(".login").hide();
                $("#weixin").show();
                $(".hide-bg").show();
            });
            $("#landing-wechat").click(function() {
                $(".landing").hide();
                $("#weixin").show();
                $(".hide-bg").show();
            });
            $("#landing-wechat2").click(function() {
                $(".landing").hide();
                $("#weixin").show();
                $(".hide-bg").show();
            });
            $("#box-qq").click(function() {
                $(".login").hide();
                $("#qq").show();
                $(".hide-bg").show();
            });
            $("#landing-qq2").click(function() {
                $(".landing").hide();
                $("#qq").show();
                $(".hide-bg").show();
            });
            $("#landing-qq").click(function() {
                $(".landing").hide();
                $("#qq").show();
                $(".hide-bg").show();
            });
            $("#box-ID").click(function() {
                $(".login").hide();
                $("#build-new").show();
                $(".build-email").hide();
                $(".build-phone").show();
                $("#use-email").show();
                $("#use-phone").hide();
                $(".hide-bg").show();
            })
            $("#use-email").click(function() {
                $(".build-phone").hide();
                $(".build-email").show();
                $("#use-email").hide();
                $("#use-phone").show();
            });
            $("#use-phone").click(function() {
                $(".build-email").hide();
                $(".build-phone").show();
                $("#use-phone").hide();
                $("#use-email").show();
            });
            $(".else-way").click(function() {
                $(".landing").hide();
                $("#build-new").hide();
                $(".login").show();
            });
            $("#change-phone").click(function() {
                $("#input-email").hide();
                $("#input-phone").show();
                $("#change-phone").hide();
                $("#change-email").show();
            });
            $("#change-email").click(function() {
                $("#input-phone").hide();
                $("#input-email").show();
                $("#change-email").hide();
                $("#change-phone").show();
            });
            $(".hide-bg").click(function() {
                $(".login").hide();
                $(".landing").hide();
                $("#weixin").hide();
                $("#qq").hide();
                $("#build-new").hide();
                $(this).hide();
            });
            $(".btn-login").click(function() {
                $(".landing").hide();
                $(".login").show();
            });
            $(".btn-landing").click(function() {
                $(".login").hide();
                $("#build-new").hide();
                $(".landing").show();
            });
            $(".login-phone").click(function() {
                $(".login").hide();
                $("#build-new").hide();
                $(".landing").hide();
                $(".hide-bg").hide();
            })
        })
    }
})();