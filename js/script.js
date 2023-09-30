var imgObj = null;
            
            function init() {
               imgObj = document.getElementById('myImage');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
            }
            function moveRight() {
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
            }
            
            window.onload = init;

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });

