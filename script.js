
// Switch image for the experience container
function experienceImgHandler(job){
    imgAddress = null;
    projectLink = null;
    switch(job){
        case 'cipher':
            imgAddress  = "images/cipher.png";
            projectLink = "http://faceboo.com/projectcipher";
            break;
        case 'htn':
            imgAddress = "images/hackTheNorth.png";
            projectLink = "https://devpost.com/software/harry-potter-vr-chess-board";
            break;
        case 'capriccio':
            imgAddress = "images/capriccio.png";
            projectLink = "https://devpost.com/software/capriccio";
            break;
        default:

    }
    document.getElementById("experienceImage").src = imgAddress;
    document.getElementById("projecLink").href = projectLink;
}