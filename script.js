const resources = [{
    name: "NOMBRE DEL RECURSO",
    category: "food",
    description: "DESCRIPCION DEL RECURSO",
},{
    name: "NOMBRE DEL RECURSO",
    category: "education",
    description: "DESCRIPCION DEL RECURSO",
},{
    name: "NOMBRE DEL RECURSO",
    category: "health",
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