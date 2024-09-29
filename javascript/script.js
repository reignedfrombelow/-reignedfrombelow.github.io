$(document).ready(function () {
    // Update the countdown for each event
    $(".event-date").each(function() {
        var eventDate = $(this).data("event-date");
        var countDownDate = new Date(eventDate).getTime();

        // Select countdown elements within the current event block
        var countdown = $(this).closest(".band-event").find(".countdown");

        // Update the countdown every 1 second
        var x = setInterval(function () {
            // Get the current date and time
            var now = new Date().getTime();

            // Calculate the remaining time
            var distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown within the current event block
            countdown.find("#days").text(days);
            countdown.find("#hours").text(hours);
            countdown.find("#minutes").text(minutes);
            countdown.find("#seconds").text(seconds);

            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(x);
                countdown.text("EXPIRED");
            }
        }, 1000);
    });
});