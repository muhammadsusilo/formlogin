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
                // console.log("terima kasih ok")
                next(parent, email)
            }
        });
    })
};

function validasiUser(user) {
    if (user.value.length < 6) {
        console.log(`Menulis tidak sesuai karakter`);

        error(`rgb(189,87,87)`);
    } else {
        error(`rgb(176,176,176)`);
        return true;

    }
}

function next(parent, email) {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    email.classList.remove("active");
}

function error(color) {
    document.body.style.backgroundColor = color;
}


animasi();