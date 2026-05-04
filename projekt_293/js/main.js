function toggleCard(card) {
  var isOpen = card.classList.contains('open');
  document.querySelectorAll('.theory.open').forEach(function(c) { c.classList.remove('open'); });
  if (!isOpen) card.classList.add('open');
}
