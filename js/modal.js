var addresses = [
    { id: 1, address: "Улица Пушкина, дом 23" },
    { id: 2, address: "Улица Ленина, дом 12" },
    { id: 3, address: "Проспект Мира, дом 1" }
];

var modal = document.getElementById("myModal");
var modalMessage = document.getElementById("modalMessage");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("searchForm");

var deliveryBtn = document.getElementById("deliveryBtn");
var restaurantBtn = document.getElementById("restaurantBtn");
var mapBlock = document.getElementById("mapBlock");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputAddress = form.adres.value.trim();
    var found = addresses.some(function(addr) {
        return addr.address.toLowerCase() === inputAddress.toLowerCase();
    });

    if (found) {
        modalMessage.innerText = "Адрес найден!";
    } else {
        modalMessage.classList.remove("none_all");
    }

    modal.style.display = "block";
});

deliveryBtn.onclick = function() {
    deliveryBtn.classList.add("active_modal_title");
    restaurantBtn.classList.remove("active_modal_title");
    mapBlock.classList.add("none_all");
    form.classList.remove("none_all")
}

restaurantBtn.onclick = function() {
    restaurantBtn.classList.add("active_modal_title");
    deliveryBtn.classList.remove("active_modal_title");
    modalMessage.classList.add("none_all");
    mapBlock.classList.remove("none_all");
    form.classList.add("none_all")
}