// const contactForm = document.getElementById("contact-form");
// const contactStatus = document.getElementById("contact-status");
// const MESSAGES_KEY = "travelmart_messages";

// function setContactStatus(text, type) {
//     contactStatus.textContent = text;
//     contactStatus.className = "form-status " + type;
// }

// if (contactForm) {
//     contactForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         const name = document.getElementById("contact-name").value.trim();
//         const email = document.getElementById("contact-email").value.trim();
//         const subject = document.getElementById("contact-subject").value.trim();
//         const message = document.getElementById("contact-message").value.trim();

//         if (!name || !email || !subject || !message) {
//             setContactStatus("Please fill in all the fields.", "error");
//             return;
//         }

//         const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//         if (!emailOk) {
//             setContactStatus("Please enter a valid email address.", "error");
//             return;
//         }

//         if (message.length < 10) {
//             setContactStatus("Message should be at least 10 characters long.", "error");
//             return;
//         }

//         // Backend nahi hai, isliye demo ke liye browser me save kar rahe hain
//         let saved = [];
//         try {
//             saved = JSON.parse(localStorage.getItem(MESSAGES_KEY)) || [];
//         } catch (error) {
//             saved = [];
//         }
//         saved.push({ name: name, email: email, subject: subject, message: message, date: new Date().toISOString() });
//         localStorage.setItem(MESSAGES_KEY, JSON.stringify(saved));

//         contactForm.reset();
//         setContactStatus("", "");
//         showCartToast("Message sent. We will get back to you soon.");
//     });
// }



const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const MESSAGES_KEY = "travelmart_messages";

function setContactStatus(text, type) {
    contactStatus.textContent = text;
    contactStatus.className = "form-status " + type;
}

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !subject || !message) {
            setContactStatus("Please fill in all the fields.", "error");
            return;
        }

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            setContactStatus("Please enter a valid email address.", "error");
            return;
        }

        if (message.length < 10) {
            setContactStatus("Message should be at least 10 characters long.", "error");
            return;
        }

        // Backend nahi hai, isliye demo ke liye browser me save kar rahe hain
        let saved = [];
        try {
            saved = JSON.parse(localStorage.getItem(MESSAGES_KEY)) || [];
        } catch (error) {
            saved = [];
        }
        saved.push({ name: name, email: email, subject: subject, message: message, date: new Date().toISOString() });
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(saved));

        contactForm.reset();
        setContactStatus("", "");
        showCartToast("Message sent. We will get back to you soon.");
    });
}