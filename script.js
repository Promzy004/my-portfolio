const navlinks = document.querySelectorAll('.nav-link');
const linkBorder = document.querySelectorAll('.link-border');
const toggler = document.querySelector('.toggler');
const links = document.querySelector('.links');
const skill_ranges = document.querySelectorAll('.range');
const contact_alert_trigger = document.querySelector('.contact-header');
const contact_alert = document.getElementById('contact-alert')
const cancel_alert = document.querySelector('.contact-alert-cancel')

const pageId = document.body.className;

//  1.                                javascript for all pages with similar javascript

//                                  hamburger toggler that display nav links when clicked


toggler.addEventListener('click', function(e) {
        toggler.classList.toggle('new-toggler')
        links.classList.toggle('show')
})

//                                   Effects that take place on nav links when been clicked

const html = document.getElementById('html')
navlinks.forEach((navlink, index) => {
    if (window.innerWidth > 610) {
        navlink.addEventListener('click', (e) => {
            // Remove "active" class from all nav links
            navlinks.forEach(link => link.classList.remove('active'));

            // Add "active" class to the clicked nav link
            navlink.classList.add('active');

            // Update the corresponding linkBorder
            linkBorder.forEach(border => (border.style.display = 'none')); // Hide all borders
            linkBorder[index].style.display = 'flex'; // Show only the clicked border
        });
        html.addEventListener('wheel', () => {
            navlinks.forEach(link => link.classList.remove('active'));
            linkBorder.forEach(border => (border.style.display = 'none'));
        })
    } else {
        navlink.addEventListener('click', (e) => {
            toggler.classList.remove('new-toggler')
            links.classList.remove('show')
        });
    }


});


//                                  Button that scrolls to top when clicked

const scroll_to_top = document.getElementById('scroll-to-top');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 130) {
        scroll_to_top.style.display = 'block'
    } else {
        scroll_to_top.style.display = 'none'
    }
})

scroll_to_top.addEventListener('click', (e) => {
    scroll_to_top.style.backgroundColor = 'red;'
    window.scrollTo({
        top: 0
    })
})



//  2.                                     javacript for home page only


if (pageId == 'home') {

  //                           observes the skills section so as to animate the range when the section is in view
        
        
        const skill_observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate')
                }
            })
        })
        
        skill_ranges.forEach(range => {
            skill_observer.observe(range)
        })
        
        
        //                              observes the contact section so as to send an alert pop up
        
        
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             contact_alert.style.display = 'flex';
        //         }
        //     })
        // })
        // observer.observe(contact_alert_trigger)
        
        
        
        //                              cancels the alert pop up when clicked
        
        // cancel_alert.addEventListener('click', (e) => {
        //     contact_alert.style.display = 'none'
        //     observer.disconnect();
        // })
        
        // cancel_alert.addEventListener('mouseover', () => {
        //     cancel_alert.style.cursor = 'pointer'
        // })

}    


window.onload = function() {
    const notification = document.getElementById('notification')
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_0v1d41j', 'template_q1os906', this)
            .then(() => {
                notification.style.display = 'block'
                setTimeout(() => {
                    notification.style.display = 'none'
                },2000)
                this.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });

    });
}

