let clickScroll = function () {
    let dBox = document.getElementById('d');
    if (dBox) {
        let left = dBox.offsetLeft;
        let navBox = document.getElementById('nav-box');
        if (navBox) {
            navBox.scrollTo(navBox.clientWidth / 2 - dBox.clientWidth / 2 - 15, 0);
        }
    }
}
let clickElementScroll = function (e) {
    let element = e;
    if (element) {
        let left = element.offsetLeft;
        let navBox = document.getElementById('nav-box');
        if (navBox) {
            navBox.scrollTo(left, 0); //navBox.clientWidth / 2 - dBox.clientWidth / 2 - 15
        }
    }
}