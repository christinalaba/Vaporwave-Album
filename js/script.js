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
        offset: 0,
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
    'AcidDac',
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
    $('.album-title').text(`${vaporwave.name}`)
}

vaporwave.fontChange = function (){
    $("select").change(function () {
        vaporwave.font = $("select option:checked").val();
        vaporwave.applyFont();
    });
}

vaporwave.applyFont = function (){
    if (vaporwave.font === 'vcr'){
        $(".album-title").css("font-family", "vcr");
    } else if (vaporwave.font === 'streamster'){
        $(".album-title").css("font-family", "streamster");
    }else {
        $(".album-title").css("font-family", "alien");
    };
}

vaporwave.initialize = function(){
    vaporwave.smoothscroll();
    vaporwave.canvasSwipe();
    vaporwave.randomTitle();
    vaporwave.customTitle ();
    vaporwave.addTitle();
    vaporwave.fontChange();
}

$(vaporwave.initialize());