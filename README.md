Midulibritos
Hola Midugente, hice este challenge a modo de práctica y me encontré con un montón de desafíos divertidos y cosas nuevas que aprendí (como el evento de storage), no tuve suficiente tiempo como para darle el amor que se merece así que el resultado es muy limitado.

01 - Desarrollo de una Aplicación de Lista de Libros
El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando las herramientas de tu elección.

Contexto
Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura.

Para ello, queremos desarrollar una aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura. Ten en cuenta que:

No sabemos si el framework que utilicemos ahora será el definitivo, pero querremos reutilizar el máximo de código posible.
La aplicación debe ser fácil de usar y agradable a la vista.
Tenemos un 80% de usuarios que vienen de navegadores de escritorio.
Usa el archivo books.json para obtener los datos de los libros. Puedes añadir más libros si lo deseas, siempre y cuando siga la misma estructura.

Requisitos:

Funcionalidad

✔ Visualización de Libros Disponibles: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

✔ Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

✔ Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

✔ Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

✔ Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

Desafíos adicionales
¿Quieres ir más allá? Estos son algunos desafíos adicionales que puedes intentar:

Implementar una funcionalidad de búsqueda en la lista de libros disponibles.

Añade un nuevo filtro para filtrar los libros por número de páginas.

Permitir la reorganización de los libros en la lista de lectura por prioridad.

✔ Haz que tu diseño sea responsive.
