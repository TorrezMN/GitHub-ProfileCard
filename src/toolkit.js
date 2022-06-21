
import {basic_layout,horizontal_layout} from './layouts.js';


function create_template(mode ,style, color){
	// Returns a full template to work with.

	switch(mode){
		case 'normal':
			return(basic_layout(style, color));
			break;
		case 'horizontal':
			return(horizontal_layout(style, color));
			break;
	}

}



export default create_template;
