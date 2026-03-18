document.addEventListener('DOMContentLoaded', function() {
    const kasihThrBtn = document.getElementById('kasihThrBtn');
    const qrisSection = document.getElementById('qrisSection');
    const sudahScanBtn = document.getElementById('sudahScanBtn');
    const doaSection = document.getElementById('doaSection');
    const eidSection = document.querySelector('.eid-section');

    kasihThrBtn.addEventListener('click', function() {
        eidSection.style.display = 'none';
        qrisSection.style.display = 'block';
        qrisSection.classList.add('show');
    });

    sudahScanBtn.addEventListener('click', function() {
        qrisSection.style.display = 'none';
        doaSection.style.display = 'block';
        doaSection.classList.add('show');
    });
});