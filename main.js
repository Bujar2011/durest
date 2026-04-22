let scrollBtn = document.getElementById('scrollToTop');

wiondow.onscroll = function() {
    if(document.body.scrollTop > 150 || document.documentElement.scorllTop > 150) {
        scrollBtn.style.display = "block";
    }

    else {
        scrollBtn.style.display = "none";
    }
}


scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}