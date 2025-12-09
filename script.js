const resources = [{
    name: "York County Food Bank",
    category: "Food",
    description: "Central hub fighting hunger in York County, PA, by collecting and distributing food to over 125 partner agencies and running its own public drive-thru distributions, mobile pantry, and senior programs",
},{
    name: "Catholic Harvest Pantry",
    category: "Food",
    description: "Large, volunteer-run non-profit providing emergency food and hygiene supplies (like soap, diapers) to York County residents",
},{
    name: "York JCC Family Services",
    category: "Health",
    description: "Holistic community support, offering a food pantry, transportation for seniors, social programs, and connections to broader resources like mental health counseling, aging care, and financial aid for childcare",
},{
    name: "Healthy Community Network",
    category: "Health",
    description: "Collaborative effort by healthcare providers, social services, and community groups to improve local well-being by addressing social determinants of health like food, housing, and access to care, especially for vulnerable populations, connecting people with resources, and coordinating efforts to build healthier environments",
},{
    name: "Access York, Inc.",
    category: "Health",
    description: "A program of YWCA York that provides free, confidential support for victims of domestic violence, sexual assault, and human trafficking in York County, PA, offering a 24-hour hotline",
},{
    name: "New Hope Ministries",
    category: "Food",
    description: "Christian social service agency in Pennsylvania that helps people in poverty and crisis by meeting immediate needs (food, housing, utilities, transport) and fostering long-term stability through education, job training, and youth programs",
},{
    name: "Hanover Area Council of Churches",
    category: "Food",
    description: "Faith-based alliance of local congregations serving the Hanover, PA, community by combating hunger, homelessness, and poverty through ministries like the Provide-A-Lunch program, Changing Lives Homeless Shelter, Meals-On-Wheels and more",
},{
    name: "York County Council of Churches",
    category: "Food",
    description: "supports food assistance through the York County Food Bank, offering free, healthy food via drive-thru pantries, mobile distributions, and partners (pantries, kitchens) for those in need, focusing on basic rights and nutritious meals",
},{
    name: "Access York, Inc.",
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
                <div class="group">
                <h3>${i + 1}. ${r.name}</h3>
                <p>Category: ${r.category}</p>
                <p>${r.description}</p>
            </div>
        `;
    }
}
displayResources(resources);