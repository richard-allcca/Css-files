# inicio

1. diferencia entre SCSS y  SASS
   -> en SASS no necesitas usar punto y coma al final 
   -> en SASS no necesitas llaves solo tabulaciones
   -> en SCSS puedes declarar estilos para elementos hijos dentro de los estilos padre

2. variables
   se declaran con $ como en PHP 

3. funciones
   @mixin nameFunction ($x, $y, $border-radius, $background-color) {
      -> asignamos los valores de parametros a propiedades css.
      whidth: $x;
      heigth: $y;
      back-ground-color: $background-color;
   }
   -> para usar las variables @include nameFunction(valor1,valor2);

4. Condicionales
   @if $variable == $variable2{
     ejecucion con funcion si necesitas
   }
   @else if $variable == $variable3{
     ejecucion 2
   }
   $else{
     ejecucion 3
   }

5. bucles
   @for i from 1 through 12{ //este bucle con THROUGH se repite hasta 12 e incluye el 12
     ejecucion
   }
   @for i from 1 to 12{ //este bucle con TO se repite hasta 12 y NO incluye el 12
     ejecucion
   }
## link de la clase
  `https://www.youtube.com/watch?v=4lb_IC9nmA0&t=1676s`

## compilación Sass
  - ubicate en la carpeta del proyecto
  - ejecuta el siguiente comando de escucha de cambios
  - sass --watch carpeta/archivo.scss carpetaCompilada/style.css  

## compilación Comprimida
  - sass estilos.scss css/estilos.css --style=compressed
  `https://www.youtube.com/watch?v=MO1q4xMtZMg&t=0s`