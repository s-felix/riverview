if( document.querySelector('.page-order2301') ){

  // save references to the button and overlay
  const btn = document.querySelector('.cart');
  const overlay = document.querySelector('.overlay');

  // open the overlay
  btn.addEventListener('click',function(){
    overlay.classList.remove('hide');
    setTimeout(function(){overlay.classList.remove('fade')},100);
  })

  // close the overlay
  overlay.addEventListener('click',function(){
    overlay.classList.add('fade');
    setTimeout(function(){overlay.classList.add('hide')},200);
  })
}

if (document.querySelector('.overlay2')) {
  
  const o = document.querySelector('.overlay2');
  const l = document.querySelector('.place-order');

  l.addEventListener('click',function(e){
    
    e.preventDefault();
    
    const url = e.currentTarget.href;
    
    o.classList.remove('hide');
    
    setTimeout(function(){
      location.href = url;
    },3000);
  })

}

$(document).ready(function() {
    $('#roomnumber').on('input change', function() {
        if($(this).val() != '') {
            $('#RNsubmit').prop('disabled', false);
        } else {
            $('#RNsubmit').prop('disabled', true);
        }
    });
});


// $(document).submit(function() {
//   var roomnumber = $("#roomnumber").val();
//   if(roomnumber='23'){
//         window.location = "past-orders(R).html";
//      } else{
//         window.location = "services.html";
//      }
//      return true;
//   });

if(document.querySelector('.main')){
  const form = document.querySelector('.main');
  const roomnumberInput = form.querySelector('#roomnumber');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(roomnumberInput.value == 23){
      location.href = 'past-orders(R).html'
    } else if(roomnumberInput.value == 24) {
      location.href = 'services.html'
    }
  })
}

if( document.querySelector('.counter') ){

  const forms = document.querySelectorAll('.counter');
  const btnPlus = document.querySelectorAll('.count .increase');
  const btnMinus = document.querySelectorAll('.count .decrease');
  const qty = document.querySelectorAll('.count input');
  const quantity = document.querySelectorAll('.qty span');
  const btnCart = document.querySelector('.cart button');
  const count = [0,0,0];

  // initial form state
  forms.forEach(f => f.reset());
  btnMinus.forEach(bm => bm.disabled = true);
  btnCart.disabled = true;

  const updateDisplay = function(curr,count){
    qty.item(curr).value = count;
    quantity.item(curr).textContent = count;
    checkButtonState(curr,count);
  }
  
  const checkButtonState = function(curr,count){
    if(count === 0){
      btnMinus.item(curr).disabled = true;
      btnPlus.item(curr).disabled = false;
      btnCart.disabled = true;
    } else if(count === 10) {
      btnMinus.item(curr).disabled = false;
      btnPlus.item(curr).disabled = true;
      btnCart.disabled = false;
    } else {
      btnMinus.item(curr).disabled = false;
      btnPlus.item(curr).disabled = false;
      btnCart.disabled = false;
    }
  }

  btnPlus.forEach(function(bp,i){
    bp.addEventListener('click',function(e){
      e.preventDefault();
      if(count[i]<10){
        count[i]++;
        updateDisplay(i,count[i]);
      }
    })
  })
  
  btnMinus.forEach(function(bm,i){
    bm.addEventListener('click',function(e){
      e.preventDefault();
      if(count[i]>0){
        count[i]--;
        updateDisplay(i,count[i]);
      }
    })
  })
}
