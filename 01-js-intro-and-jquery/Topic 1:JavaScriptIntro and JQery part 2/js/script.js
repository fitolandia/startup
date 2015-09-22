$(document).on('ready', function() {
    $section = $('.section');
    $.ajax ({
        url: 'https://api.spotify.com/v1/search?q=Rolling&type=album',
        success: function(response) {
            var albums = response.albums.items;
            var albumCover = '';
            var albumLink = '';
            $.each(albums, function(index, album) {
                albumCover = '<img src=" ' + album.images[1].url + ' "/>';
                albumLink = '<a href=" '+ album.external_urls.spotify +' " >Spotify </a>';
                $section.append('<header>' + '<h3>' + album.name + '</h3>' + '</header>');
                $section.append('<article>' + albumCover + '</article>');
                $section.append('<footer>' + albumLink + '</br>' + '<h4>Type :' +  album.type +  '</h4>' +'</footer>');
                $section.append('</br>');
            });
            console.log(albums);
        },
        error: function(jqXHR, status, error) {
            console.log(error);
            console.log(status);
            $section.css('background-color', 'red');
        },
        complete: function(jqXHR, response) {
            console.log(response);
        }
    })

});