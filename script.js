// console.log("object");

// const myName = "Jonas Schmedtmann"
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// const body = document.querySelector(".main-nav")



// h1.addEventListener('click', function(){
//     h1.textContent = myName;
// h1.style.backgroundColor = "rebeccapurple"
// h1.style.padding = "5rem"

// })

// body.addEventListener('click', function(){
//     h1.textContent = "";
// h1.style.backgroundColor = "red"
// h1.style.padding = "10rem"
// })

//set current year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear


//activating mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle("nav-open")
})




////////////////////////////
//smooth scroll


const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        // scroll back to top
        if(href==="#") window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        //scroll to other lkinks
        if(href !== "#" && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"})
        }
        if(link.classList.contains('main-nav-link')){
            headerEl.classList.toggle("nav-open")
        }

        })
})

//////////////sticky nav
const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
    } 
    if(ent.isIntersecting === true){
        document.body.classList.remove('sticky')
    } 
    
},
{

    root:null,
    treshold: 0,
    rootMargin: '-80px',
});
 obs.observe(sectionHeroEl) 






























//flexcheck for safari
function checkFlexGap(){
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if(!isSupported)document.body.classList.add("no-flexbox-gap")
}

checkFlexGap();