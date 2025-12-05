const resources = [{
    name: "York County Food Bank",
    category: "Food",
    description: "DESCRIPCION DEL RECURSO",
},{
    name: "PA 211",
    category: "Education",
    description: "DESCRIPCION DEL RECURSO",
},{
    name: "York JCC Family Services",
    category: "Health",
    description: "DESCRIPCION DEL RECURSO",
},{
    name: "Healthy Community Network",
    category: "Health",
    description: "DESCRIPCION DEL RECURSO",
},{
    name: "Access York, Inc.",
    category: "Health",
    description: "DESCRIPCION DEL RECURSO",
}];

function displayResources(resources) {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = ''; // Clear existing content

    for (let i = 0; i < resources.length; i++) {
        const r = resources[i];
        resourceList.innerHTML += `
            <div class="resource-card">
                <h3>${i + 1}. ${r.name}</h3>
                <p>Category: ${r.category}</p>
                <p>${r.description}</p>
            </div>
        `;
    }
}
displayResources(resources);