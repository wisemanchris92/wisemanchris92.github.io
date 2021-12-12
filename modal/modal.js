const openBtn = document.querySelector(".js-open")
const modalBg = document.getElementById("modal-background")
const modalBox = document.getElementById("modal-box")
openBtn.addEventListener('click', function (event) {
    event.preventDefault()
    //classlist.add("active") will add "active" to class name of modal-background//
    modalBg.classList.add("active")
    modalBox.classList.add("active")
})

const closedBtns = document.querySelectorAll(".js-close")
closedBtns.forEach(node => {
    node.addEventListener('click', function (event) {
        event.preventDefault()
        // remove "active" class label
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")

    })
})

