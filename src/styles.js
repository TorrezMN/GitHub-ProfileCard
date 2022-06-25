
export function basic_style (colors){


return (


`

*{
	box-sizing: border-box;
    margin: 0;
    padding: 0;
}



/* BIG DEVICES */
@media screen and (min-width: 20em) {

	.gh-card{
		max-width:40vw;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		position:relative;
		padding: 4rem 0 4rem 0;
		font-family: 'system-ui';

	}
	.gh-card>.svg_top{
		position:absolute;
		top:0;
		z-index:-1;
	}
	.gh-card>.svg_bottom{
		position:absolute;
		bottom:0;
		z-index:-1;
	}

	/* HEADER */
	.gh-card-header{
		position:relative;
		min-width:100%;
		min-height:15rem;
		// background:orange;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;
	}
	.profile_bio{
		width:80%;
		text-align:center;
	}
	.profile_avatar>img{
		width:7rem;
		height:7rem;
		border-radius:50%;
	}
	.profile_avatar>img:hover{
	}

	/* CONTENT */
	.gh-card-content{
		// background:green;
		min-width:100%;
		min-height:5rem;
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
	}
	.profile_stats{
		margin:5px;
		text-align:center;
		padding:5px;
		border-bottom: 1px solid ${colors['primary']};
	}
	.profile_stats:hover{

	}


	/* FOOTER */

	.gh-card-footer{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		min-height:3rem;
		min-width:100%;
	}
	.footer_icon{
		min-width:60%;
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
		text-decoration:none;
		padding:5px;
		border:2px solid  ${colors['primary']};
		color: ${colors['primary']};
		transition:.5s;
	}
	.footer_icon:hover{
		background:${colors['primary']};
		color: ${colors['secondary']};
		border-top-left-radius: 15px;
		border-bottom-right-radius:15px;
	}


}



/* SMALL DEVICES */
@media screen and (max-width: 20em) {




}


`


)
}

export function horizontal_projects_styles (colors){


return (


`

	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	/* BIG DEVICES */
	@media screen and (min-width: 20em) {

	.gh-card{
		min-width:100vw;
		min-height:100vh;

		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;


		background: linear-gradient(223deg, #ffa600, #00cdc2, #0100ff);
		background-size: 600% 600%;
		-webkit-animation: AnimationName 30s ease infinite;
		-moz-animation: AnimationName 30s ease infinite;
		animation: AnimationName 30s ease infinite;

	}

	@-webkit-keyframes AnimationName {
		0%{background-position:29% 0%}
		50%{background-position:72% 100%}
		100%{background-position:29% 0%}
	}
	@-moz-keyframes AnimationName {
		0%{background-position:29% 0%}
		50%{background-position:72% 100%}
		100%{background-position:29% 0%}
	}
	@keyframes AnimationName {
		0%{background-position:29% 0%}
		50%{background-position:72% 100%}
		100%{background-position:29% 0%}
	}

	/* CARD HEADER */
	.gh-card-header{
		width:30vw;
		min-height:100vh;
		// background:orange;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.profile_avatar>img{
		width:9rem;
		height:9rem;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	}
	.profile_name{
		font-size:2rem;
		font-weight:bold;
	}
	.profile_bio{
		width:70%;
		text-align:center;
		background:rgba(0,0,0,.2);
		min-height:5rem;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		border-radius:15px;
	}

	/* CARD BODY */
	.gh-card-body{
		width:70vw;
		min-height:100vh;
		position:relative;
	}
	.gh-card-stats{
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		// background:red;
		min-height:5rem;
	}
	.profile_stats{
		margin:5px;
		background:rgba(0,0,0,.5);
		border-radius:5px;
		padding:5px;
		color:whitesmoke;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		min-width:25%;
		min-height:4rem;
	}


	.gh-card-projects{
		// background:pink;
		min-height:70vh;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}


	/* REPO */
	.gh-repo-container{
		position:relative;
		background:rgba(0,0,0,.4);
		margin:5px;
		width:60vw;
		min-height:4rem;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		border-radius:10px;
	}

	.gh-repo-link{
		position:absolute;
		top:0;
		right:0;
		font-size:2rem;
		text-decoration:none;
		color:whitesmoke;
	}
	.gh-repo-name{
		min-width:100%;
		text-align:center;
		font-size:2rem;
	}
	.gh-repo-desc{
		// background:red;
		min-width:100%;
		width:55vw;
		// background:green;
		font-size:1rem;
		text-align:center;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.gh-repo-desc-text{
		// background:orange;
	}
	.gh-repo-desc-blank{
		height:0;
		width:0;
		// background:red;
		font-size:1.5rem;
	}

	.gh-repo-langs{
		// background:red;
		min-width:100%;
		min-height:3rem;
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
	}
	.gh-project-lang-tag{
		margin:5px;
		background:black;
		color:whitesmoke;
		padding: 3px 5px 3px 5px;
	}

	/* FOOTER */
	.gh-card-footer{
		position:absolute;
		bottom:3;
		// background:green;
		min-width:100%;
		display:flex;
		flex-direction:row;
		justify-content:flex-end;
		align-items:center;
	}
	.footer_icon{
		background:black;
		color:whitesmoke;
		min-height:3rem;
		width:9rem;
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
		margin-right:3rem;
		border-radius:10px;
		text-decoration:none;
	}
	.footer_icon>.fa{

		font-size:2rem;
	}

}

/* SMALL DEVICES */

}

`
)
}



export function horizontal_style (colors){


return (


`

*{
	box-sizing: border-box;
    margin: 0;
    padding: 0;
}



/* BIG DEVICES */
@media screen and (min-width: 20em) {

	.gh-card{
		font-family: 'system-ui';
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
		width:70vw;
		min-height:60vh;
		position:relative;

	}
	.gh-card>.svg_top{
		position:absolute;
		top:0;
		z-index:-1;
		
	}
	.gh-card>.svg_bottom{
		position:absolute;
		bottom:0;
		z-index:-1;
	}

	/* HEADER */
	.gh-card-header{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.profile_name{
		font-size:2rem;
		color: ${colors['secondary']};
	}
	.profile_bio{
		min-width:50%;
		text-align:center;
		font-size:1rem;
		color: ${colors['secondary']};
	}
	.profile_avatar{
		border:2px solid ${colors['secondary']};
		border-radius:50%;
		padding:5px;
	}
	.profile_avatar>img{
		width:7rem;
		height:7rem;
		border-radius:50%;
	}
	.profile_avatar>img:hover{
	}

	/* CONTENT */
	.gh-card-content{
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
	}
	.profile_stats{
		min-width:5rem;
		min-height:3rem;
		margin:1rem;
		border-bottom: 1px solid ${colors['primary']};
		text-align:center;
		color: ${colors['secondary']};
	}
	.profile_stats:hover{

	}


	/* FOOTER */

	.gh-card-footer{
		
	}
	.footer_icon>i{
		margin:5px;
	}
	.footer_icon{
		text-decoration:none;
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		border:2px solid  ${colors['primary']};
		color: ${colors['primary']};
		border-radius:5px;
		transition:.5s;
	}
	.footer_icon:hover{
		background:${colors['primary']};
		color: ${colors['secondary']};

	}


}

/* SMALL DEVICES */
@media screen and (max-width: 20em) {


}

`
)
}


