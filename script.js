// $(function(){
//     $(".small a").click(function(x){
//         $(".big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
//         x.preventDefault();
//     });
//     $(".button").click(function(){
//         $(".gallery").slideToggle(300);
//         if($(".button").text()=="+"){
//             $(".button").text("-");
//         } else{
//             $(".button").text("+");
//         }
//     });
//     $(".small a img").click(function(){
//         $(".small a img").fadeTo(100, 1).css({
//             "border":"none"
//         });
//         $(this).fadeTo(300, 0.6).css({
//             "border":"1px solid green"
//         });
//     });
// });
    



// $(function(){
//     $(".small a").click(function(x){
//         $(".big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
//         x.preventDefault();
//     });
//     $(".button").click(function(){
//         $(".gallery").slideToggle(300);
//         if($(".button").text()=="-"){
//             $(".button").text("+");
//         } else{
//             $(".button").text("-");
//         }
//     });
//     $(".small a img").click(function(){
//         $(".small a img").fadeTo(100, 1).css({
//             "border":"none"
//         });
//         $(this).fadeTo(100, 0.5).css({
//             "border":"1px solid #000"
//         });
//     });
// });




// $(function(){
//     $(".small a").click(function(x){
//         $(".big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
//         x.preventDefault();
//     });
//     $(".small a img").click(function(){
//         $(".small a img").fadeTo(100, 1).css({
//             "border":"none"
//         });
//         $(this).fadeTo(100, 0.6).css({
//             "border":"1px solid #333"
//         });
//     });
//     $(function(){
//         $(".button").click(function(){
//             $(".gallery").slideToggle(400);
//             if($(".button").text()=="-"){
//                 $(".button").text("+");
//             } else{
//                 $(".button").text("-");
//             }
//         });
//     });
// });


$(function(){
    $(".button").bind("click", function(){
        $(".gallery").slideToggle(300);
        if($(".button").text()=="-"){
            $(".button").text("+");
        } else{
            $(".button").text("-");
        }
    });
    $(function(){
        $(".small a").click(function(y){
            $(".big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
            y.preventDefault();
        });
        $(".small a img").click(function(){
            $(".small a img").fadeTo(100, 1).css({
                "border":"none"
            });
            $(this).fadeTo(100, 0.6).css({
                "border": "1px solid #999"
            });
        });
    })
});




// $(function(){
//     $(":submit").click(function(){
//         let value = $("input").val();
//         alert(value);
//     });
// });

// $(function(){
//     $(".for").submit(function(x){
//         if($(".tagP").val()==""){
//             x.preventDefault();
//             alert("вы не заполнили форму");
//         }
//     });
// });