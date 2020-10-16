---
title: Posicionamiento con css
description: Propiedad position en css y sus usos.
# img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
img: https://cdn.pixabay.com/photo/2016/11/04/13/31/css-1797778_960_720.jpg
alt: nice image
author: 
  name: Nacho
  bio: Para que nos conozcamos un poco mejor ... 
  img: /yo.jpg
tags: 
  - CSS
---

## Position 
<br>
La propiedad positions nos ayuda a posicionar un elemento en el documento html y admite los siguientes valores:

- **static**:  es el valor por defecto
- **relative**: el elemento de desplaza respecto a su posicion normal, el resto de elementos continuan es su posicion ignorando al que se desplaza.
- **absolute**: el elemento de desplaza respecto al primer elemento contenedor posicionado, dejando su espacio para que sea ocupado por el restro de elementos del docimento.
- **fixed**: permite fijar un elemento respeco al primer elemento contenedor posicionado, el elemento no se desplazara unque se haga scroll en la ventana.

Para indicar la posecion del elemento con la propiedad position se utilizan las propiedades:

- **top**: posicionamieto respecto a la parte superior.
- **bottom**: posicionamieto respecto a la parte inferior.
- **left**: posicionamieto respecto a la izquierda.
- **right**: posicionamieto respecto a la derecha.

Si top y bottom estan especificados a la vez top gana sobre bottom y si el conflicto es entre left y right left gana cuanfo el contenido es ltf (español, ingles...) y raight cuando el contenido es rtl (arabe, persa...) 

Vista la teoria basica veamos unos ejemlos. 

<iframe
  src="https://codepen.io/nachorv/pen/qBNbbGV"
  style="width:100%; height:300px;"
></iframe>
