$(function() {
    var nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=jqgIWqrgrNbKmhVz24ykp4jmtpTzoA1yJyyFMAeb';
    var intro = $('section.intro-site');
    var galleryUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=jqgIWqrgrNbKmhVz24ykp4jmtpTzoA1yJyyFMAeb';
    var mainSite = $('section.main-site');
    var gallery = $('loadphotos');
    var button = $('button.load-button');

    function loadBackgroundImage() {
        $.ajax({
            url: nasaUrl,
            type: "GET"
        }).done(function(image) {
            console.log(image);
            insertMainImage(image);
        }).fail(function(error) {
            console.log(error);
        });
    }


    function insertMainImage(image) {
         intro.css('background-image', "url("+ image.url +")")
    }

    function loadGallery() {
        $.ajax({
            url: galleryUrl,
            type: "GET"
        }).done(function(gallery) {
            console.log(gallery);
            // insertGallery();
        }).fail(function(error) {
            console.log(error);
        });
    }

     function insertGallery(){

     }


    loadGallery();
    loadBackgroundImage();
});
