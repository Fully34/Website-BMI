$(document).ready(function(){
  var h = $("#height").val();
  var w = $("#weight").val();
    $("#results").click(function(){
      var sum = h + w;
      alert(sum);
    });
});
