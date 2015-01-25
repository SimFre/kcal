
function calculateBMR() {
   var age      = parseInt($("input[name='age']").val());
   var weight   = parseInt($("input[name='weight']").val());
   var height   = parseInt($("input[name='height']").val());
   var training = $("select[name='training']").val();
   var gender   = $("input[name='gender']:checked").val();
   var bmr = 0;

   // Male                  
   if (gender == "m") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      //Män BMR = 88.362 + (13.397 x vikt i kilo) + (4.799 x höjd i cm) - (5.677 x ålder i år)
      //WRONG bmr = 10 * weight +6.25 * height -5 * age +5;
      //BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5         (man)
   }

   // Female                  
   else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      //Kvinnor BMR = 447.593 + (9.247 x vikt i kilo) + (3.098 x höjd i cm) - (4.330 x ålder i år) 
      //WRONG bmr = 10 * weight +6.25 * height -5 * age -161;
      //BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161     (woman)
   }

   switch(training) {
      case "seldom": bmr *= 1.2; break;
      case "1to3": bmr *= 1.375; break;
      case "3to5": bmr *= 1.55; break;
      case "6to7": bmr *= 1.725; break;
      case "twice": bmr *= 1.9; break;
      default: bmr *= 1; break;
   } 
   
   bmr = Math.round(bmr);     
   $("#kcal").html(bmr);
   //$("#kcal").html(gender + " " + age + " " + height + " " + weight + " " + training);
}

$(document).ready(function() {
   calculateBMR();   
   $( "input" ).bind( "change", function(event, ui) { calculateBMR(); });
   $( "select" ).bind( "change", function(event, ui) { calculateBMR(); });
});
