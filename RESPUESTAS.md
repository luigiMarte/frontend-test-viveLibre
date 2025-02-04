# RESPUESTAS Y errores corregidos

## 1- error al ajecutar npm run serve:

Al ejecutar por primera vez npm run serve la consola develve el siguiente error :
ERROR Failed to compile with 1 error 15:51:24
Module not found: Can't resolve '@popperjs/core
error in ./node_modules/bootstrap/dist/js/bootstrap.esm.j

### solucion

Instlar la dependencia que falta con : npm install @popperjs/core

## PREGUNTA NUM 1 : Implementación de Login

- Creación de la carpeta "services" para gestionar desde ahi las llamadas a la API con dos archivos:

  - api.js → Configuración global de Axios.
  - authService.js → Manejo de peticiones de autenticación (login, logout, y demás metodos que se necesiten).

- En la vista de "Login.vue":
  - Importamos el servicio y le pasamos al metodo "userLogin" el user y la password que hemos obtenido del formulario.
  - Llamamos a la API para obtener el token con el siguiente useario: "johnd" y la siguiente password: "m38rmF$" (obtenidos de la documentacion de la api)
  - Luego guardamos el token en el sessionStorage para que se borre al finlizar la sesión.
  - Hacemos una validación del formulario con la librería "vee-validate".
    - validamos que se rellenen ambos inputs y que la password sea mayor de 6 caracteres.
    - desabilitamos el botón de enviar formulario por defecto. Se habilita al pasar las validaciones.
    - Se ha corregido el spinner del botón para que se muestre mientras se hace la llamada.
  - Se utiliza try/catch para gestionar las llamadas a la API de forma asyncrona
  - Se incluye un sistema de notificaciones (toasts) para indicar cuando se hace login correctamente o cuando hay algún fallo al hacer login.
  - Una vez hecho el login se redirige al usuario a la siguiente vista, que es la "home"
  - Se ha implementado un sistema de "navigation guards" en el router para que se compruebe si existe el token antes de acceder a la vista "home"

## PREGUNTA NUM 2 : Funcionalidad de Productos Favoritos

### ProductsList.vue

- Se estaba usando created y mounted para llamar a fetch. Sobra uno de ellos. en este caso no quedamos con created() para que no se renderice el DOM antes de obtener los datos.
- Se refactoriza la función toggleProductFavorite de la siguiente forma:
  - Se cambia var por let o const para controlar mejor el scope de la variables.
  - output.push esta mal, agrega funciones en lugar de objetos al array.No se detectan por tanto cambios en productData.favorite
  - String(productSelectedId) no es necesario pues product.id y productSelected son numeros.
  - Simplificamos la función, no hace falta pasarle "products" como parámetro, pues ya tenemos acceso a products en "this.products".
  - Se elimina el for y se usa filter para guardar en un array dentro de Data() los id de los producto seleccionados.Teniendo un id no es necesario guardar todo el poducto.
  - Se añade un botón para hacer logout que redirija al login y finalice la sesión. (se elimina el token)

### ### ProductCard.vue

- Faltaba onclick en el icono del product card para lanzar el emit.
- Se ha añadido una clase dinámica para que el corazón sea rojo cuando se selecciona el producto , al hacer click en el corazon. Funciona como un toggle. Pasa de gris a rojo según este o no seleccionado.
- He añadido una variable "productSelected" en el modelo de datos local de la vista para gestionar el estado del icono.
