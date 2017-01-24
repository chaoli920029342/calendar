function is_leap(year) {  //判断是否为闰年
   return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
}

m_days=new Array(31,28+is_leap(ynow),31,30,31,31,30,31,30,31,30,31);  //每个月的天数

n1str=new Date();
firstday=n1str.getDay();