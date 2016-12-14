$(document).ready(function(){
  var h = $("#height").val();
  var w = $("#weight").val();
    $("#results").click(function(){
      var bmi = w/(h)2;
    });
});
