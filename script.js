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

    
const resourceList = document.getElementById('resourceList');
resourceList.innerHTML = resources;