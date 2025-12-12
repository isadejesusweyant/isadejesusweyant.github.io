const resources = [
    // Recursos que ya tenias revisados solo le e puesto la direccion
    {
        name: "York County Food Bank",
        category: "Food",
        description: "Central hub fighting hunger in York County, PA, by collecting and distributing food to over 125 partner agencies and running its own public drive-thru distributions, mobile pantry, and senior programs",
        address: "254 W. Princess St., York, PA 17401"
    },
    {
        name: "Catholic Harvest Pantry",
        category: "Food",
        description: "Large, volunteer-run non-profit providing emergency food and hygiene supplies (like soap, diapers) to York County residents",
        address: "628 E. Market St., York, PA 17403"
    },
    {
        name: "Healthy Community Network",
        category: "Health",
        description: "Collaborative effort by healthcare providers, social services, and community groups to improve local well-being by addressing social determinants of health like food, housing, and access to care, especially for vulnerable populations, connecting people with resources, and coordinating efforts to build healthier environments",
        address: "116 S. George St., York, PA 17401"
    },
    {
        name: "Access York, Inc.",
        category: "Health",
        description: "A program of YWCA York that provides free, confidential support for victims of domestic violence, sexual assault, and human trafficking in York County, PA, offering a 24-hour hotline",
        address: "P.O. Box 30, York, PA 17405"
    },
    {
        name: "York County Council of Churches",
        category: "Food",
        description: "supports food assistance through the York County Food Bank, offering free, healthy food via drive-thru pantries, mobile distributions, and partners (pantries, kitchens) for those in need, focusing on basic rights and nutritious meals",
        address: "595 W. Market St., York, PA 17401"
    },

    // Recursos nuevos que agregue para completar los 20 ya con la direccion verificada
    {
        name: "Emanuel Church of God",
        category: "Food",
        description: "Falta mi Descripcion",
        address: "825 E. Princess St., York, PA 17403"
    },
    {
        name: "Salvation Army",
        category: "Food",
        description: "Falta mi Descripcion",
        address: "50 E. King St., York, PA 17401"
    },
    {
        name: "Family First Health",
        category: "Health",
        description: "Falta mi Descripcion",
        address: "116 S. George St., York, PA 17401"
    },
    {
        name: "WellSpan Health",
        category: "Health",
        description: "Falta mi Descripcion",
        address: "1001 S. George St., York, PA 17403"
    },
    {
        name: "York Hospital Community Health Center",
        category: "Health",
        description: "Falta mi Descripcion",
        address: "605 S. George St., York, PA 17403"
    },
    {
        name: "PA 211",
        category: "Education",
        description: "Falta mi Descripcion",
        address: "Statewide service - Available 24/7"
    },
    {
        name: "Lincoln Intermediate Unit No. 12 (LIU 12)",
        category: "Education",
        description: "Falta mi Descripcion",
        address: "300 E. 7th Ave., York, PA 17404"
    },
    {
        name: "York County Literacy Council",
        category: "Education",
        description: "Falta mi Descripcion",
        address: "800 E. King St., York, PA 17403"
    },
    {
        name: "York Habitat for Humanity",
        category: "Housing",
        description: "Falta mi Descripcion",
        address: "33 S. Steward St., York, PA 17404"
    },
    {
        name: "YWCA York (Emergency Shelter)",
        category: "Housing",
        description: "Falta mi Descripcion",
        address: "320 E. Market St., York, PA 17403"
    },
    {
        name: "Bell Bridge Housing Program",
        category: "Housing",
        description: "Falta mi Descripcion",
        address: "852 E. Market St., York, PA 17403"
    },
    {
        name: "TrueNorth Wellness Services",
        category: "Mental Health",
        description: "Falta mi Descripcion",
        address: "1195 Roosevelt Ave., York, PA 17404"
    },
    {
        name: "Crisis Intervention - York Hospital",
        category: "Mental Health",
        description: "Falta mi Descripcion",
        address: "1001 S. George St., York, PA 17403"
    },
    {
        name: "PA Career Link",
        category: "Employment",
        description: "Falta mi Descripcion",
        address: "841 Vogelsong Rd., York, PA 17404"
    },
    {
        name: "Crispus Attucks",
        category: "Employment",
        description: "Falta mi Descripcion",
        address: "605 S. Duke St., York, PA 17401"
    }
];


// Esta fue la unica linea que agregue en esta parte 
// <p>Address: ${r.address}</p> que es para que agregue la direccion

function displayResources(resources) {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = ''; // Clear existing content

    for (let i = 0; i < resources.length; i++) {
        const r = resources[i];
        resourceList.innerHTML += `
            <div class="resource-card">
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

        // categoría
        if (selectedCategory !== 'All' && r.category !== selectedCategory) {
            continue; // salta si no coincide
        }

        // búsqueda
        if (searchText === "" || 
            r.name.toLowerCase().includes(searchText) ||
            r.description.toLowerCase().includes(searchText) ||
            r.address.toLowerCase().includes(searchText)) {
            filteredResources.push(r); // agrega
        }
    }

    // mostrar
    displayResources(filteredResources);
}

// eventos
document.getElementById('searchInput').addEventListener('input', filterResources);
document.getElementById('categorySelect').addEventListener('change', filterResources);

// inicio
displayResources(resources);

