/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-29 15:52:01
 * @version $Id$
 */
 // 1弧度=180/π度
 // 1角度=π/180度
 // 弧度和角度换算
const PI=3.14;
//计算30度角所对应的弧度
var r=30*PI/180;
document.write("30度角所对应的弧度是"+r.toFixed(2)+"<br>");
//计算60度角所对应的弧度
r=60*PI/180;
document.write("60度角所对应的弧度是"+r.toFixed(2)+"<br>");
//计算30度弧所对应的角度
r=30*180/PI;
document.write("30度弧所对应的角度是"+r.toFixed(2)+"<br>");
//计算60度弧所对应的角度
r=60*180/PI;
document.write("60度弧所对应的角度是"+r.toFixed(2)+"<br>");