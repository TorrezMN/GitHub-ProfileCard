import {basic_style, horizontal_style, horizontal_projects_styles, win_styles} from './styles.js';
import create_template from './template_engine.js';

import {repo_layout} from './layouts.js';



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

	// SET ICON FONTS!
	document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">';



	this.template_styles = {};


  }


  static get observedAttributes() {
    return ['update'];
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
		// SETS THE TEMPLATE STYLES IN THE COMPONENT ATTRIBUTES
		this.template_styles['normal'] = basic_style(this.component_config['colors']);
		this.template_styles['horizontal'] = horizontal_style(this.component_config['colors']);
		this.template_styles['horizontal-projects'] = horizontal_projects_styles(this.component_config['colors']);
		this.template_styles['win'] = win_styles();
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



	get_repo_langs(){
		// Fetch the github api and gets the languages used for each of the repos.
		let url_repos_langs = [];

		// GETTING URLS
		for(let i=0; i<=this.userData['repos'].length; i++){
			// CHECK IF 'UNDEFINED'
			if(typeof this.userData['repos'][i] !== 'undefined'){
				// GET DATA
				fetch(this.userData['repos'][i]['languages_url'])
				  .then(response => response.json())
				  .then((data)=>{
					  let lang_keys = Object.keys(data);

					  if(lang_keys.length>0){
						  this.userData['repos'][i]['lang_keys'] = lang_keys;
					  }


				  });
			}
		}







	}

	fetchData(){
		// Fetch githubs api for basic user data.
		let github_profile_url = `https://api.github.com/users/${this.getAttribute('gh-user')}`;
		let fallowers_url = `https://api.github.com/users/${this.getAttribute('gh-user')}/followers`;
		let fallowing_url = `https://api.github.com/users/${this.getAttribute('gh-user')}/following`;
		let repos_url = `https://api.github.com/users/${this.getAttribute('gh-user')}/repos`;

		let urls = [github_profile_url, fallowers_url, fallowing_url, repos_url];

		const get_data = ()=>{

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
				// IF ITS HORIZONTAL with PROJECTS
				if(this.getAttribute('gh-mode')=='horizontal-projects'){
					// GETS REPO DATA
					this.get_repo_langs();
				}

			});
		};



		// GETS USER DATA
		get_data();




	}


	build_card (){
		// Gets and replace the data in the html template card with the user data.


			// SETTING ATTIBUTES
			let avatar_img = this._root.querySelector(".profile_avatar>img");
			let avatar_link = this._root.querySelector(".profile_avatar");
			let foot_icon = this._root.querySelector(".footer_icon");
			let bio = this._root.querySelector('.profile_bio');
			let name = this._root.querySelector('.profile_name');
			let fallowers = this._root.querySelector('.fallowers>.fallowers_count');
			let fallowing = this._root.querySelector('.fallowing>.fallowing_count');
			let repos = this._root.querySelector('.repos>.repos_count');
			let repos_container = this._root.querySelector('.gh-card-projects');


			// SETTING AVATAR IMAGE
			avatar_img.src = this.userData['data']['avatar_url'];
			avatar_link.href = this.userData['data']['html_url'];
			// SETTING FOOTTER ICON HREF
			foot_icon.href = this.userData['data']['html_url']

			// SETTING THE BIO

      if(this.userData['data']['bio'] !== null){
        bio.innerHTML = this.userData['data']['bio'];
      }else{
        // Delete 'profile_bio' if user bio is empty or null.
        this.remove_bio();
      }

			name.innerHTML = this.userData['data']['name'];


			// SETTING FALLOWERS
			fallowers.innerHTML = this.userData['fallowers'];

			// SETTING FALLOWING
			fallowing.innerHTML = this.userData['fallowing'];

			// SETTING REPOS COUNT
			repos.innerHTML = this.userData['repos'].length;




			if(this.getAttribute('gh-mode')=='horizontal-projects'){
				// SETTING REPOS
				let index_repo;
				for(let i of [...Array(3).keys()]){
					index_repo = Math.floor(Math.random()*this.userData['repos'].length);
					repos_container.appendChild(repo_layout(this.userData['repos'][index_repo]));
				}

			}
	}

  remove_bio(){
    let bio = this._root.querySelector('.profile_bio');
    // Removin the Bio.
    bio.remove();

    // Adding 'no_bio' css class.
    let card = this._root.querySelector('.gh-card');
    card.classList.add("no_bio");



  }
  connectedCallback() {

	  // CHECK FOR CARD WITH PROJECTS
	  if(this.getAttribute('gh-mode')==='horizontal-projects'){


		  this.setAttribute('update', Math.random());
	  }

	  // GETTING PROFILE DATA
	  this.fetchData();

	  



	}


	show_repos(){
		// Shows the repos of the user.
		let container = this._root.querySelector('.gh-card-projects');
		let index_repo;


		if(this.getAttribute('gh-show-n')){
			console.log('SHOW ', this.getAttribute('gh-show-n'));
		}else{
			// Cleaning the container.
			container.innerHTML = '';

			for(let i of [...Array(3).keys()]){
				index_repo = Math.floor(Math.random()*this.userData['repos'].length);
				container.appendChild(repo_layout(this.userData['repos'][index_repo]));
			}


		}
		
	}

	update_marker(){
		// Update the marker to fire a re-render of the component projects.
		let delay = (Math.floor(Math.random() * 7)) + 2;
		setTimeout(()=>{
			this.show_repos();
			this.setAttribute('update', Math.random());
		}, delay * 2000);


	}

	attributeChangedCallback(name, oldValue, newValue) {
		// console.log('Some attribute changed.');
		// console.log('CHANGED -> ', name);
		// console.log('OLD -> ', oldValue);
		// console.log('NEW -> ', newValue);


		switch(name){
			case 'update':
				this.update_marker();
				break;
		}
		
	}
}



// COMPONENTS
customElements.define('gh-card', GH_Card);
