$(document).ready(function(){
    $("#calculate").click(function(){
      var h = $("#height").val();
      var w = $("#weight").val();
      var bmi = w/Math.pow(h, 2);
      alert(bmi);
    });
});
