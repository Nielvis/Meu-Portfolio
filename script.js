$(document).ready(function() {
    $('#cities').select2({
        placeholder: "Selecione uma ou mais cidades",
        allowClear: true
    });
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.background-animation');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});


document.addEventListener('DOMContentLoaded', function() {
    const selectSkills = document.getElementById('skills');
    const skillInfoContainer = document.getElementById('skill-info');
    
    selectSkills.addEventListener('change', function() {
        skillInfoContainer.innerHTML = ''; 
        
        const selectedSkills = Array.from(selectSkills.selectedOptions).map(option => option.value);
        
        selectedSkills.forEach(skill => {
            const skillPercent = getSkillPercent(skill); 
            
            if (skillPercent !== null) {
                const skillElement = document.createElement('div');
                skillElement.classList.add('skill');
                skillElement.innerHTML = `
                    <h2>${skill}</h2>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${skillPercent}%;"></div>
                    </div>
                    <p>${skillPercent}%</p>
                `;
                skillInfoContainer.appendChild(skillElement);

                skillElement.querySelector('.progress').offsetWidth;
                skillElement.querySelector('.progress').style.width = `${skillPercent}%`;
            }
        });
    });
    
    function getSkillPercent(skill) {
        switch(skill) {
            case 'HTML5':
                return 100;
            case 'CSS3 (Sass)':
                return 100;
            case 'JavaScript':
                return 100;
            case 'Angular.js':
                return 75;
            case 'Node.js':
                return 85;
            case 'Typescript.js':
                return 65;
            case 'Python (Linguagem Orientada a Objetos)':
                return 60;
            case 'Java (Linguagem Orientada a Objetos)':
                return 50;
            case 'C# (Linguagem Orientada a Objetos)':
                return 50;
            case 'WordPress':
                return 80;
            case 'Magento2':
                return 60;
            case 'Google Cloud Platform (GCP)':
                return 70;
            case 'Amazon Web Services (AWS)':
                return 75;
            case 'MySQL':
                return 100;
            case 'Oracle':
                return 100;
            case 'SQL':
                return 70;
            case 'Scrum':
                return 100;
            case 'Kanban':
                return 100;
            case 'Implementação de API':
                return 100;
            case 'Versionamento de Código: Git':
                return 90;
            default:
                return null;
        }
    }
});

function smoothScroll(target, duration) {
    var targetSection = document.querySelector(target);
    var targetPosition = targetSection.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetSectionId = link.getAttribute('href');
        smoothScroll(targetSectionId, 1000); 
    });
});



