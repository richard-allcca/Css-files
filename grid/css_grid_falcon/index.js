const d = document,
   $contenedorMaps = d.querySelector(".contenedor-maps");

/* creando elementos */
const $iframe = d.createElement("iframe"),
   $linkMaps = d.createElement("a");


function myFunction(x) {
   if (x.matches) {

      document.body.style.backgroundColor = "yellow";
      $linkMaps.setAttribute("href", "https://goo.gl/maps/EU8TtSh4iLh4HhnD9");
      $linkMaps.textContent = "entra aqui"

      // $iframe.
      $contenedorMaps.appendChild($linkMaps);
   } else {
      $iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15480.90705468285!2d-75.72779213752717!3d-14.063782542067809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2bdb02af083%3A0xf459f8f69b351df!2sPlaza%20de%20Armas%20de%20Ica!5e0!3m2!1ses!2spe!4v1596844990169!5m2!1ses!2spe");
      $iframe.setAttribute("frameborder", "0")
      $iframe.setAttribute("allowfullscreen", "")
      $iframe.setAttribute("aria-hidden", "false")
      $iframe.setAttribute("tabindex", "0")
      $iframe.classList.add("iframe-maps")
      $contenedorMaps.appendChild($iframe)

      document.body.style.backgroundColor = "aqua";
      $contenedorMaps.removeChild($linkMaps)
   }
}

let x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction)


