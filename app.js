document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('payButton').addEventListener('click', function() {
        var userId = 'user123';  // This should be dynamically set based on the logged-in user
        var paymentUrl = 'ton://transfer/UQA8-VqTgpQm4GVu19dKZyGCO2CozkuKrmrbi3rk-nTYyNqX?amount=2.0';

        window.location.href = paymentUrl;
    });
});
