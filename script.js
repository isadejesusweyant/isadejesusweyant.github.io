const resources = [{
    name: "York County Food Bank",
    category: "Food",
    description: "DESCRIPTION OF THE RESOURCE",
},{
    name: "PA 211",
    category: "Education",
    description: "DESCRIPTION OF THE RESOURCE",
},{
    name: "York JCC Family Services",
    category: "Health",
    description: "DESCRIPTION OF THE RESOURCE",
},{
    name: "Healthy Community Network",
    category: "Health",
    description: "DESCRIPTION OF THE RESOURCE",
},{
    name: "Access York, Inc.",
    category: "Health",
    description: "DESCRIPTION OF THE RESOURCE",
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