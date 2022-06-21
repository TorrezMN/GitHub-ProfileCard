
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


