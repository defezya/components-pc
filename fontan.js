document.addEventListener('DOMContentLoaded', function() {
 const buttons = document.querySelectorAll('.product button');

 buttons.forEach(button => {
     button.addEventListener('click', function() {
         alert('Детальная информация о ' + this.parentElement.querySelector('h3').innerText);
     });
 });
});

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
