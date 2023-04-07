
export function win_styles (colors){


return (


`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background:blue;
}



/* BIG DEVICES */
@media screen and (min-width: 20em) {

.gh-card{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


  min-width:100vw;
  min-height:100vh;

  border:2px solid gray;
  position:relative;



}
.gh-main-title{
  position:absolute;
  top:2rem;
  background:gray;
  color:black;
  
  border:2px solid gray;
  color:whitesmoke;
  min-width:100%;
  min-height:3rem;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

}

.gh-window-container{

}

.gh-left-window{

}

.gh-right-window{


}

.gh-footer{



}


}



/* SMALL DEVICES */

@media only screen and (max-width: 400px) {

h3{
background:orange;

}

}


`


)
}








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
	.profile_name{
    min-width:100%;
    margin-bottom:2rem;
		font-size:2rem;
	}
	.profile_bio{
		width:80%;
		text-align:center;
	}
	.profile_avatar>img{
		width:10rem;
		height:10rem;
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
  .stats_container{
    min-width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
  }
	.profile_stats{
		margin:5px;
		text-align:center;
		padding:5px;
		border-bottom: 1px solid ${colors['primary']};
    transition:.5s;
	}
	.profile_stats:hover{
    background: ${colors['primary']};
    color:whitesmoke;
    border-radius:10px;
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
		min-width:40%;
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

@media only screen and (max-width: 400px) {

	.gh-card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    padding: 4rem 0 4rem 0;
    font-family: 'system-ui';
    min-width:100vw;
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
	.profile_name{
		font-weight:bold;
    font-size:3rem;
	}
	.profile_bio{
		width:80%;
		text-align:center;
    margin-bottom:1.5rem;
    font-size:1.2rem;
	}
	.profile_avatar>img{
		width:50vw;
		height:50vw;
		border-radius:50%;
	}
	.profile_avatar>img:hover{
	}

  CONTENT
  .gh-card-content{
    min-width:100%;
    min-height:5rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
  }
  .stats_container{
    min-width:100%;
    display:Flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .profile_stats{
    min-width:50vw;
    border-radius:5px;
    text-align:center;
    padding:5px;
    border-bottom: 2px solid ${colors['primary']};
    font-size:1.2rem;

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
  }
  .profile_stats>p:first-child{
    font-size:1.4rem;
  }
	.profile_stats:hover{
    margin-left:30%;
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
		min-width:40%;
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
		width:25vw;
		height:25vw;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	}
	.profile_name{
		font-size:1.5rem;
		font-weight:bold;
    border-bottom:1px solid whitesmoke;
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

		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;


	}
	.gh-card-stats{
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		min-height:5rem;
    min-width:100%;
	}
	.profile_stats{
		margin:5px;
    background:rgba(0,0,0,.5);
		border-radius:1rem;
		padding:5px;
		color:whitesmoke;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		min-width:25%;
		min-height:4rem;
    border:2px solid whitesmoke;
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
		color:rgba(0,0,0.8);
	}
	.gh-repo-link{
		position:absolute;
		top:0;
		right:0;
		font-size:2rem;
		text-decoration:none;
		color:whitesmoke;
    padding-right:.5rem;
	}
	.gh-repo-name{
		min-width:100%;
		text-align:center;
		font-size:2rem;
    border-bottom:1px solid whitesmoke;
	}
	.gh-repo-desc{
		min-width:100%;
		width:55vw;
		font-size:1rem;
		text-align:center;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.gh-repo-desc-text{
	}
	.gh-repo-desc-blank{
		height:0;
		width:0;
		font-size:1.5rem;
	}
	.gh-repo-langs{
		min-width:100%;
		min-height:3rem;
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		flex-wrap:wrap;
	}
	.gh-project-lang-tag{
		margin:5px;
		background:black;
		color:whitesmoke;
		padding: 3px 5px 3px 5px;
		border-radius:5px;
	}
	/* FOOTER */
	.gh-card-footer{
		min-width:100%;
		display:flex;
		flex-direction:row;
		justify-content:flex-end;
		align-items:center;
	}
	.footer_icon{
    margin-bottom:2rem;
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
    position:absolute;
    bottom:0;
	}
	.footer_icon>.fa{
		font-size:2rem;
	}
}

/* SMALL DEVICES */

@media only screen and (max-width: 400px) {

	.gh-card{
    min-height:100vh;
    display:flex;
    flex-direction:column;
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
    min-width:100vw;
    min-height:30vh;
    color:whitesmoke;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
	}
  .profile_avatar{
    min-width:100vw;
  }
	.profile_avatar>img{
    width:60vw;
    height:60vw;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	}
	.profile_name{
		min-width:80vw;
		min-height:3rem;
		font-size: 2rem;
		font-weight:bold;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.profile_bio{
		min-width:80vw;
		min-height:15vh;
		font-size: 1.3rem;
		text-align:center;
	}

	/* CARD BODY */
	.gh-card-body{

    min-width:100vw;
	}
	.gh-card-stats{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
    min-width:100%;
    min-height:40vh;
	}
	.profile_stats{
		border-radius:5px;
		min-width:80vw;
		min-height:4rem;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		background:rgba(0,0,0,.3);
		color:whitesmoke;
		font-size:1.5rem;
	}
	.gh-card-projects{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
    min-width:100%;
    min-height:15vh;
	}
	/* REPO */
	.gh-repo-container{
		margin:5px;
		width:90vw;
		min-height:5rem;
		color:rgba(0,0,0.8);
		position:relative;
    background: linear-gradient(155deg, #fe4c4c, #fec84c, #00ff1b);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
	}


@-webkit-keyframes AnimationName {
    0%{background-position:20% 0%}
    50%{background-position:81% 100%}
    100%{background-position:20% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:20% 0%}
    50%{background-position:81% 100%}
    100%{background-position:20% 0%}
}
@keyframes AnimationName {
    0%{background-position:20% 0%}
    50%{background-position:81% 100%}
    100%{background-position:20% 0%}
}
	.gh-repo-link{
    min-width:100%;
		color:wihtesmoke;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
	}
	.gh-repo-name{
		font-weight:bold;
		border-bottom:1px solid rgba(0,0,0,.3);
    max-width:90%;
    font-size:1.5rem;
	}
	.gh-repo-desc{
    min-width:100%;
	}
	.gh-repo-desc-text{
		padding:3px;
		text-align:center;
	}
	.gh-repo-desc-blank{
		height:0;
	}
	.gh-repo-langs{
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		flex-wrap:wrap;
	}
	.gh-project-lang-tag{
		padding:5px;
		border-radius:3px;
		background:black;
		color:whitesmoke;
		margin:5px;
		font-size:1rem;
	}
	/* FOOTER */
	.gh-card-footer{
    min-width:100%;
    min-height:20vh;
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;


	}
	.footer_icon{
    min-width:50vw;
    margin-left:10%;
		background:black;
		text-decoration:none;
		color:whitesmoke;
	}
	.footer_icon>.fa{
		font-size:1.5rem;
	}

}
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
	@media only screen and (min-width: 20em) {


	.gh-card{
		font-family: 'system-ui';
		display:flex;
		flex-direction:row;
    justify-content:space-around;
		align-items:center;
		width:80vw;
		min-height:60vh;
		position:relative;
    background:transparent;

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
  .stats_container{
    min-width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
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
@media only screen and (max-width: 400px) {

	.gh-card{
    font-family: 'system-ui';
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    min-height:100vh;
    position:relative;
    padding:2rem 0 2rem 0;
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
		min-height:50vh;
		min-width:90vw;
    margin-top:-3rem;
	}
	.profile_name{
		font-size:3rem;
		color: ${colors['secondary']};
	}
	.profile_bio{
		width:80vw;
		text-align:center;
		font-size:1.5rem;
		color: ${colors['secondary']};
	}
	.profile_avatar{
    min-width:60vw;
    min-height:60vw;
    border:2px solid ${colors['secondary']};
    border-radius:50%;
    padding:5px;

		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.profile_avatar>img{
		width:50vw;
		height:50vw;
		border-radius:50%;
	}
	.profile_avatar>img:hover{
	}
	/* CONTENT */
	.gh-card-body{
		min-width:80vw;
	}
  .no_bio>.gh-card-body{
    margin-top: -10rem;
  }
	.gh-card-content{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
  .stats_container{
    min-width:100%;
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
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
	}
	.footer_icon>i{
		margin:5px;
	}
	.footer_icon{
		width:50vw;
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

`
)
}


