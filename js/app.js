$(document).ready(function(){
  


        var parent=$("#parent");

        var image=["./img/cars/1.jpg","./img/cars/2.jpg","./img/cars/3.jpg","./img/cars/4.jpg","./img/cars/5.jpg","./img/cars/6.jpg"];
   
        var img1= $("#img1");
        var img2= $("#img2");
        var img3= $("#img3");
        var img4= $("#img4");
        var img5= $("#img5");
        var img6= $("#img6");
        var id=[img1,img2,img3,img4,img5,img6];

    img1.attr("src",image[0]);
    img2.attr("src",image[1]);
    img3.attr("src",image[2]);
    img4.attr("src",image[3]);
    img5.attr("src",image[4]);
    img6.attr("src",image[5]);

    //parent widht 870;
    //parent left 552;
   
    //child widht 400;


    //parent x,y
    var p_xy=parent.offset().left;
    
   // console.log(parent.offset().left);
    //console.log("parent left")
    //console.log(parent.offset().left);
   
    
    
   
    
   var counter=1;

   
   var i=0;
    var margin=[];
   if(i==0){
   margin[0]=id[0].offset().left;
    console.log(margin[0]);
  }   
    
   setInterval(function(){
    if(i==0){
      console.log(id[0].offset().left);
      console.log(id[1].offset().left);
      console.log(id[2].offset().left);
      console.log(id[3].offset().left);
      console.log(id[4].offset().left);
      console.log(id[5].offset().left);
      //console.log(id[6].offset().left);
    }   
     
   hide_obj(id[0],parent);
   hide_obj(id[1],parent);
   hide_obj(id[2],parent);
   hide_obj(id[3],parent);
   hide_obj(id[4],parent);
     hide_obj(id[5],parent);
    
     
      
   
     if( Math.floor(id[i].offset().left)>Math.floor(parent.offset().left)){
       
      id[i].css("margin-left",(-1)*(400*counter));
      counter++;
    }
     i++;
      
     if(counter==5){
        
        id[0].css("left",margin[0]);
        id[1].css("margin-left",margin[1]);
        id[2].css("margin-left",'');
        id[3].css("margin-left",'');
        id[4].css("margin-left",'');
        id[5].css("margin-left",'');
      counter=0;
      i=0;
      }

    },3000);



    function hide_obj(obj,parent){
    //   var total=Math.floor(parent.offset().left)+Math.floor(parent.width());

    
    // var total1=Math.floor(img2.offset().left)+Math.floor(img2.width());
    // console.log(total1);

       
      if( Math.floor(obj.offset().left)+Math.floor(obj.width()) > Math.floor(parent.offset().left)+Math.floor(parent.width()) ){
          obj.hide();
          //obj.css("opacity","0");
        }else if(Math.floor(obj.offset().left)<Math.floor(parent.offset().left) &&Math.floor(obj.offset().left)!=0){
          //console.log("ia mff r")
          //obj.css("opacity","0");
          obj.hide();
        }
        
        
        else{
          obj.show();
        } 

    }
})




/*


      id[0].css("transition","all 2s ease-in");
      id[1].css("transition","all 2s ease-in");
      id[2].css("transition","all 2s ease-in");
      
      if(counter+3<=image.length){
          id[0].css("opacity","0");         
         
          id[0].attr("src",image[counter+1]);
          id[0].css("opacity","1");
          
          id[1].css("opacity","0");
          id[1].attr("src",image[counter+2]);
          id[1].css("opacity","10");
          
          id[2].attr("src",image[counter+3]);
          id[2].css("opacity","10");
        }else{
            
            counter=0;
        }
             counter++; 
              //id[counter].attr("src",image[counter+1]);
            //  id[counter+1].attr("src",image[counter+2]);
          //    id[counter+1].attr("src",image[counter+3]);
        //counter++;
        //console.log("value of counter"+counter);

*/