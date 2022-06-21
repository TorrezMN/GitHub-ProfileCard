
const basic_style = `

*{
	box-sizing: border-box;
    margin: 0;
    padding: 0;
}



/* BIG DEVICES */
@media screen and (min-width: 20em) {

	.gh-card{
		background:gray;
		max-width:40vw;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}

	/* HEADER */
	.gh-card-header{
		position:relative;
		min-width:100%;
		min-height:15rem;
		background:orange;
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
		background:green;
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
		border:1px solid red;
		padding:5px;
	}


	/* FOOTER */

	.gh-card-footer{
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		min-width:100%;
		background:red;

	}
	.gh-card-footer>i{
		font-size:2rem;
		transition:.5s;
	}
	.gh-card-footer>i:hover{
		color:purple;
	}

}



/* SMALL DEVICES */
@media screen and (max-width: 20em) {


	.gh-card{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		min-width:100%;
		background:red;
	}

	/* HEADER */
	.gh-card-header{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		text-align:center;
		background:blue;
	}
	.profile_bio{
	}
	.profile_avatar>img{
		width:5rem;
		height:5rem;
		border-radius:50%;
		transition:.5s;
	}
	.profile_avatar>img:hover{
		border-radius:45%;
		
	}

	/* CONTENT */
	.gh-card-content{
		min-width:100%;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		text-align:center;
		background:pink;

	}
	.profile_stats{
		min-height:3rem;
		background:orange;
		display:flex;
		flex-direction:row;
		justify-content:flex-start;
		align-items:center;
		text-align:center;
		margin:3px;
		min-width:100%;
	}


	/* FOOTER */

	.gh-card-footer{

	}
	.gh-card-footer>i{
	}
	.gh-card-footer>i:hover{
	}


}









`;

export default basic_style;
