<?php 

//获取当前登录用户的总可抽奖次数，当前已用的抽奖次数，剩余抽奖次数，返回数据形如：
 // {
		 //"total_count": 39,		/*总抽奖次数*/
		 //"used_count": 3,		/*已经使用的抽奖次数*/
		 //"left_count": 36		/*剩余抽奖次数*/
		//}
//
header("Content-Type:application/json");
$uname=$_REQUEST['uname'];
$output=[
	"total_count"=> 0,
	"used_count"=>0,
	"left_count"=> 0
];
$total_count=[];/*总抽奖次数*/
$sql="SELECT  SUM(price)  FROM jd_orders WHERE user_name='$uname'";
$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
mysqli_query($conn,'SET NAMES UTF8');
$total_result=mysqli_query($conn,$sql);
$total_row=mysqli_fetch_assoc($total_result);
$output['total_count']=floor(($total_row['SUM(price)'])/100);
var_dump($output['total_count']);
$used_count=[];/*已经使用的抽奖次数*/
$left_count=[];/*剩余抽奖次数*/

?>