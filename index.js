// Mencionando el modulo de express para nuestro proyecto
const express = require('express')
 
// creando nuestro objeto central (global) que se utilizara en nuestro proyecto (rutas, funciones, configuraciones)
const app = express()
 
// indicamos que nuestra api tiene un middleware (procesar datos en formato JSON)
app.use(express.json())
 
// simulando una base de datos de estudiantes (CORREGIDA CON SUS COMAS)
const estudiantes = [
    { id: 1, 
        nombre: "Lourdes", 
        apellido: "Osorio",
        edad: 18, 
        correo: "lourdes.osorio@gmail.com",
        telefono: "+503 2256 9876",
        direccion: {
            calle: "San Antonio Abad # 24",
            ciudad: "San Salvador",
            pais: "El Salvador"
        },
        activo: true,
        cursos: ["Programación", "Bases de datos", "Electrónica"],
    },
    { id: 2, 
        nombre: "Andres", 
        apellido: "Melara",
        edad: 17, 
        correo: "andres.melara.122@gmail.com",
        telefono: "+503 2234 5491",
        direccion: {
            calle: "San Sebastian # 53",
            ciudad: "San Salvador",
            pais: "El Salvador"
        },
        activo: true,
        cursos: ["Programación", "Bases de datos", "Diseño web"],
    },
    { id: 3, 
        nombre: "Franco", 
        apellido: "Barrera",
        edad: 18, 
        correo: "franco.barrera@gmail.com",
        telefono: "+503 2245 6789",
        direccion: {
            calle: "Avenida Libertad # 10",
            ciudad: "San Salvador",
            pais: "El Salvador"
        },
        activo: true,
        cursos: ["Programación", "Bases de datos", "Diseño web"],
    }, 

    { id: 4, 
        nombre: "Arianna", 
        apellido: "Castaneda",
        edad: 18, 
        correo: "arianna.castaneda@gmail.com",
        telefono: "+503 2252 2127",
        direccion: {
            calle: "Avenida Lourdes # 130",
            ciudad: "San Salvador",
            pais: "El Salvador"
        },
        activo: true,
        cursos: ["Programación", "Bases de datos", "Auditoria de Sistemas"],
    }, 

    
];
 
// Ruta principal (raíz) de mi API, que devuelve un mensaje de bienvenida
app.get('/', (req, res) => {
    res.send("Bienvenidos a mi API Estudiantes")
})
 
// 1. GET ALL: Obtener todos los estudiantes
app.get('/estudiantes', (req, res) => {
    res.status(200).json(estudiantes)
})

// 2. GET BY ID: Obtener un estudiante específico por su ID
app.get('/estudiantes/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id)
    const estudiante = estudiantes.find(e => e.id === idBuscar)

    if (!estudiante) {
        return res.status(404).json({ mensaje: 'Estudiante con ID ${idBuscar} no encontrado' })
    }

    res.status(200).json(estudiante)
})

// 3. POST: Crear un nuevo estudiante
app.post('/estudiantes', (req, res) => {
    // Generamos un ID autoincremental simple basado en el último ID existente
    const nuevoId = estudiantes.length > 0 ? estudiantes[estudiantes.length - 1].id + 1 : 1
    
    // Extraemos la información enviada en el body de la petición
    const nuevoEstudiante = {
        id: nuevoId,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion || {},
        activo: req.body.activo !== undefined ? req.body.activo : true,
        cursos: req.body.cursos || []
    }

    estudiantes.push(nuevoEstudiante)
    res.status(201).json({ mensaje: "Estudiante creado con éxito", estudiante: nuevoEstudiante })
})

// 4. PUT: Actualizar un estudiante existente completamente o por partes
app.put('/estudiantes/:id', (req, res) => {
    const idActualizar = parseInt(req.params.id)
    const indice = estudiantes.findIndex(e => e.id === idActualizar)

    if (indice === -1) {
        return res.status(404).json({ mensaje: `No se puede actualizar. Estudiante con ID ${idActualizar} no encontrado` })
    }

    // Fusionamos los datos existentes con los nuevos que vienen en el body
    estudiantes[indice] = {
        ...estudiantes[indice], // Mantiene lo que ya tenía si no se envía algo nuevo
        ...req.body,            // Sobrescribe con los nuevos campos del body
        id: idActualizar        // Nos aseguramos de que el ID original no sea alterado
    }

    res.status(200).json({ mensaje: "Estudiante actualizado con éxito", estudiante: estudiantes[indice] })
})

// 5. DELETE: Eliminar un estudiante por su ID
app.delete('/estudiantes/:id', (req, res) => {
    const idEliminar = parseInt(req.params.id)
    const indice = estudiantes.findIndex(e => e.id === idEliminar)

    if (indice === -1) {
        return res.status(404).json({ mensaje: `No se puede eliminar. Estudiante con ID ${idEliminar} no encontrado` })
    }

    // Eliminamos el elemento del array simulado
    const estudianteEliminado = estudiantes.splice(indice, 1)

    res.status(200).json({ mensaje: "Estudiante eliminado con éxito", estudiante: estudianteEliminado[0] })
})

// Por defecto el puerto de express 3000 (Movido al final por buenas prácticas)
app.listen(3000, () => {
    console.log("Hola, este es el servidor http://localhost:3000/")
})

