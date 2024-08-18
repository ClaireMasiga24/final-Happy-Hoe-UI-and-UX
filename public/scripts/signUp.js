document.addEventListener('DOMContentLoaded', () => {
    const nextToStep2 = document.querySelector('#next-to-step2');
    const prevToStep1 = document.querySelector('#prev-to-step1');
    const nextToStep3 = document.querySelector('#next-to-step3');
    const prevToStep2 = document.querySelector('#prev-to-step2');

    const step1 = document.querySelector('#step1');
    const step2 = document.querySelector('#step2');
    const step3 = document.querySelector('#step3');

    nextToStep2.addEventListener('click', () => {
        step1.style.display = 'none';
        step2.style.display = 'block';
    });

    prevToStep1.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
    });

    nextToStep3.addEventListener('click', () => {
        step2.style.display = 'none';
        step3.style.display = 'block';
    });

    prevToStep2.addEventListener('click', () => {
        step3.style.display = 'none';
        step2.style.display = 'block';
    });
});
