$('.top-right .arrow-price span').text($('.room-inf.active').data('price'));
 var square = 9.50; /*за метр кв*/
 var corners = 7.50; /*за угол*/
 var lamps = 7.50; /*за светильник*/
 var pipe = 7.50; /*за трубу*/

 var total = $('#total span');
 var n = parseInt($('.inp-field input').val());


 $('#total h4').on('click', function() {
     var s = 0;
     var xxx = parseInt($('.factura input:checked').val());
     $('.inp-field input').each(function() {
         if ($(this).val() == '') {
             n = 0;
         }
         if ($(this).is('#square')) {
             var p = parseInt($(this).val() * xxx);
             s += $(this).val() * square + p;
         }
         if ($(this).is('#corners')) {
             s += $(this).val() * corners;
         }
         if ($(this).is('#lamps')) {
             s += $(this).val() * lamps;
         }
         if ($(this).is('#pipe')) {
             s += $(this).val() * pipe;
         }
         return s;
     });
     $(total).html(s);
 });

(function($){
$(window).load(function(){
 
$("body").mCustomScrollbar({
theme:"rounded-dots-dark"
});
 
});
})(jQuery);

