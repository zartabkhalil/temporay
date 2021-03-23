function firstone(){
    var width=window.innerWidth;
    var height=window.innerHeight;
    var allelements=document.getElementsByTagName("section");

    console.log(allelements)
    console.log(width);
    console.log(height);

    
    
        //console.log(allelements[0].scrollHeight);
       
    
}




document.addEventListener('scroll',function(e){
    var allelements=document.getElementsByTagName("section");
   
   
   
    //var s_element=document.getElementById('div2');
        var i=0;

    while(i<allelements.length){

    
    var react=allelements[i].getBoundingClientRect();
    if(react.top>=0 && react.bottom<=window.innerHeight){
           
        allelements[i].style.opacity="1";
    }else{
        
         allelements[i].style.opacity="0";
     }
     i++;
    }
    
    
    //checkVisible(s_element.scrollHeight,window.innerHeight);


});