$().ready(function() {
    const sounds = [
        {src : "musics/m1.mp3", name : "Tamer1"},
        {src : "musics/m2.mp3", name : "Tamer2"},
        {src : "musics/m3.mp3", name : "Tamer3"},
        {src : "musics/m4.mp3", name : "Tamer4"},
    ];

    let i = 0;
    let audio = $("#currentAudio");
    audio.attr('src', sounds[i].src);

    $("#playButton").click(function() {
        audio[0].play();
    });

    $("#stopButton").click(function() {
        audio[0].pause();
    });
    $("#prevButton").click(function() {
        i--;
        if(i == -1){
            i = sounds.length - 1;
        }
        audio.attr('src', sounds[i].src);
    });
    $("#nextButton").click(function() {
        i++;
        if(i == sounds.length){
            i = 0;
        }
        audio.attr('src', sounds[i].src);
    });
});