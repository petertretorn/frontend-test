'use strict';

(function ($) {
 
    $(document).ready(function () {

        var images = ['SKAT_om_os.jpg', 'SKAT_job.jpg'],
            index = 0;

        function getNextImage() {
            var image = images[++index]

            if (!image) {
                image = images[0];
                index = 0;
            }
            return image;
        }

        $('#swap-button').click(function () {
            var background = undefined;

            $('.image').each(function () {
                //variable redundant now but required if rotating between more than 2 images on page
                var currentBackground;

                if (background) {
                    currentBackground = $(this).css('background-image');

                    $(this).css('background-image', background);
                    background = currentBackground;

                    return;
                }
                background = $(this).css('background-image');

                $(this).css('background-image', 'url(./img/' + getNextImage() + ')');
            });
        });
    });

})(jQuery);