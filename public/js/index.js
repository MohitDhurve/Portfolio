
var typed = new Typed('#element', {
    strings: ['<h4>Programming :</h4> C++, Python, SQL', '<h4>Web Development :</h4> HTML, CSS, JavaScript, NodeJS, ExpressJS', '<h4>Databases :</h4> MySQL, MongoDB'],
    typeSpeed: 50,
    smartBackspace: true,
    loop: true
});

document.getElementById('resume-button').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = '/public/data/Mohit_Dhurve(dhurvemohit8@gmail.com).pdf'; 
    link.download = 'Mohit_Dhurve_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});