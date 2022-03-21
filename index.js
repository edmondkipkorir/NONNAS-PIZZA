$('#hide').hide();

        $('#show,#hide').on('click',function(){

        	$('#show,#hide').toggle()
        });
        $('#hide1').hide();

        $('#show1,#hide1').on('click',function(){

        	$('#show1,#hide1').toggle()
        });
        $('#hide2').hide();

        $('#show2,#hide2').on('click',function(){

        	$('#show2,#hide2').toggle()
        });
   
        $(".overlay").hover(function (){
                $(".overlay-text").show();
            }, function(){
                $(".overlay-text").hide();        
            
            });

            $("table").show();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide();
  
//   $('.btn.order').click(function() {
//     var sizeOfPizza = $(".size option:selected").val();
//     var toppingsOfPizza = $(".toppings option:selected").val();
//     var crustOfPizza = $(".crust option:selected").val();
//     var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
//     var order = 1;
//     var grandTotal = 0;

//     $("table").show();
//     $(".additional-buttons").show();
//     $(".btn.order").hide();

//     $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
//     $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
//     $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
//     $("#total").html(total);

//     function Pizza(size, toppings, crust, total, orderNo) {
//         this.size = size;
//         this.toppings = toppings;
//         this.crust = crust;
//         this.total = total;
//         this.orderNo = orderNo;
  

  