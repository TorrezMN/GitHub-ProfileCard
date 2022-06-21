import {basic_style, horizontal_style} from './styles.js';
import create_template from './toolkit.js';




class GH_Card extends HTMLElement {
  constructor(props) {
    super();
	this.github_api = `https://api.github.com/users/`;
    this._root = this.attachShadow({ mode: 'closed' });
    this.template = document.createElement('template');
	this.component_config = {
		'user' : null,
		'comp_mode': null,
		'colors': {},
	}
	this.userData = {
		'data': null,
		'fallowers': null,
		'fallowing': null,
		'repos': null,
	};


	this.template_styles = {};
  }


  static get observedAttributes() {
    return [''];
  }



	set_component_config(){

		// SET USER CONFIG
		this.component_config['user'] = this.getAttribute('gh-user');
		// SET MOE CONFIG
		this.component_config['comp_mode'] = this.getAttribute('gh-mode');
		// SET BASE COLOR
		this.component_config['colors']['primary'] = this.getAttribute('gh-primary-color');
		this.component_config['colors']['secondary'] = this.getAttribute('gh-secondary-color');


		// SETING TEMPLATE STYLES
		this.set_template_styles();
	}
	set_template_styles(){
		this.template_styles['normal'] = basic_style(this.component_config['colors']);
		this.template_styles['horizontal'] = horizontal_style(this.component_config['colors']);
	}

	set_template(){
		// Sets the template attribute.
		this.template.innerHTML = create_template(
										this.component_config['comp_mode'],
										this.template_styles[this.component_config['comp_mode']],
										this.component_config['colors']
									);
		this._root.appendChild(this.template.content.cloneNode(true));
	}

	fetchData(){
		let github_profile_url = `https://api.github.com/users/${this.getAttribute('gh-user')}`;
		let fallowers_url = `https://api.github.com/users/${this.getAttribute('gh-user')}/followers`;
		let fallowing_url = `https://api.github.com/users/${this.getAttribute('gh-user')}/following`;
		let repos_url = `https://api.github.com/users/${this.getAttribute('gh-user')}/repos`;

		let urls = [github_profile_url, fallowers_url, fallowing_url, repos_url];

		Promise.all(urls.map(url =>
				fetch(url).then(resp => resp.json())
			)).then(resp => {
				// SET SER PROFILE
				this.userData['data'] = resp[0];
				// SET USER FALLOWERS
				this.userData['fallowers'] = resp[1].length;
				// SET USER FALLOWING
				this.userData['fallowing'] = resp[2].length;
				// SETTING REPOS
				this.userData['repos'] = resp[3];
			}).then(()=>{
				// SETTING COMPONENT CONFIG
				this.set_component_config();
				// SET TEMPLATE
				this.set_template();
				// BUILDING THE CARD
				this.build_card();
			});

	}


	build_card (){

			// SETTING ATTIBUTES
			let avatar_img = this._root.querySelector(".profile_avatar>img");
			let avatar_link = this._root.querySelector(".profile_avatar");
			let foot_icon = this._root.querySelector(".footer_icon");
			let bio = this._root.querySelector('.profile_bio');
			let name = this._root.querySelector('.profile_name');
			let fallowers = this._root.querySelector('.fallowers>.fallowers_count');
			let fallowing = this._root.querySelector('.fallowing>.fallowing_count');
			let repos = this._root.querySelector('.repos>.repos_count');


			// SETTING AVATAR IMAGE
			avatar_img.src = this.userData['data']['avatar_url'];
			avatar_link.href = this.userData['data']['html_url'];
			// SETTING FOOTTER ICON HREF
			foot_icon.href = this.userData['data']['html_url']

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
