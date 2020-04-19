import testFunc from './another';

console.log('Kerri loves to bike outside. Everyday!');

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('demo').innerHTML = Date();
  });
});
