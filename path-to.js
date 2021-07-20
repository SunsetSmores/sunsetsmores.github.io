var seconds = 1; // seconds 
var foo; // variable for clearInterval() function

function redirect() {
    document.location.href = 'https://sunsetsmores.com';
}

function updateSecs() {
    
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}

countdownTimer();
