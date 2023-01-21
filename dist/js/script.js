// tangkap element
// element navbar
const burger = document.querySelector('.navbar-burger');
const navbar = document.querySelector('.navbar-list ul');

// element waktu
const waktu = document.getElementById('jam');
const greeting = document.getElementById('greeting');

//  event burger ketika di-klik
burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// click diluar navbar untuk menghilangkan navbar
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

// display waktu
const displayClock = () => {
    const clock = new Date();
    let h = clock.getHours();
    let m = clock.getMinutes();
    let salam;

    // cek apakah jam atau menit dibawah 10 akan ditambahkan 0 di depannya
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;

    // cek waktu pagi siang atau malam
    if (h < 10) {
        salam = 'Good Morning!';
    } else if (h < 18) {
        salam = 'Good Afternoon!';
    } else {
        salam = 'Good Evening!';
    }

    let valueClock = `${h} : ${m}`;
    waktu.innerHTML = valueClock;
    greeting.innerHTML = salam;
}

let display = setInterval(displayClock, 1000);
