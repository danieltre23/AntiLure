const initState ={
	activitys: [{	
		id:1,
		title:"prueba",
		body:"pppppppp"

	},{
		id:2,
		title:"prueba2",
		body:"pppppppp"
	},{
		id:3,
		title:"prueba3",
		body:"pppppppp"
	},
	{
		id:4,
		title:"prueba3",
		body:"pppppppp"
	},
		{
		id:5,
		title:"Marcelo ila",
		body:"pppppppp"
	},]

}

const activityReducer =(state =initState,action) =>{
	switch(action.type){
		case 'CREATE_ACTIVITY':
			console.log('created activity',action.activity);
			return state;
		case 'CREATE_ACTIVITY_ERROR':
			console.log('created activity',action.activity);
			return state;
		case 'LOAD_POST' :return action.posts
		default:
			return state;

	}
	
}

export default activityReducer