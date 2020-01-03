// Services counter
let percents = document.querySelectorAll('.services .percent');
let services = document.querySelector('.services');
services.addEventListener('mouseover', servicesCount);
function servicesCount() {
    let start = 0;
    let time = 2300;

    count(start, time, 80, percents[0]);
    count(start, time, 75, percents[1]);
    count(start, time, 60, percents[2]);

    function count(count, time, max, elem) {
        let interval = time/max;
        let timer = setInterval(function () {
            elem.innerHTML = count + '%';
            count ++;
            if (count === max + 1) clearInterval(timer);
        }, interval);
    }
    services.removeEventListener('mouseover', servicesCount);
}



