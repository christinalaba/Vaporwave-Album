const vaporwave = {};

vaporwave.canvasSwipe = function () {
    $('.background, .foreground').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true 
    });
}

vaporwave.smoothscroll =function () {
    $('a').smoothScroll({
        offset: 100,
        speed: 700
    }); 
    
}

vaporwave.albumTitle = [
    'R4ve',
    'VHS Glitch',
    'Runtime Rr',
    'Vapor.zip', 
    'zone.wav',
    'cyber talk',
    'Lisa 1983',
    'chime boot',
    'code.js',
    'wav IPA',
    'iNitialize',
    'AESTHETIC'
]

vaporwave.randomTitle = function() {
    $('#randomTitle').on('click', function () {
        let name = vaporwave.albumTitle[Math.floor(Math.random() * vaporwave.albumTitle.length)];
        vaporwave.name = name;
        vaporwave.addTitle();
    });
}

vaporwave.name = '';

vaporwave.customTitle = function () {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const customName= $('#typed-title').val()
        vaporwave.name = customName;
        vaporwave.addTitle();
    });
}

vaporwave.addTitle = function () {
    $('.albumTitle').text(`${vaporwave.name}`)
}

vaporwave.fontChange = function (){
    $("select").change(function () {
        vaporwave.font = $("select option:checked").val();
        vaporwave.applyFont();
    });
}

vaporwave.applyFont = function (){
    if (vaporwave.font === 'vcr'){
        $(".albumTitle").css({ 
            "font-family": "vcr", 
            "transform": "rotate(-90deg)", 
            "font-size": "4rem" });
    } else if (vaporwave.font === 'streamster'){
        $(".albumTitle").css({ 
            "font-family": "streamster", 
            "transform": "rotate(-20deg)", 
            "font-size": "7rem"});
    }else {
        $(".albumTitle").css({ 
            "font-family": "alien", 
            "transform": "rotate(0deg)", 
            "font-size": "5rem"});
    };
}

vaporwave.addObjects = function (){
    $('.thumbnailbust').on('click', function(){
        $('.objectbust').toggleClass('visible');
    });

    $('.thumbnailpalm').on('click', function (){
        $('.objectpalm').toggleClass('visible');
    });

    $('.thumbnailsun').on('click', function () {
        $('.objectsun').toggleClass('visible');
    });

    $('.thumbnailtetris').on('click', function () {
        $('.objecttetris').toggleClass('visible');
    });

    $('.thumbnailbart').on('click', function () {
        $('.objectbart').toggleClass('visible');
    });
    
    $('.thumbnailtesla').on('click', function () {
        $('.objecttesla').toggleClass('visible');
    });
}

vaporwave.toggleArrows = function () {
    $('.backgroundTitle').on('click', function () {
        $('button.flickity-prev-next-button.next').toggleClass('opacity');     
    });
}

vaporwave.jQPlugs = function () {
    $(function () {
        $("#accordion").accordion({
            heightStyle: "content",
            collapsible: true
        });

        $(".object").draggable();
        snap: true
        });
}

vaporwave.initialize = function(){
    vaporwave.smoothscroll();
    vaporwave.canvasSwipe();
    vaporwave.randomTitle();
    vaporwave.customTitle ();
    vaporwave.addTitle();
    vaporwave.fontChange();
    vaporwave.jQPlugs();
    vaporwave.addObjects();
    vaporwave.toggleArrows();
}

$(vaporwave.initialize());