function animasi() {
    const arrows = document.querySelectorAll(".bxs-down-arrow-circle");

    arrows.forEach(el => {
        el.addEventListener("click", function() {
            // const input = document.getElementsByTagName("input")[0];
            const input = el.previousElementSibling;
            const parent = el.parentElement;
            const email = parent.nextElementSibling;
            // console.info(email);

            // check validasi
            if (input.type === "text" && validasiUser(input)) {
                nextSlide(parent, email)
            } else if (input.type === "email" && validasiEmail(input)) {
                nextSlide(parent, email)
            }

        });
    })
};

function validasiUser(user) {
    if (user.value.length < 6) {
        // console.log(`Menulis tidak sesuai karakter`);
        alert(" masukkan lebih dari 6 karakter ");
        error(`rgb(189,87,87)`);
    } else {
        error(`rgb(176,176,176)`);
        return true;

    }
}

function validasiEmail(email) {
    const validasi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validasi.test(email.value)) {

        error(`  rgb(176, 176, 176) `);
        return true;
    } else {
        alert(`Masukkan email dengan benar`)
        error(`    rgb(189, 87, 87)    `);
    }
}

function nextSlide(parent, email) {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    email.classList.add("active");
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animasi();