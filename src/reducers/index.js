export default function movies(state=[],action){

        if(action.typ=== 'ADD_MOVIES'){
            return action.movies;
        }


        return state;
} 