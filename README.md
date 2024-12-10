¡Bienvenido a la prueba técnica! En ViveLibre, trabajamos con un stack tecnológico que abarca Vue.js, Javascript, TypeScript y diversas tecnologías de comunicación en tiempo real como SIP, Asterisk, SSE (Server-Sent Events), y WebSockets. Buscamos un desarrollador frontend con una sólida comprensión de JavaScript y Vue para reforzar nuestro equipo.

La prueba técnica consta de dos partes, y su objetivo es evaluar tus habilidades para trabajar con tecnologías frontend modernas, identificar y corregir errores, y desarrollar soluciones funcionales de manera eficiente.


## Instrucciones

Hemos preparado un [repositorio](https://github.com/desarrollo-vivelibre/frontend-test-2) que contiene un proyecto que simula una parte de una aplicación real. El proyecto tiene algunos errores y funcionalidades incompletas que debes corregir. Deberás hacer un fork del repositorio, trabajar sobre los fallos/requisitos especificados y luego comparte con nosotros en un fichero .zip los cambios con tus soluciones.

### **Parte 1: Implementación de Login**
En esta parte de la prueba, el diseño del login ya está maquetado, pero la funcionalidad aún no está implementada. Tu tarea es:

Implementar la funcionalidad de login:
- Debes conectar el formulario de login con un sistema de autenticación simulado  utilizando una [API externa](https://fakestoreapi.com/).
- Validar el formulario, asegurándote de que los campos requeridos han sido rellenados y los valores de entrada sean correctos (por ejemplo, usuario y contraseña).
- Implementar un sistema de mensajes de error o éxito para notificar al usuario el estado de la autenticación. En caso de que la autenticación sea exitosa, el token debe ser persistido en el navegador.
- Una vez autenticado, redirigir al usuario a una vista principal o dashboard.
- Los estilos actuales son muy básicos, por lo que si lo prefieres, puedes mejorar su apariencia, usabilidad o experiencia de usuario(Esto es totalmente opcional).

### **Parte 2: Funcionalidad de Productos Favoritos**
En la segunda parte de la prueba, se requiere que corrijas un fallo relacionado con la funcionalidad de "productos favoritos". Actualmente, los usuarios pueden marcar productos como favoritos, pero la funcionalidad no está funcionando correctamente.

Revisar y corregir la funcionalidad de favoritos:
El sistema debería permitir a los usuarios seleccionar y deseleccionar productos como favoritos.
Esta funcionalidad contiene algunos problemas. **Explica detalladamente con comentarios la causa de los errores encontrados y como los has solucionado.**

**Pautas de Evaluación**
- Calidad del código: Legibilidad, estructura, y buenas prácticas.
- Resolución de problemas: Habilidad para identificar y corregir errores.
- Funcionalidad completa: Cumplimiento de los requisitos y funcionamiento correcto de las funcionalidades.
- Documentación: Descripción clara de los cambios realizados con comentarios en el código.

**¡Buena suerte y gracias por participar en el proceso de selección!**

### Environment
```
Node V14.20.1
NPM V7.10.0
VueJs 2
Javascript
```

### Prepare for development
```
npm install
npm run serve
```

### External API
https://fakestoreapi.com/

### PAGES
- [" /"] Main - Products List
- [" /login"] Authentication