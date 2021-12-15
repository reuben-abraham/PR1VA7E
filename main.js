function validate() {
    var password =
        document.forms["login"]["password"];

    if (password.value == "LRPaywall") {
        window.location.href = "https://reubenabraham-official.medium.com/from-freemium-to-premium-disney-hotstars-transition-to-a-subscriber-only-service-on-tv-89e698e8e7ba";
        return false;
    }

    return true;
}