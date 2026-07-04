# 🏨 API ESTUDANTES — Express.js

Tarea en Express sobre configuración del entorno backend con Node.js/npm y 
construcción del primer servidor con Express.js que responde peticiones HTTP.

---

## 📋 Tabla de Contenidos
- [Descripción General](#-descripción-general)
- [Comandos de trabajo](#-comandos-trabajo)
- [Tecnologías](#-tecnologías)
- [Componentes del trabajo](#-componentes-trabajo)

  
---

## 📌 Descripción General

Construir un servidor Express.js que gestione una lista de estudiantes 
almacenada en un array de JavaScript (datos quemados, sin base de datos). 
El servidor debe responder correctamente a peticiones GET, POST, PUT y DELETE, 
devolviendo siempre JSON con el código de estado HTTP apropiado.

---

## 🗂️ Comandos de trabajo en Express
Uso de comandos para manipulación de datos quemados de un arreglo:

| Comandos | Descripción |
|---|---|
|GET all: |Sirvirá para recuperar una lista completa de recursos (como id, nombre, edad y correo) desde el servidor. Se implementa usando el método app.get() o un enrutador (router.get()), definiendo la ruta y una función de callback que devuelve los datos. |
|GET by id:| sirve para obtener un registro específico. Para lograrlo, se definen rutas con parámetros (req.params) y se captura el identificador dinámico de la URL. |
|POST:| Permite enviar datos desde el cliente (como formularios o JSON) al servidor para ser procesados o guardados. Para leer estos datos correctamente, debes utilizar el middleware.|
|PUT:| Su propósito principal es actualizar o reemplazar por completo un recurso existente en el servidor.| 
|DELETE:| para eliminar recursos específicos del servidor. Por lo general, requiere un parámetro identificador (como un :id) en la URL para saber exactamente qué elemento borrar.|

---

## 🛠️ Tecnologías

| Herramienta | Uso |
|---|---|
| Visual Studio Code | Codificación y pruebas |
| Express | Creación de servidor |
| Github  | Para alojamiento de archivos |


---

## 🗂️ Componentes del trabajo

| Componentes | Descripción |
|---|---|
| Archivo index.js | Actúa como el punto de entrada principal para la API dentro de un proyecto|
| package.json | Funciona como un manual que contiene los metadatos de tu aplicación y una lista exacta de todas las librerías o herramientas de terceros que necesita para funcionar |
| Archivo .gitignore | Archivo de texto plano donde se definen las reglas de qué archivos o carpetas debe ignorar Git. |
| Archivo Readme.md | Documento que describe el proyecto. |

