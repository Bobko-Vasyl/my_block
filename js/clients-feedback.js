(function() {
    const clients = [
        {
            title: "Jessica Peterson",
            Image: "img/jessica_photo.webp",
            Text: "This is great honey, 100% natural! It is not the first time I order honey from this company, and every time I know that I will get delicious, high-quality, not crystallized honey.",
            Date: "October 28, 2020",
        },
        {
            title: "Dean Nillstrom",
            Image: "img/dean_photo.webp",
            Text: "Nowadays it is not so easy to find really good, tasty, and natural honey. I first tried the HoneyBee honey several years ago, and since then I have been a regular customer of this producer.",
            Date: "February 12, 2021",
        },
        {
            title: "Diana Fergusson",
            Image: "img/diana_photo.webp",
            Text: "Having tasted this honey once, I no longer needed alternatives. This is the tastiest honey I've ever tried! I buy different types of honey, from clover to buckwheat.Each jar of honey is a real triumph of taste.",
            Date: "April 18, 2021",
        },
    ];

    function renderSlide(clients) {
        return <div class="clients">
            <img class="clients_photo" src="${clients.image}" alt="${clients.title}">
            <h3 class="client_name">${clients.title}</h3>
            <p class="client_feedback">${clients.Text}</p>
            <p class="date">${clients.Date}</p>
            </div> ;
    }

   let currentSlide = 0;
   function renderClients() {
       const clientsContainer= document.querySelector(".clients_feedback-carousel__slide");
       clientsContainer.innerHTML = renderSlide(clients[currentSlide]);
       if (window.innerWidth > 600) {
           const secondSlide =
           currentSlide + 1 >= clients.length ? 0 : currentSlide + 1;
           clientsContainer.innerHTML += renderSlide(clients[secondSlide]);

           if (window.innerWidth > 900) {
               const thirdSlide =
               secondSlide + 1 >= clients.length ? 0 : secondSlide + 1;
               clientsContainer.innerHTML += renderSlide(clients[thirdSlide]);
           }
       }
   } 

   function nextSlide() {
       currentSlide = currentSlide +1 >= clients.length ? 0 : currentSlide + 1;
       renderClients();
   }

   renderClients(clients);

   function prevSlide() {
       currentSlide = currentSlide - 1 <= 0 ? clients.length - 1 : currentSlide - 1;
       renderClients();
   }

   document.querySelector('.clients_feedback-carousel__button.forward').addEventListener('click', nextSlide);
   document.querySelector('.clients_feedback-carousel__button.back').addEventListener('click', prevSlide);
   window.addEventListener('resize', renderClients);
})();