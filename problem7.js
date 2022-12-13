window.onload = function(){
   var result = '\n';
   for (var i = 1; i <= 12; i++) {
      console.log(i)
      document.write(i+" : ")
      
  // document.getElementById("num").innerHTML=i +":";
         //document.write(i+" : ")
       for (var j = 1; j <=12; j++) {
      var num=i;
      document.write((i*j) + ' ')

         //   result += (i*j) + ' ';
         //   result += ;
  // document.getElementById("num").innerHTML=num+": "+result;

       }
       document.write("</br>");
      

   }
   
         
};