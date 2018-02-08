

//< --BACKGOURND SCREEN-- >
//use an event listener to listen for the NEXT button on "background screen" to be pressed. 
//on click: toggle 'fade' class to 'background' + its corresponding info:
//on click: toggle 'fade' to make the 'random objects' visible
//on click: toggle 'hide' class to hide scroll controls,



//< --RANDOM OBJECTS SCREEN-- >
//use an event listener to listen for the NEXT button to be pressed. 
//on click: toggle 'fade' class to 'random objects' + its corresponding info
//on click: toggle 'fade' class to 'album title' to make it visible

//use an event listener to listen for the PREVIOUS button to be pressed. 
//on click: toggle 'fade' class to 'random objects' + its corresponding info
//on click: toggle 'fade' class to make the 'background + its corresponding info' visible
//on click: toggle 'hide' class to make scroll controls visible


//< --ALBUM TITLE SCREEN-- >

//use an event listener to listen for the NEXT button to be pressed. 
//on click: toggle 'hide' class to make all options display none and
//on click: toggle 'hide' class to show social icons

//use an event listener to listen for the PREVIOUS button to be pressed. 
//on click: toggle 'fade' class to 'album title' + its corresponding info
//on click: toggle 'fade' class to make the 'random objects' visible



const vaporwave = {};

vaporwave.name = '';

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

vaporwave.canvasSwipe = function () {
    $('.background, .foreground').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true 
    });
}

vaporwave.addTitle = function () {
    $('.album-title').text(`${vaporwave.name}`)
}


vaporwave.customTitle = function () {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const customName= $('#typed-title').val()
        console.log(customName, 'custom name');
    });
}

vaporwave.randomTitle = function() {
    $('.generate').on('click', function () {
        let name = vaporwave.albumTitle[Math.floor(Math.random() * vaporwave.albumTitle.length)];
        vaporwave.name = name;
        console.log(vaporwave.name, 'random name');
    });
}

vaporwave.initialize = function(){
    vaporwave.randomTitle();
    vaporwave.canvasSwipe();
    vaporwave.customTitle ();
    vaporwave.addTitle();
}


$(vaporwave.initialize());