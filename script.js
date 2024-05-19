// Document Ready function - ensure the HTML is fully loaded before trying to use any JS

// $ = getElement or querySelector

// Grab the document (HTML) and check it is ready:
$(document).ready(function () {
    // ALL JS is placed inside of here

    // Change background colour of all the p tags to red once document is ready

    $("p").css("color", "grey"); // All p tags
    $("#one").css("color", "blue"); // First ID
    $("#two").css("color", "red");
    $("#three").css("color", "green");
    $("#four").css("color", "magenta");
    $("#five").css("color", "yellow");

    // Body background color to off black
    $("body").css("background-color", "black").css("font-family", "arial, san-serif").css("font-weight", "600");

    // Button CSS
    $("#hideButton").css("border", "none").css("background-image", "linear-gradient(red, yellow)").css("padding", "10px").css("border-radius", "10px");
    $("#showButton").css("border", "none").css("background-image", "linear-gradient(red, yellow)").css("padding", "10px").css("border-radius", "10px");
    $("#alertButton").css("border", "none").css("background-image", "linear-gradient(red, yellow)").css("padding", "10px").css("border-radius", "10px");

    // Click Events:

    // Click event to hide p tags
    $("#hideButton").click(function () {
        // my JS for the click event:
        $("p").hide();
    });

    // Click event to hide p tags
    $("#showButton").click(function () {
        // my JS for the click event:
        $("p").show();
    });

    // Alert Button pops up and alerts:
    $("#alertButton").click(function () {
        alert("alert button works")
    });

    // Onchange of the username update the userResult p tag
    $("#usernameInput").change(function (event) {
        $("#usernameResult").html(event.target.value); // Change HTML inside the P tag
    });

    // Onchange of the username update the userResult p tag
    $("#passwordInput").change(function (event) {
        $("#passwordResult").html(event.target.value); // Change HTML inside the p tga
    });








    /** ------------ DATE PICKER ------------------- */

    // Initialise datepicker on the inputs:
    $("#start-date").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            const startDate = $("#start-date").datepicker("getDate");
            console.log(startDate);
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    $("#end-date").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            const endDate = $("#end-date").datepicker("getDate");
            console.log(endDate);
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    // Calculate difference between the two dates:

    function calculateDays() {
        const startDate = $("#start-date").datepicker("getDate");
        const endDate = $("#end-date").datepicker("getDate");

        // Check if we have a start date and an end date
        if (startDate && endDate) {
            // calculate the difference :
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) // makes sure the number is a positive number
            console.log(timeDiff);
            // 1000 milliseconds per second
            // 3600 second per hour
            // 24 hours in a day
            // 1000 * 3600 * 24 = number of milliseconds in a day

            // timeDiff / number of milliseconds in a day = number of days
            // make sure number of days is a whole number - we use Math.ceil()

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update number of days span

            $("#number-of-days").text(diffDays);

            // Return diffDays to make it accessable to the populate function
            return diffDays;

        } else {
            // make sure number of days is empty
            $("#number-of-days").text(""); // set it to empty text
        }
    }

    /** --------- EXAMPLE OF USING DATE FILTER ----------- */

    const hotels = [{
            id: 1,
            name: "Hotel 1",
            minStay: 3,
            maxStay: 10,
        },
        {
            id: 2,
            name: "Hotel 2",
            minStay: 1,
            maxStay: 14,
        },
        {
            id: 3,
            name: "Hotel 3",
            minStay: 4,
            maxStay: 7,
        },
        {
            id: 4,
            name: "Hotel 4",
            minStay: 2,
            maxStay: 21,
        },
        {
            id: 5,
            name: "Hotel 5",
            minStay: 5,
            maxStay: 8,
        },
    ];

    function populateResults(diffDays) {
        // Clear out the results div
        $("#results").html ("");
        // run a for loop over the hotel array to do this for each hotel:
        hotels.forEach(hotel => {
            if (diffDays >= hotel.minStay && diffDays <= hotel.maxStay) {
                $("#results").append(`<p>${hotel.name}</p>`);
            } else {
                $("#results").append(``);
            }
        });
    }

});