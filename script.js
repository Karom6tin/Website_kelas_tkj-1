// Ambil elemen falling-stars
const fallingStars = document.createElement('div');
fallingStars.className = 'falling-stars';
document.body.appendChild(fallingStars);

// Fungsi untuk membuat bintang
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Posisi acak
    star.style.left = Math.random() * 100 + 'vw'; // Horizontal acak
    star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durasi acak
    star.style.animationDelay = Math.random() * 2 + 's'; // Delay acak

    fallingStars.appendChild(star);

    // Hapus bintang setelah animasi selesai
    setTimeout(() => {
        star.remove();
    }, 5000); // Sesuaikan waktu animasi jika perlu
}

// Tambahkan bintang baru setiap 300ms
setInterval(createStar, 600);


/*jadwal pelajaran*/
const scheduleContent = document.querySelector('.schedule-content');
const prevButton = document.querySelector('.arrow-prev');
const nextButton = document.querySelector('.arrow-next');

let currentIndex = 0;

function updateSlide() {
    const slideWidth = document.querySelector('.schedule-day').offsetWidth;
    scheduleContent.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    const maxIndex = scheduleContent.children.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlide();
    }
});

/*menu*/
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
}


