




class Table extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });
    this.template = document.createElement('template');
    // SETTING ATRIBUTES
    this.template.innerHTML = `

		<!DOCTYPE html>
		<html lang="en">
		  <head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>HTML 5 Boilerplate</title>
			<link rel="stylesheet" href="style.css">
		  </head>
		  <body>
				<center><h1>ESTE ES EL TEMPLATE</h1></center>
		  </body>
		</html>

            `;
    this._root.appendChild(this.template.content.cloneNode(true));
  }


  static get observedAttributes() {
    return [''];
  }



  connectedCallback() {
}
}



// COMPONENTS
customElements.define('un-componente', Table);
