const spans = document.querySelectorAll('.text h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))


const ccnabar = document.querySelector('.bar-ccna')
const ccnpbar = document.querySelector('.bar-ccnp')
const mcsabar = document.querySelector('.bar-mcsa')
const chebar = document.querySelector('.bar-che')

var t1 = new TimelineLite()
t1.fromTo(ccnabar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeout })
    .fromTo(ccnpbar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(95% - 6px)', ease: Power4.easeout })
    .fromTo(mcsabar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeout })
    .fromTo(chebar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(60% - 6px)', ease: Power4.easeout })


const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggeerHook: 0
})

.setTween(t1)

.addTo(contoller)


const showRequiredcategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i.hasAttribute('class')]) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector('.category-${getId}')
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for (i = 0; i < categories.length; i++) {
        if (categories[i.hasAttribute('class')]) {
            categories[i].classList.remove('showcategory')
            categories[i].classList.add('hidecategory')
        }
    }

    getCategory.classList.remove('hidecategory')
    getCategory.classList.add('showcategory')
}