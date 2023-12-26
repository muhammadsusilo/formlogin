function animasi() {
    const arrows = document.querySelectorAll(".bxs-down-arrow-circle")

    arrows.forEach(el => {
        el.addEventListener("click", function() {
            // const input = document.getElementsByTagName("input")[0];
            const input = el.previousElementSibling;
            const parent = el.parentElement;
            const email = parent.nextElementSibling;
            console.info(email);
        })
    })
};

function validasi(user) {

}



animasi();