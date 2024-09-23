/*
 * Simple script to load header and footer for the page,
 * and mark the correct item in the navigation bar as active
 */
$("#header").load("/header.html", function() {
    /*
     * Now that header is loaded, loop through all links. Set one to the
     * active class based on which page we are on.
     */
    $("#nav-links").find("a").each(function() {
        if ($(this).attr("href") == $(location).attr("pathname")) {
            /* Set href for this element to # */
            $(this).attr("href", "#")
            if ($(this).parent().hasClass("nav-item")) {
                /* Make this nav-item active */
                $(this).parent().addClass("active");
            } else if ($(this).parent().hasClass("dropdown-menu")) {
                /* Make the dropdown menu active */
                $(this).parent().parent().addClass("active");
            }
        }
    });
});
$("#footer").load("/footer.html");
