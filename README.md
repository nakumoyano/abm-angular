<a name="readme-top"></a>

# ABM - ANGULAR

## Acerca del proyecto

<p>
            El proyecto consta en un
            <strong>ABM (Alta - Baja - Modificación)</strong> de personas. De
            cada persona se sabe el nombre, apellido, edad, fecha de nacimiento,
            país y ciudad. Cuenta con un formulario en el cual se puede dar de
            alta a una persona, es decir, se puede crear una nueva persona con
            sus respectivos datos. Cada campo del formulario esta validado usando    
            <strong>ReactiveFormsModule</strong> para
            que no existan campos vacíos. También se valido que no existan dos países con el mismo nombre.
          </p>
          <p>
            Además del formulario de carga de la persona, existe un formulario
            para cargar países y otro para cargar ciudades, y de esa manera,
            tener una mayor variedad de datos.
          </p>
          <p>
            Una vez que ya hemos cargado nuestra persona, país o ciudad, vamos a
            visualizar estos datos en sus respectivas tablas, en la cual,
            existen 2 botones: uno para editar y otro para borrar. El botón de
            editar, nos permitirá modificar una carga realizada de manera
            errónea. Al tocar este botón, nos redirigirá a un formulario donde
            ya están los datos cargados, de esa manera solo modificamos el campo
            que este mal cargado. Cuando ya hemos realizado los cambios
            necesarios, guardamos y automaticamente nos redirigirá a la tabla
            para observar que el dato a sido modificado correctamente. Por su
            parte, el botón de borrar, nos eliminara permanentemente a la
            persona, pais o ciudad que hemos elegido.
          </p>
          <p>
            Cada vez que realizamos una acción con respecto a un dato, saldra una notificación emergente
            diciendonos si se ha realizado con éxito o si a ocurrido algún
            error al momento de realizar dicha acción. Esta notificación es posible gracias al uso de <strong>Toastr</strong>.
          </p>

## Tecnologías usadas

- [![Angular][angular.io]][angular-url]
- [![Typescript][typescript.com]][typescript-url]
- [![RESTAPI][restapi.com]][restapi-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![CSS3][css3]][css3-url]
- [![HTML5][html.com]][html-url]
- [![NPM][npm.com]][npm-url]
- [![GitHub][github.com]][github-url]
- [![VSCode][vscode.com]][vscode-url]
- [![Toastr][toastr.com]][toastr-url]

[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[css3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css3-url]: https://www.w3schools.com/css/
[html-url]: https://developer.mozilla.org/es/docs/Web/HTML
[html.com]: https://img.shields.io/badge/Html5-orange?style=for-the-badge&logo=html5&logoColor=white
[restapi-url]: https://www.redhat.com/es/topics/api/what-is-a-rest-api
[restapi.com]: https://img.shields.io/badge/RestApi-green?style=for-the-badge&logo=restapi&logoColor=white
[npm-url]: https://www.npmjs.com/
[npm.com]: https://img.shields.io/badge/Npm-red?style=for-the-badge&logo=npm&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[typescript.com]: https://img.shields.io/badge/Typescript-33C4FF?style=for-the-badge&logo=typescript&logoColor=white
[github-url]: https://docs.github.com/es
[github.com]: https://img.shields.io/badge/Github-563D7C?style=for-the-badge&logo=github&logoColor=white
[vscode-url]: https://code.visualstudio.com/
[vscode.com]: https://img.shields.io/badge/vscode-33C4FF?style=for-the-badge&logo=vscode&logoColor=white
[toastr-url]: https://misovirtual.virtual.uniandes.edu.co/codelabs/angular-in-memory/index.html?index=..%2F..index#3
[toastr.com]: https://img.shields.io/badge/Toastr-DD0031?style=for-the-badge&logo=toastr&logoColor=white
