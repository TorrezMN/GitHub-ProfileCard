
export const repo_layout = (proj)=>{
	// Project basic layout for github repos.
	let repo_template = document.createElement('template');
    repo_template.innerHTML = 
			`
			<div class='gh-repo-container'>
				<div class='gh-repo-name'>
					<p>${proj['name']}!</p>
				</div>

			</div>

			`;
    return (repo_template.content);

}



export const horizontal_layout =(style, color)=>{


	return(
			`
				<html lang="en">
				  <head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<meta http-equiv="X-UA-Compatible" content="ie=edge">
					<link rel="preconnect" href="https://fonts.googleapis.com">

					<!-- Awesome Fonts -->
						<link
						  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						  rel="stylesheet"
						  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
						  crossorigin="anonymous"
						/>
					<style>
						${style}
					</style>
				  </head>
				  <body>
					<div class='gh-card'>
						<svg 
							class='svg_top' 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 1440 320"><path fill="${color['primary']}" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,101.3C480,85,600,75,720,85.3C840,96,960,128,1080,160C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

							<div class='gh-card-header'>
								<a class='profile_avatar' href='#'>
									<img src='#' atl='Profile picture.'/>
								</a>
								<p class='profile_name'></p>
								<p class='profile_bio'></p>
							</div>
							<div class='gh-card-body'>
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
								<div class='gh-card-projects'>
								
								</div>
								<div class='gh-card-footer'>
									<a class='footer_icon' href='#'>
										<i class="fa fa-github-square"></i>
										<p> My GitHub </p>
									</a>
								</div>
							</div>
						<svg 
							class='svg_bottom' 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 1440 320"><path fill="${color['primary']}" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
					</div>
				  </body>
				</html>

					`)
}
;
export const basic_layout =(style, color)=>{


	return(
			`
				<html lang="en">
				  <head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<meta http-equiv="X-UA-Compatible" content="ie=edge">
					<link rel="preconnect" href="https://fonts.googleapis.com">

					<!-- Awesome Fonts -->
						<link
						  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						  rel="stylesheet"
						  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
						  crossorigin="anonymous"
						/>
					<style>
						${style}
					</style>
				  </head>
				  <body>
					<div class='gh-card'>
						<svg 
							class='svg_top' 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 1440 320"><path fill="${color['primary']}" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,101.3C480,85,600,75,720,85.3C840,96,960,128,1080,160C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
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
								<a class='footer_icon' href='#'>
									<i class="fa fa-github-square"></i>
									<p> My GitHub </p>
								</a>
							</div>
						<svg 
							class='svg_bottom' 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 1440 320"><path fill="${color['primary']}" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
					</div>
				  </body>
				</html>

					`)
}
;
