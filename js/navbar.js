document.addEventListener('DOMContentLoaded', function() {
    const serviceDiv = document.querySelector('.servicediv');
    const content = serviceDiv.querySelector('.content');
    const arrow = serviceDiv.querySelector('.arrow');

    serviceDiv.addEventListener('click', function(e) {
        e.stopPropagation();
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        arrow.classList.toggle('down');
        arrow.classList.toggle('up');
    });

    document.addEventListener('click', function(e) {
        if (!serviceDiv.contains(e.target)) {
            content.style.display = 'none';
            arrow.classList.add('down');
            arrow.classList.remove('up');
        }
    });
});