toggleVisibility = (codeGroup) => {
    switch (codeGroup) {
        case 'frontend':
        case 'markup' : {
            document.getElementById('cplusplus').style.visibility = 'hidden';
            document.getElementById('html').style.visibility = 'visible';
            document.getElementById('java').style.visibility = 'hidden';
            document.getElementById('php').style.visibility = 'hidden';
            document.getElementById('python').style.visibility = 'hidden';
            document.getElementById('csharp').style.visibility = 'hidden';
            break;
        }

        case 'backend' : {
            document.getElementById('cplusplus').style.visibility = 'visible';
            document.getElementById('html').style.visibility = 'hidden';
            document.getElementById('java').style.visibility = 'visible';
            document.getElementById('php').style.visibility = 'visible';
            document.getElementById('python').style.visibility = 'visible';
            document.getElementById('csharp').style.visibility = 'visible';
            break;
        }

        case 'system' : {
            document.getElementById('cplusplus').style.visibility = 'visible';
            document.getElementById('html').style.visibility = 'hidden';
            document.getElementById('java').style.visibility = 'hidden';
            document.getElementById('php').style.visibility = 'hidden';
            document.getElementById('python').style.visibility = 'visible';
            document.getElementById('csharp').style.visibility = 'hidden';
            break;
        }

        case 'reset' : {
            Array.from(document.getElementsByClassName('content-block'))
                .forEach(block => block.style.visibility = 'visible');
        }
    }
};
