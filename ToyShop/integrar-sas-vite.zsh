#!/bin/zsh
#
#Script que permite instalar sass en un entorno react+vite y crear un árbol de directorio personalizado

function menu(){
cat << MENU
--- Menu Integracion Scss + Vite ---
Se creara el siguiente arbol de directorios:
	
sass/
        |
        |– utilities/  ## estos añadiran funcionalidad extra para ser empleada por los otros partials.
        |   |– _variables.sass    // Variables
        |   |– _functions.sass    // Funciones
        |   |– _mixins.sass       // Mixins
        |
        |– base/  #codigo base + fuentes generales
        |   |– _reset.sass        // Reset/normalize
        |   |– _fonts.sass   // Tipografías
        | 
        |– components/  # el separar cada componente (botones, sliders, carruseles, tyargetas, etc) nos 
        |               # permite reutilizarlos en cualquier otro proyecto.
        |   |– _boton_modo_oscuro       //boton
        |   |– _carrousel               //carrrusel img
        |   
        |– layout/  #estructura del sitio, (header, main, footer, grids, aside).
        |   |– _navigation.sass   // Navegación
        |   |– _grid.sass         // Grid
        |   |– _header.sass       // Header
        |   |– _footer.sass       // Footer
        |
        |– views/  #las paginas de nuestro proyecto
        |   |– _home.sass         // Estilos de la página de inicio
        |   |– _contact.sass      // Estilos de la página de contacto
        |   |-_faq.scss           // Estilo de la pagina de preguntas frecuentes
        |
        |– themes/  #estilos relacionados con los temas de nu web
        |   |– _theme.sass        // Default theme
        |   |– _admin.sass        // Admin theme
        |
        |– vendors/   #esta no la usaremos
        |   |– _bootstrap.sass    // Bootstrap
        |   |– _jquery-ui.sass    // jQuery UI
        |       
        |– main.sass              // Archivo principal
	
MENU

}

function scssandvite(){

cd ./src/ && sed -i 's/App.css/App.scss/' App.jsx && sed -i 's/index.css/index.scss/' main.jsx  && mkdir scss && cd scss && mkdir utils base components layout views themes && touch utils/{_variables,_funciones,_mixins,_maps}.scss base/{_fonts,_reset}.scss components/{_component1,_component2}.scss layout/{_footer,_hesder,_main}.scss views/{_home,_contacto,_servicio}.scss themes/{_dark,_admin}.scss && mv index.css index.scss && mv App.css App.scss

} 

function warning() {
        START='\033[0;31m' #color rojo para el msj incorrecto
        END='\033[0;00m'  # verde para la confirmacion de 1 a 5
        MESSAGE=${@:-""}
        echo -e "${START}${MESSAGE}${END}"
        sleep 3
}


ops='prueba'

while [ $ops != 'n' ]; do 
	menu
if [ -f ./vite.config.js ]; then

	echo "Desea Continuar: y/n"
	read ops
	case $ops in
		'y') scssandvite 
		if [ $? -eq 0 ];then 
                echo "se completo la operacion"
		else 
		echo "algo salio al"
		fi
			;;
		'n') echo "selecciono NO ... SALIENDO..."
			break
			;;
		*) warning "Esta no es una opcion valida, seleccione s o n"	
			;;
	esac
else 
	echo warning "el archivo vite.config.js no exispe, por lo tanto suponemos que no tiene instalado react+vite. saliendo ..."
	exit
fi

done


