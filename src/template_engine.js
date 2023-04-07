
import {basic_layout,horizontal_layout, horizontal_projects_layout, win_layout} from './layouts.js';


function create_template(mode ,style, color){
	// Returns a full template to work with.

	switch(mode){
		case 'normal':
			return(basic_layout(style, color));
			break;
		case 'horizontal':
			return(horizontal_layout(style, color));
			break;
		case 'horizontal-projects':
			return(horizontal_projects_layout(style, color));
			break;
		case 'win':
			return(win_layout(style));
			break;
	}

}



export default create_template;
