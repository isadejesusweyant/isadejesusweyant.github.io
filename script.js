const resources = [
    // Recursos que ya tenias revisados solo le e puesto la direccion
    {
        name: "York County Food Bank",
        category: "Food",
        description: "Central hub fighting hunger in York County, PA, by collecting and distributing food to over 125 partner agencies and running its own public drive-thru distributions, mobile pantry, and senior programs.",
        address: "254 W. Princess St., York, PA 17401",
        link: "https://yorkfoodbank.org/"
    },
    {
        name: "Catholic Harvest Pantry",
        category: "Food",
        description: "Large, volunteer-run non-profit providing emergency food and hygiene supplies (like soap, diapers) to York County residents.",
        address: "628 E. Market St., York, PA 17403",
        link: "https://www.catholicharvest.org/"
    },
    {
        name: "Healthy Community Network",
        category: "Health",
        description: "Collaborative effort by healthcare providers, social services, and community groups to improve local well-being by addressing social determinants of health like food, housing, and access to care, especially for vulnerable populations.",
        address: "116 S. George St., York, PA 17401",
        link: "https://healthycommunitynetwork.net/"
    },
    {
        name: "Access York, Inc.",
        category: "Health",
        description: "A program of YWCA York that provides free, confidential support for victims of domestic violence, sexual assault, and human trafficking in York County, PA, offering a 24-hour hotline.",
        address: "P.O. Box 30, York, PA 17405",
        link: "https://ywcayork.org/victim-services/"
    },
    {
        name: "York County Council of Churches",
        category: "Food",
        description: "Supports food assistance through the York County Food Bank, offering free, healthy food via drive-thru pantries, mobile distributions, and partners (pantries, kitchens) for those in need, focusing on basic rights and nutritious meals.",
        address: "595 W. Market St., York, PA 17401",
        link: "https://www.facebook.com/p/York-County-Council-of-Churches-100069808920776/"
    },

    // Recursos nuevos que agregue para completar los 20 ya con la direccion verificada
    {
        name: "Emanuel Church of God",
        category: "Food",
        description: "Offers a vital community food pantry, providing free, nutritious groceries like fresh produce, meat, and shelf-stable items to families in need, alleviating stress and demonstrating love in action through dedicated volunteers.",
        address: "825 E. Princess St., York, PA 17403",
        link: "https://www.emanuelcogic.org/"
    },
    {
        name: "Salvation Army",
        category: "Food",
        description: "A global Christian church and charity, founded in London in 1865, known for its military-style structure and mission to preach the gospel while meeting human needs without discrimination, offering services like disaster relief, food pantries, shelters, addiction recovery, and holiday assistance.",
        address: "50 E. King St., York, PA 17401",
        link: "https://www.salvationarmyusa.org/"
    },
    {
        name: "Family First Health",
        category: "Health",
        description: "A non-profit, federally qualified health center in Pennsylvania, providing accessible, team-based, patient-centered care focusing on wellness, prevention, and integrated medical, dental, behavioral health, and substance use services for underserved communities.",
        address: "116 S. George St., York, PA 17401",
        link: "https://www.familyfirsthealth.org/"
    },
    {
        name: "WellSpan Health",
        category: "Health",
        description: "A large, integrated non-profit health system serving Central Pennsylvania and Northern Maryland, known for providing comprehensive care through its hospitals, physician groups, behavioral health services, and home health across many locations.",
        address: "1001 S. George St., York, PA 17403",
        link: "https://www.wellspan.org/"
    },
    {
        name: "York Hospital Community Health Center",
        category: "Health",
        description: "Part of WellSpan Health, provides comprehensive, patient-centered primary care for families, including pediatrics, women's health, and adult medicine.",
        address: "605 S. George St., York, PA 17403",
        link: "https://www.wellspan.org/Locations/wellspan-community-health-center-LOC0000196864"
    },
    {
        name: "PA 211",
        category: "Education",
        description: "Pennsylvania's free, 24/7 information and referral service connecting residents to essential health and human services, including education resources like Head Start, childcare, after-school programs, school supplies, digital literacy training, and adult education.",
        address: "Statewide service - Available 24/7",
        link: "https://www.pa211.org/"
    },
    {
        name: "Lincoln Intermediate Unit No. 12 (LIU 12)",
        category: "Education",
        description: "Provides essential educational support, services, and innovative solutions for K-12 public/nonpublic schools, families, and communities in Adams, Franklin, and York Counties, Pennsylvania.",
        address: "300 E. 7th Ave., York, PA 17404",
        link: "https://www.iu12.org/"
    },
    {
        name: "York County Literacy Council",
        category: "Education",
        description: "Provides free adult education in York County, PA, focusing on English literacy, math, computer skills, and GED prep through classes and tutoring for English speakers and ESL learners.",
        address: "800 E. King St., York, PA 17403",
        link: "https://www.yorkliteracyinstitute.org/"
    },
    {
        name: "York Habitat for Humanity",
        category: "Housing",
        description: "A Christian housing ministry, volunteer-driven non-profit building safe, affordable homes in York County, PA, for low-income families.",
        address: "33 S. Steward St., York, PA 17404",
        link: "https://www.yorkhabitat.org/"
    },
    {
        name: "YWCA York (Emergency Shelter)",
        category: "Housing",
        description: "Offers a free, confidential, and safe haven for victims and survivors of domestic violence, sexual assault, and human trafficking, providing immediate refuge for individuals and their children fleeing danger.",
        address: "320 E. Market St., York, PA 17403",
        link: "https://ywcayork.org/"
    },
    {
        name: "Bell Bridge Housing Program",
        category: "Housing",
        description: "Run by Bell Socialization Services in York, PA, offers rehabilitative, transitional housing for up to one year for homeless individuals/families, helping them build skills for independent living through support.",
        address: "852 E. Market St., York, PA 17403",
        link: "https://bellsocialization.com/"
    },
    {
        name: "TrueNorth Wellness Services",
        category: "Mental Health",
        description: "A non-profit, trauma-informed organization in Central PA offering comprehensive behavioral health, mental health, and autism services, including counseling, crisis support, residential care, substance abuse treatment, and prevention programs for all ages.",
        address: "1195 Roosevelt Ave., York, PA 17404",
        link: "https://truenorthwellness.org/"
    },
    {
        name: "Crisis Intervention - York Hospital",
        category: "Mental Health",
        description: "Provides rapid assessment and stabilization for mental health and substance use crises, primarily through the Emergency Department, focusing on immediate needs, risk assessment, and connecting patients to appropriate inpatient, partial programs, or community resources.",
        address: "1001 S. George St., York, PA 17403",
        link: "https://www.wellspan.org/locations/crisis-intervention-wellspan-york-hospital-loc0000168642"
    },
    {
        name: "PA Career Link",
        category: "Employment",
        description: "Pennsylvania's free, statewide one-stop-shop connecting job seekers and employers, offering online tools (like job boards, resume builders) and in-person assistance for career counseling, training funds, interview prep, and finding skilled workers.",
        address: "841 Vogelsong Rd., York, PA 17404",
        link: "https://www.pacareerlink.pa.gov/jponline"
    },
    {
        name: "Crispus Attucks York",
        category: "Employment",
        description: "A long-standing non-profit in York, PA, providing holistic support through housing, education, job training, and senior programs, named after the African American patriot, Crispus Attucks.",
        address: "605 S. Duke St., York, PA 17401",
        link: "https://crispusattucks.org/"
    }
];


