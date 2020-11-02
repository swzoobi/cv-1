let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我是一名前端新人
我将通过css画一个八卦图
首先先给div加上样式 */
#div{
  border:1px solid black;
  width:200px;
  height:200px;
}
/* 然后把div变成一个圆 */
#div{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 
八卦图是由阴阳组成的
左右一黑一白  
*/
#div{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 润色亿点点 */
#div::before{
  width: 100px;
  height: 100px;
  border:1px solid red;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  border:none; 
}
#div::after{
  width: 100px;
  height: 100px;
  border:1px solid red;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#FFF;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  border:none;  
}
`;
let string2 = "";
let n = 0;
/*
  用setTimeout代替setInterval，方便控制暂停
*/
let step = () => {
  setTimeout(() => {
    //如果是回车就照搬原字符串，不是的话就加上br标签
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    //demo.innerHTML = string.substring(0, n);
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if (n < string.length - 1) {
      n++;
      step();
    }
  }, 50);
};

step();
