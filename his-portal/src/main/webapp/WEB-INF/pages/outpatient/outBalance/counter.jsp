<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/metas.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<style type="text/css">
	 input{
        width:60px;
    }
    #inp1{
        width:500px;
        text-align:right;
    }
	</style>
</head>
<body>
	<table border="1" align="center">
        <!--显示结果行-->
        <tr><td colspan="4"><input id="inp1" style="width:263px;height: 26px" type="text" value="" name="xianshi"/></td></tr>

        <!--第一行-->
        <tr><td><input type="button" value="平方" style="width:63px;height: 23px" onclick="inputPCB(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="清空" onclick="inputPCB(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="Back"onclick="inputPCB(this)"/></td><td></td></tr>
        <!--第二行-->
        <tr><td><input type="button" style="width:63px;height: 23px" value="1" onclick="inputEvent(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="2" onclick="inputEvent(this)"/></td><td><input type="button"value="3" style="width:63px;height: 23px" onclick="inputEvent(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="4" onclick="inputEvent(this)"/></td></tr>
        <!--第三行-->
        <tr><td><input type="button" style="width:63px;height: 23px" value="5" onclick="inputEvent(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="6" onclick="inputEvent(this)"/></td><td><input type="button"value="7" style="width:63px;height: 23px" onclick="inputEvent(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="8" onclick="inputEvent(this)"/></td></tr>   
        <!--第四行-->
        <tr><td><input type="button" style="width:63px;height: 23px" value="9" onclick="inputEvent(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="0" onclick="inputEvent(this)"/></td><td><input type="button"value="." style="width:63px;height: 23px" onclick="inputEvent(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="=" onclick="inputEquel(this)"/></td></tr>
        <!--第五行-->
        <tr><td><input type="button" value="+" style="width:63px;height: 23px" onclick="inputOper(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="-" onclick="inputOper(this)"/></td><td><input type="button"value="*" style="width:63px;height: 23px" onclick="inputOper(this)"/></td><td><input type="button" style="width:63px;height: 23px" value="/" onclick="inputOper(this)"/></td></tr>   

    </table>
<script type="text/javascript">
  /* 定义一个Calculator类*/
    function Calculator(){

        this.jisuan=function(num1,num2,oper){
            var res=0;
            switch(oper){
                case "+":
                    res=num1+num2;
                    break;
                case "-":
                    res=num1-num2;
                    break;
                case "*":
                    res=num1*num2;
                    break;
                case "/":
                    res=num1/num2;
                    break;
            }
            return res;
        }
    }
    //创建对象
    var calculator=new Calculator();

    /*定义全局变量*/
    var val=0; //放置输入的值
    var xval=0;//保存转换Number类型的值
    var temp=0; //保存第一次输入的值   
    var oper="";//保存输入的操作符

    /*获取输入数字*/
    function inputEvent(e){

        val=e.value
        var xsval=document.getElementById("inp1");       
        xsval.value+=val; //连续输入数字(String类型)
        //转换Number类型
        xval=parseFloat(xsval.value);

    }

    /*获取第一行的数据*/
    function inputPCB(e){
        //window.alert(e.value);
        var xsval=document.getElementById("inp1");
        if(e.value=="清空"){
            xsval.value="";
        }else if(e.value=="Back"){
            /*这个功能还没有实现，有兴趣的朋友可以自己做一做*/

        }else if(e.value=="平方"){
            //计算平方
            xsval.value=Math.pow(xsval.value,2);           
        }
    }

    /*输入操作符*/
    function inputOper(e){

        oper=e.value;
        //window.alert(typeof oper);
        //oper=oper.substr(0);
        if (e.value=="+"){
            var xsval=document.getElementById("inp1");
            //保存上次计算结果，并对字符串进行转换Number类型
            temp=parseFloat(xsval.value);
            //第一次输入的值设置为空
            xsval.value="";                       
        }else if(e.value=="-"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";
        }else if(e.value=="*"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";
        }else if(e.value=="/"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";
        }
    }

    /*计算结果*/
    function inputEquel(e){

        var xsval=document.getElementById("inp1");       
        if(e.value=="="){
            //window.alert(xval);
            //调用对象方法
            xsval.value=calculator.jisuan(temp,xval,oper);
        }
    }
</script>
</body>
</html>