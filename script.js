const tableData = {
    "Inmunología": [
        ["Inmunología", "LABORATORIO 050 (FONDO)", "existente-SPLIT TCL 6000F", "Reparado y reubicado en Genetica, sala de reuniones", "Inteba"],
        ["Inmunología", "ÁREA DE LAVADO", "existente-SPLIT TCL 6000F", "reparado (cambio de motocompresor) y reubicado en admisión hospital", "Inteba"]
    ]
    // Agrega aquí los datos para las demás secciones según sea necesario
};

function showSection(section) {
    const dynamicContent = document.getElementById("dynamic-content");
    const mainButtons = document.getElementById("main-buttons");

    mainButtons.style.display = "none";
    dynamicContent.style.display = "block";

    if (section === "Pabellón Central") {
        dynamicContent.innerHTML = `
            <div class="buttons-container">
                <button onclick="showSubSection('Planta alta')">Planta alta</button>
                <button onclick="showSubSection('Planta baja')">Planta baja</button>
            </div>
            <button id="back-button" onclick="goBack()">Volver</button>
        `;
    } else {
        const table = createTable(section);
        dynamicContent.innerHTML = `
            <h2>${section}</h2>
            ${table}
            <button id="back-button" onclick="goBack()">Volver</button>
        `;
    }
}

function showSubSection(subSection) {
    const dynamicContent = document.getElementById("dynamic-content");

    let buttons = "";
    if (subSection === "Planta alta") {
        buttons = `
            <button onclick="showSection('Decanato')">Decanato</button>
            <button onclick="showSection('Recursos físicos')">Recursos físicos</button>
            <button onclick="showSection('Secretaría Académica')">Secretaría Académica</button>
            <button onclick="showSection('Secretaría de Bienestar Estudiantil')">Secretaría de Bienestar Estudiantil</button>
            <button onclick="showSection('Secretaría de Ciencia y Técnica')">Secretaría de Ciencia y Técnica</button>
            <button onclick="showSection('Secretaría de Extensión')">Secretaría de Extensión</button>
            <button onclick="showSection('Secretaría de Hacienda')">Secretaría de Hacienda</button>
            <button onclick="showSection('Secretaría de Infraestructura y Unidades Productivas')">Secretaría de Infraestructura y Unidades Productivas</button>
            <button onclick="showSection('Vicedecanato')">Vicedecanato</button>
        `;
    } else if (subSection === "Planta baja") {
        buttons = `
            <button onclick="showSection('Alumnos')">Alumnos</button>
            <button onclick="showSection('Consultorio médico')">Consultorio médico</button>
            <button onclick="showSection('Contabilidad')">Contabilidad</button>
            <button onclick="showSection('Contrataciones')">Contrataciones</button>
            <button onclick="showSection('Dosuba')">Dosuba</button>
            <button onclick="showSection('Interna')">Interna</button>
            <button onclick="showSection('Asuntos Jurídicos')">Asuntos Jurídicos</button>
            <button onclick="showSection('Mesa de entradas')">Mesa de entradas</button>
            <button onclick="showSection('Personal')">Personal</button>
            <button onclick="showSection('Red')">Red</button>
            <button onclick="showSection('Servicios generales')">Servicios generales</button>
            <button onclick="showSection('Sistemas')">Sistemas</button>
            <button onclick="showSection('Tesorería')">Tesorería</button>
        `;
    }

    dynamicContent.innerHTML = `
        <div class="buttons-container">${buttons}</div>
        <button id="back-button" onclick="showSection('Pabellón Central')">Volver</button>
    `;
}

function createTable(section) {
    if (!tableData[section]) {
        return `<p>No hay datos disponibles para esta sección.</p>`;
    }

    let rows = tableData[section].map(row => 
        `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
    ).join("");

    return `
        <table>
            <thead>
                <tr>
                    <th>CÁTEDRA</th>
                    <th>UBICACIÓN</th>
                    <th>EQUIPO</th>
                    <th>ESTADO</th>
                    <th>EMPRESA</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function goBack() {
    const dynamicContent = document.getElementById("dynamic-content");
    const mainButtons = document.getElementById("main-buttons");

    dynamicContent.style.display = "none";
    mainButtons.style.display = "flex";
}
