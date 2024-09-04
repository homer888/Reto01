       // Datos de ejemplo
       const experiencias = [
        { puesto: "Program Manager", empresa: "Walmart Chile", periodo: "2022 - 2024", descripcion: "Implementar iniciativas estratégicas Code Yellow, MFC, MixModel." },
        { puesto: "Latam Release and Configuration Manager", empresa: "DirecTv Latam", periodo: "2021 - 2022", descripcion: "Migrar a la nube Oracle-Virginia los aplicativos de los países de DirecTv en Latinoamérica." }
    ];

    const educacion = [
        { titulo: "Ingeniero en Automatización Industrial", institucion: "Universidad Antonio Nariño", año: "2005 - 2010" },
        { titulo: "Especialización en Gerencia de Proyectos en Telecomunicaciones", institucion: "Universidad Politécnico Grancolombiano", año: "2008-2010" }
    ];

    // Función para añadir experiencias
    function añadirExperiencias() {
        const listaExperiencia = document.getElementById('lista-experiencia');
        experiencias.forEach(exp => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                            ${exp.periodo}<br>
                            ${exp.descripcion}`;
            listaExperiencia.appendChild(li);
        });
    }

    // Función para añadir educación
    function añadirEducacion() {
        const listaEducacion = document.getElementById('lista-educacion');
        educacion.forEach(edu => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${edu.titulo}</strong><br>
                            ${edu.institucion}, ${edu.año}`;
            listaEducacion.appendChild(li);
        });
    }