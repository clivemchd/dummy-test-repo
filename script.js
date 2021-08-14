function changeValue(value) {
    document.getElementById("namedispleft").innerHTML = value;
}
const options = {
    threshold: 0.1,
    rootMargin:'0px 0px -50% 0px'

}
const panel1 = document.querySelector(".panel1")
const panel2 = document.querySelector(".panel2")
const heading = document.querySelector(".heading")
const description=document.querySelector(".description")
const imgs=document.querySelector(".imgs")
const heading2 = document.querySelector(".heading2")
const imgs2=document.querySelector(".imgs2")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            if (entry.target.className == "dummy1") {
                panel1.classList.add('fade');
                panel2.classList.add('fade');
            }
            if (entry.target.className == "dummy2") {
                heading.classList.add('fade');
                description.classList.add('fade');
                imgs.classList.add('fade');
            }
            if (entry.target.className == "dummy3") {
                heading2.classList.add('fade');
                imgs2.classList.add('fade');
            }

            return
        }
        else {
            if (entry.target.className == "dummy1") {
                panel1.classList.remove('fade');
                panel2.classList.remove('fade');
            }
            if (entry.target.className == "dummy2") {
                heading.classList.remove('fade');
                description.classList.remove('fade');
                imgs.classList.remove('fade');
            }
            if (entry.target.className == "dummy3") {
                heading2.classList.remove('fade');
                imgs2.classList.remove('fade');
            }
        }
    })
}, options);
var targets = [(document.querySelector('.dummy1')),
document.querySelector('.dummy2'), 
document.querySelector('.dummy3'), 
]
targets.forEach(target=>
    observer.observe(target))
