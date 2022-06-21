import basic_style from './styles.js';




class GH_Card extends HTMLElement {
  constructor(props) {
    super();
	this.github_api = `https://api.github.com/users/`;
    this._root = this.attachShadow({ mode: 'closed' });
    this.template = document.createElement('template');
	this.userData = {
		'data': null,
		'fallowers': null,
		'fallowing': null,
		'repos': null,
	};
    // SETTING ATRIBUTES
    this.template.innerHTML = `
		<html lang="en">
		  <head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<!-- Awesome Fonts -->
                <link
                  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                  rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossorigin="anonymous"
                />
			<style>
				${basic_style}
			</style>
		  </head>
		  <body>
			<div class='gh-card'>
				<div class='gh-card-header'>
					<a class='profile_avatar' href='#'>
						<img src='#' atl='Profile picture.'/>
					</a>
					<p class='profile_name'></p>
					<p class='profile_bio'></p>
				</div>
				<div class='gh-card-content'>
					<div class='profile_stats fallowers'>
						<p>Fallowers</p>
						<p class='fallowers_count'></p>
					</div>
					<div class='profile_stats fallowing'>
						<p>Fallowing</p>
						<p class='fallowing_count'></p>
					</div>
					<div class='profile_stats repos'>
						<p>Repositories</p>
						<p class='repos_count'></p>
					</div>
				</div>
				<div class='gh-card-footer'>
					<i class="fa fa-github-square"></i>
				</div>
			</div>
		  </body>
		</html>

            `;
    this._root.appendChild(this.template.content.cloneNode(true));
  }


  static get observedAttributes() {
    return [''];
  }

	fetchData(){
		let github_profile_url = `https://api.github.com/users/${this.getAttribute('user')}`;
		let fallowers_url = `https://api.github.com/users/${this.getAttribute('user')}/followers`;
		let fallowing_url = `https://api.github.com/users/${this.getAttribute('user')}/following`;
		let repos_url = `https://api.github.com/users/${this.getAttribute('user')}/repos`;


		let urls = [github_profile_url, fallowers_url, fallowing_url, repos_url];


		Promise.all(urls.map(url =>
				fetch(url).then(resp => resp.json())
			)).then(resp => {
				console.log('RESPUESTA !', resp);
				// SET SER PROFILE
				this.userData['data'] = resp[0];
				// SET USER FALLOWERS
				this.userData['fallowers'] = resp[1].length;
				// SET USER FALLOWING
				this.userData['fallowing'] = resp[2].length;
				// SETTING REPOS
				this.userData['repos'] = resp[3];
			}).then(()=>{
				// BUILDING THE CARD
				this.build_card();
			});



	}


	build_card (){

			// SETTING ATTIBUTES
			let avatar_img = this._root.querySelector(".profile_avatar>img");
			let avatar_link = this._root.querySelector(".profile_avatar");
			let bio = this._root.querySelector('.profile_bio');
			let name = this._root.querySelector('.profile_name');
			let fallowers = this._root.querySelector('.fallowers>.fallowers_count');
			let fallowing = this._root.querySelector('.fallowing>.fallowing_count');
			let repos = this._root.querySelector('.repos>.repos_count');


			// SETTING AVATAR IMAGE
			avatar_img.src = this.userData['data']['avatar_url'];
			avatar_link.href = this.userData['data']['html_url'];

			// SETTING THE BIO
			bio.innerHTML = this.userData['data']['bio'];
			name.innerHTML = this.userData['data']['name'];

			// SETTING FALLOWERS
			fallowers.innerHTML = this.userData['fallowers'];

			// SETTING FALLOWING
			fallowing.innerHTML = this.userData['fallowing'];


			// SETTING REPOS COUNT
			repos.innerHTML = this.userData['repos'].length;
	}

  connectedCallback() {

	  // GETTING PROFILE DATA

	  this.fetchData();



	}
}



// COMPONENTS
customElements.define('gh-card', GH_Card);
