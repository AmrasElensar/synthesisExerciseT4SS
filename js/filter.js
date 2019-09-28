toggleVisibility = (codeGroup) => {
    switch (codeGroup) {
        case 'frontend':
        case 'markup' : {
            document.getElementById('cplusplus').style.display = 'none';
            document.getElementById('html').style.display = 'block';
            document.getElementById('java').style.display = 'none';
            document.getElementById('php').style.display = 'none';
            document.getElementById('python').style.display = 'none';
            document.getElementById('csharp').style.display = 'none';
            break;
        }

        case 'backend' : {
            document.getElementById('cplusplus').style.display = 'block';
            document.getElementById('html').style.display = 'none';
            document.getElementById('java').style.display = 'block';
            document.getElementById('php').style.display = 'block';
            document.getElementById('python').style.display = 'block';
            document.getElementById('csharp').style.display = 'block';
            break;
        }

        case 'system' : {
            document.getElementById('cplusplus').style.display = 'block';
            document.getElementById('html').style.display = 'none';
            document.getElementById('java').style.display = 'none';
            document.getElementById('php').style.display = 'none';
            document.getElementById('python').style.display = 'block';
            document.getElementById('csharp').style.display = 'none';
            break;
        }

        case 'reset' : {
            Array.from(document.getElementsByClassName('content-block'))
                .forEach(block => block.style.display = 'block');
        }
    }
};
