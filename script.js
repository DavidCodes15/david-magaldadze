function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_o4hi97o", "template_ijd7yjo", params).then(function (res) {
        console.log("success");
    })
}

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}; 
const appearOnScroll = new IntersectionObserver(function(
entries, 
appearOnScroll

) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageArea = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form');
const nameError = document.querySelector('nameError');
const thankYou = document.getElementById('thank-you');
const banner  = document.getElementById('banner');
let isFormValid = false;
let isAreaValid = false;
const isValidEmail = (email) => {
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
};
let isValidationON = false;
const resetElm = (elm) => {
    elm.classList.remove("border-red-400");
    elm.classList.add("border-blue-800");
   elm.nextElementSibling.classList.add("hidden");
}


const invalidateElm = (elm) => {
    elm.nextElementSibling.classList.remove("hidden");
    elm.classList.remove("border-blue-800");
    elm.classList.add("border-red-400");
}
const validateInput = () => {
    if(!isValidationON) return;
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput);
    if(!nameInput.value){
       
        isFormValid = false;
        invalidateElm(nameInput);
    }
    if(!isValidEmail(emailInput.value)){
       
        isFormValid = false;
        invalidateElm(emailInput);
    }
};
const validateArea = () => {
    messageArea.classList.remove("border-red-400");
    messageArea.classList.add("border-blue-800");
    messageArea.nextElementSibling.classList.add("hidden");
    isAreaValid = true;
    if(!messageArea.value){
        messageArea.nextElementSibling.classList.remove("hidden");
        messageArea.classList.add("border-red-400");
        isAreaValid = false;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationON = true;
    validateInput();
    validateArea();
    if(isFormValid){
        form.remove();
        banner.remove(); 
        thankYou.classList.remove("hidden");
        setTimeout(() => {
            document.location.reload();
          }, 3000);
    }
});
nameInput.addEventListener('input', () => {
    validateInput();
   
});
messageArea.addEventListener('input', () => {
    validateArea();
});
emailInput.addEventListener('input', () => {
    validateInput();
});

