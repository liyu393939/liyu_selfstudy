var button = document.getElementById('myButton');
var message = document.getElementById('message');

button.addEventListener('click', function() {
  message.textContent = '你好，欢迎你！';
});