// Esta fue la unica linea que agregue en esta parte 
// <p>Address: ${r.address}</p> que es para que agregue la direccion

function displayResources(resources) {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = ''; // limpia el contenido existente

    for (let i = 0; i < resources.length; i++) {
        const r = resources[i];
        resourceList.innerHTML += `
            <div class="resource-card" onclick="location.href='${r.link}';" style="cursor: pointer;">
                <div class="group">
                <h3>${i + 1}. ${r.name}</h3>
                <p>Category: ${r.category}</p>
                <p>${r.description}</p>
                <p>Address: ${r.address}</p>
            </div>
        `;
    }
}
displayResources(resources);

// Obtiene el array donde estan todos los recursos
let allResources = resources;
// Este es el array con los recursos filtrados 
let filteredResources = resources;

function filterResources() {
    let searchText = document.getElementById('searchInput').value.toLowerCase();
    let selectedCategory = document.getElementById('categorySelect').value;

    filteredResources = [];

    for (let i = 0; i < allResources.length; i++) {
        let r = allResources[i];

        // verifica que la categoría coincida
        if (selectedCategory !== 'All' && r.category !== selectedCategory) {
            // lo salta si no coincide
            continue;
        }

        // verifica la búsqueda
        if (searchText === "" ||
            r.name.toLowerCase().includes(searchText) ||
            r.description.toLowerCase().includes(searchText) ||
            r.address.toLowerCase().includes(searchText)) {
            filteredResources.push(r); // agrega el recurso al array
        }
    }

    // muestra los recursos filtrados
    displayResources(filteredResources);
}

// eventos
document.getElementById('searchInput').addEventListener('input', filterResources);
document.getElementById('categorySelect').addEventListener('change', filterResources);

// muestra los recursos
displayResources(resources);

// Código para la página de sugerencias
const submitButton = document.getElementById('submitButton');
const userNameInput = document.getElementById('userName');
const suggestionText = document.getElementById('suggestionText');
const message = document.getElementById('message');

if (submitButton) {  // solo corre si estamos en la página de sugerencias
    submitButton.addEventListener('click', function () {
        const name = userNameInput.value;
        const text = suggestionText.value;

        if (name === '' || text === '') {
            message.textContent = 'Please write your name and suggestion!';
            message.style.color = 'red';
        } else {
            message.textContent = 'Thank you, ' + name + '! Your suggestion was sent.';
            message.style.color = 'lightgreen';

            // limpia los campos de texto
            userNameInput.value = '';
            suggestionText.value = '';
        }
    });
}

