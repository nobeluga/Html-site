document.addEventListener('click', function (e) {
    var ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

    var rect = e.target.getBoundingClientRect();
    var rippleX = e.clientX - rect.left;
    var rippleY = e.clientY - rect.top;

    ripple.style.left = rippleX + 'px';
    ripple.style.top = rippleY + 'px';

    // Supprimer l'élément après l'animation
    ripple.addEventListener('animationend', function () {
        ripple.remove();
    });
});