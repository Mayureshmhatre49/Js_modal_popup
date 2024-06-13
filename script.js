'use strict';

const clickModel = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const model = document.querySelector('.modal');
const closeModel = document.querySelector('.close-modal');

clickModel.forEach(element => {
    element.addEventListener('click', function(){
        model.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
})    
});

closeModel.addEventListener('click', function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
})






<script>
document.addEventListener("DOMContentLoaded", function() {
    
 // All Varibales
  const buttons = document.querySelectorAll(".click");
  const divs = document.querySelectorAll(".open");
  const close = document.querySelectorAll(".close_model");
  const closeBtn = document.querySelectorAll(".close_model_btn");
  const form = document.querySelectorAll(".form_selector");
  const applyForm = document.querySelectorAll(".apply_form");
  const form_btn_txt = document.querySelectorAll(".apply_form .elementor-button-text");


//For each card Details button open popup
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      divs.forEach(div => {
        div.classList.remove("show_model");
      });
      divs[index].classList.add("show_model");
    });
  });

//For each card close button close the poupup
close.forEach((close, index) => {
    close.addEventListener("click", () => {
      divs.forEach(div => {
        divs[index].classList.remove("show_model");
        form[index].classList.add("form_hidden");
       form_btn_txt[index].textContent = 'APPLY NOW';
      });
    });
  });
  
 // For each card close icon close the popup
  closeBtn.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
      divs.forEach(div => {
        divs[index].classList.remove("show_model");
        form[index].classList.add("form_hidden");
        form_btn_txt[index].textContent = 'APPLY NOW';
      });
    });
  });
  

 // For each Apply form btn toggle form and text content
applyForm.forEach((applyForm, index) => {
  applyForm.addEventListener("click", () => {
    form.forEach((formElement, formIndex) => {
      if (formIndex === index) {
        formElement.classList.toggle("form_hidden");
        if (form_btn_txt[formIndex].textContent === 'APPLY NOW') {
          form_btn_txt[formIndex].textContent = 'Minimize';
        } else {
          form_btn_txt[formIndex].textContent = 'APPLY NOW';
        }
      } else {
        formElement.classList.add("form_hidden");
        form_btn_txt[formIndex].textContent = 'APPLY NOW';
      }
    });
  });
});


  
});
</script>





<script>
document.addEventListener("DOMContentLoaded", function() {
    
 // All Varibales
  const buttons = document.querySelectorAll(".click");
  const divs = document.querySelectorAll(".open");
  const close = document.querySelectorAll(".close_model");
  const closeBtn = document.querySelectorAll(".close_model_btn");
  const form = document.querySelectorAll(".form_selector");
  const applyForm = document.querySelectorAll(".apply_form");
  const form_btn_txt = document.querySelectorAll(".apply_form .elementor-button-text");

  const colseModel = function() {
      divs.forEach(div => {
        divs[index].classList.remove("show_model");
        form[index].classList.add("form_hidden");
       form_btn_txt[index].textContent = 'APPLY NOW';
      });
    }

//For each card Details button open popup
  buttons.forEach((button, index) => {
    button.addEventListener("click", colseModel);
  });

//For each card close button close the poupup
close.forEach((close, index) => {
    close.addEventListener("click", colseModel);
  });
  
 // For each card close icon close the popup
  closeBtn.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
      divs.forEach(div => {
        divs[index].classList.remove("show_model");
        form[index].classList.add("form_hidden");
        form_btn_txt[index].textContent = 'APPLY NOW';
      });
    });
  });
  

 // For each Apply form btn toggle form and text content
applyForm.forEach((applyForm, index) => {
  applyForm.addEventListener("click", () => {
    form.forEach((formElement, formIndex) => {
      if (formIndex === index) {
        formElement.classList.toggle("form_hidden");
        if (form_btn_txt[formIndex].textContent === 'APPLY NOW') {
          form_btn_txt[formIndex].textContent = 'Minimize';
        } else {
          form_btn_txt[formIndex].textContent = 'APPLY NOW';
        }
      } else {
        formElement.classList.add("form_hidden");
        form_btn_txt[formIndex].textContent = 'APPLY NOW';
      }
    });
  });
});


  
});
</script>