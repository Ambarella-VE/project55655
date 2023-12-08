# Proyecto CoderHouse Backend 55655

## Clase 2 - Sprint 1

En el código proporcionado:

1. Se define una interfaz `ProductData`, especificando la estructura de los datos esperados para un producto, incluyendo propiedades como title, description, price, thumbnail, code y stock.

2. Se declara una clase `ProductsManager`, que representa un gestor para manejar productos. Incluye propiedades para un producto (title, description, price, thumbnail, code, stock e id), así como un array estático `products` para almacenar instancias de la clase.

3. La clase incluye un constructor, aunque no realiza ninguna acción cuando se crea una instancia.

4. Se implementa un método estático privado `generateId` para generar identificadores únicos para cada producto basándose en la longitud del array `products`. Este método se utiliza para asignar identificadores a los productos durante su creación.

5. El método `addProduct` se define para agregar un nuevo producto al array `products`. Verifica si ya existe un producto con el mismo código y, si no es así, asigna los datos proporcionados a las propiedades de la instancia, genera un ID usando `generateId` y agrega el producto al array.

6. El método `getProducts` recupera el array de productos almacenado en la propiedad `products`.

7. El método `getProductById` toma un ID como parámetro e intenta encontrar un producto con ese ID. Si no lo encuentra, se lanza un error indicando que el producto no se encontró.
