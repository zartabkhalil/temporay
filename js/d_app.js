$(document).ready(function(){
    var btn=$('#nav-toggle');
    var nav_bar=$('#sidenav');
   
   btn.click(function(){
       $('#sidenav').slideToggle(1000);
   });


})