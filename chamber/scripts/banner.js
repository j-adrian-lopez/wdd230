const banner = document.querySelector("#banner");
const currentDate = new Date().getDay();
const hide = document.getElementById('inactive');

    if (currentDate === 1 || currentDate === 2){
        banner.style.display = 'flex';
    }
    else {
        banner.style.display = 'none';
    };

hide.addEventListener('click', () => {
        banner.style.display ='none';
        });
    