let foodCount = 0;

$("#food").click(()=>{
  $("#foodSel").text($("#food h5").text());
  foodCount++;
  $("#nums").val(foodCount);
})

$("#add").click(()=>{
  foodCount++;
  $("#nums").val(foodCount);
})

$("#remove").click(()=>{
  if(foodCount>0) foodCount--;
  $("#nums").val(foodCount);
})

$("#nums").change(()=>{
  foodCount = $("#nums").val();
  if(foodCount<0){
    foodCount = 0;
    $("#nums").val("0");
  }
})