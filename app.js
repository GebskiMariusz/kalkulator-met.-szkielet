function goTo(id) {
  document.querySelectorAll('.scene').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
