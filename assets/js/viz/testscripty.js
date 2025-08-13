document.addEventListener('DOMContentLoaded', function() {
  const messageElement = document.getElementById('my-message');
  if (messageElement) {
    messageElement.textContent = 'Hello from JavaScript!';
  }
});

function showAlert() {
  alert('Button clicked!');
}