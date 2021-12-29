const clients = [
    {
        title: "Jessica Peterson",
        description: "This is great honey, 100% natural! It is not the first time I order honey from this company, and every time I know that I will get delicious, high-quality, not crystallized honey.",
        Image: "img/jessica_photo.webp",
        Date: "October 28, 2020"
    },
    {
        title: "Dean Nillstrom",
        description: "Nowadays it is not so easy to find really good, tasty, and natural honey. I first tried the HoneyBee honey several years ago, and since then I have been a regular customer of this producer.",
        Image: "img/dean_photo.webp",
        Date: "February 12, 2021"
    },
    {
        title: "Diana Fergusson",
        description: "Having tasted this honey once, I no longer needed alternatives. This is the tastiest honey I've ever tried! I buy different types of honey, from clover to buckwheat.Each jar of honey is a real triumph of taste.",
        Image: "img/jessica_photo.webp",
        Date: "April 18, 2021"
    },
];

function renderProducts(products) {
    const productsContainer = document.querySelector('.clients_feedback_show');
    for (const product of products) {
        const productHtml = 
        `<div class="clients">
            <img class="clients_photo" src="img/jessica_photo.webp" alt="jessica_photo_review">
            <h3 class="client_name">Jessica Peterson</h3>
            <p class="client_feedback">"This is great honey, 100% natural! It is not the first time I order
                honey from this company, and every time I know that I will get delicious, high-quality, not
                crystallized honey."</p>
            <p class="date">October 28, 2020</p>
        </div>
        <div class="clients">
            <img class="clients_photo" src="img/dean_photo.webp" alt="dean_photo_review">
            <h3 class="client_name">Dean Nillstrom</h3>
            <p class="client_feedback">"Nowadays it is not so easy to find really good, tasty, and natural
                honey. I first tried the HoneyBee honey several years ago, and since then I have been a
                regular customer of this producer."</p>
            <p class="date">February 12, 2021</p>

        </div>
        <div class="clients">
            <img class="clients_photo" src="img/diana_photo.webp" alt="diana_photo_review">
            <h3 class="client_name">Diana Fergusson</h3>
            <p class="client_feedback">"Having tasted this honey once, I no longer needed alternatives. This
                is the tastiest honey I've ever tried! I buy different types of honey, from clover to
                buckwheat.Each jar of honey is a real triumph of taste."</p>
            <p class="date">April 18, 2021</p>
        </div>
    </div>`
    }
}