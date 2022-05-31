/* residentialsection */

let index = 0;

$("#building-type").change(function(){

if($(this).val() == "residential"){
 index = 1;
    $('#residentialoption').show();
    Calculate(index);
    
 
}

else{
    $('#residentialoption').hide();
  
}
});
$("#building-type").trigger("change");

/* corporatesection */

$("#building-type").change(function(){

    if($(this).val() == "corporate"){
    index =2;
        $('#corporateoption').show();
        Calculate(index);
        
    }
    
    else{
        $('#corporateoption').hide();
      
    }
    });
    $("#building-type").trigger("change");

  /* commercialsection */    
    
$("#building-type").change(function(){

    if($(this).val() == "commercial"){
    index = 3;
        $('#commercialoption').show();
        Calculate(index);
       
    }
        
    else{
        $('#commercialoption').hide();
          
    }
});
    $("#building-type").trigger("change");

    /* hybridesection */    

$("#building-type").change(function(){

        if($(this).val() == "hybride"){
    index = 4;
        $('#hybrideoption').show();
        Calculate(index)

        }
            
        else{
        $('#hybrideoption').hide();
              
        }
});
    $("#building-type").trigger("change");



function Calculate(index){


if(index == 1){

CalculateResidential();

}


}   











function CalculateResidential(){

    var averageAppartments = 0;

    var nbAppartments = 0;

    var nbFloors = 0;

    var nbBasements = 0;

    var nbElevator = 0;

    var nbColumn = 0;

    var counter1 = 0;

    var counter2 = 0;

    $("#number-of-apartments,#number-of-floors").change(function(){

        nbAppartments = parseInt($("#number-of-apartments,#number-of-floors").val());
    
        nbFloors =  parseInt($("#number-of-floors").val());
        
        averageAppartments = nbAppartments / nbFloors;



if(averageAppartments != 0){

    Math.round(averageAppartments);

}


       



        for(var i = 0; i < averageAppartments; i++){
        
        counter1++;
        
        if(counter1 == 6){
        
        nbElevator = nbElevator + 1;
        
        counter1 = 0;
        
        }

        /* for( var i = 0; i < nbFloors; i++){

            counter2++;

            if(counter2 == 20){

            nbElevator = nbElevator * 2;

            nbColumn = nbColumn + 1;

            }
            else{

                break;

            }

        } */
       
        
        }


        console.log("test", nbElevator)
        
        });

      
            
        $("#number-of-basements").change(function(){

            nbBasements = parseInt($("#number-of-basements").val());
                
            });







}










