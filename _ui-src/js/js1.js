const HOMEPAGE = {
    init: function() {
        this.onFormSubmit();
    },

    onFormSubmit: function() {
        $('$sign-in-form').on('submit', function() {
            var signedIn = true;
            
            if (signedIn === true) {
                signedIn = false;
            } else {
                signedIn = true;
            }
            var signInButton = $('#sign-in-button');

            if (signedIn === true) {
                signInButton.style.display = "block";
              } else {
                signInButton.style.display = "none";
              }
            }
            
    });
};

$(document).ready(function () {
    HOMEPAGE.init();
});