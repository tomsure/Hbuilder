  var a=1;
var  b=2
      export {a as m}
      export {b as n}

//第三种方式是先声明变量,再使用excport命令导出的时候,{}符号里面使用一个as关键字,使用另一个变量名代替声明的变量名,声明的变量名写在as左边,代替前面变量名的变量名写在as后面,例如上面的例子:
//    使用m 代替a大导出,则写法就是:
//      export {a as m}
// 这种方法有点像重命名
// 导出后引入的时候,直接引入代替的新变量名即可

