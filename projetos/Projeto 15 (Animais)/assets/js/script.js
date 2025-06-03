//Selecionar todos os elementos
//var img = document.querySelectorAll('img'); //Tag
//console.log(img);

//Selecionar elementos específicos
//const imgAnimais = document.querySelectorAll('img[src^="assets/img/img/"]'); //Nome do arquivo
//console.log(imgAnimais);

//Seleciona link interno 
//const linkInterno = document.querySelectorAll('a[href^="#"]');
//console.log(linkInterno);
//console.log(linkInterno[1]);

//const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

//const gridHTML = document.getElementsByClassName('.grid-section');
//console.log(gridHTML);

//const gridNode = document.querySelectorAll('.grid-section');
//console.log(gridNode);

//primeiraUl.classList.add('.grid-section');




//Array | ForEach

/* const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[10]);

let i = 0;

paragrafos.forEach(function(){
    console.log(i++);
})

paragrafos.forEach(function(itens){
    console.log(itens);
})

// paragrafos.forEach(function(itens, index){
//     console.log(itens,  index);
// })

paragrafos.forEach((itens, index) => {
    console.log(itens,  index);
})

 */


function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo'); //toggle
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
            
        });
    }
}

initAccordion()

function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute(href);
        
        
        //console.log(section,offsetTop);

        //Forma 1
       // const section = section.offsetTop;
       // window.scrollTo({
       //         top: section,
       //         behavior: 'smooth',
       //     });

       //Forma 2
       section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSmooth();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
        const windowHalf = window.innerHeight * 0.6;


    

    function animaScroll() {
       // console.log('algo');
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowHalf) < 0;
            
            //console.log(sectionTop);

            if (isSectionVisible) {
                section.classList.add('ativo');
            }else {
                section.classList.remove('ativo');
            }
    })
}
}
    animaScroll();
window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();