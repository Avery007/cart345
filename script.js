$(document).ready(setup);
let x=0;
let opacity=1;
function setup()
{ $('#chip1').draggable();
  $('#chip2').draggable();
  $('#chip3').draggable();
  $('#chip4').draggable();
  $('#aura').droppable({
      // The drop option specifies a function to call when a drop is completed
      drop: function(event, ui){
        ui.draggable.remove();
        opacity=opacity-0.25;
        $('#aura').css('opacity',opacity) ;
        x=x+1;
        console.log(x);
        if(x==4){
             $('#aura').remove();
             $('#button').show();
         }
      }
    });

}

function report(){
     $('#text2').show();
    $('#text1').remove();
      $('#button').remove();
      $('#phrase').show();
      $('#title').remove();





}
