const initialState = {
    user:[],
    isFetching:false,
    error:'',
}

export const ProfileReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_USER_START':
            return{
                ...state,
                isFetching:true
            }

        case 'FETCH_USER_SUCCESS':
            return{
                ...state,
                user:action.payload,
                isFetching:false,
                error:''
            }
        

        case 'FETCH_USER_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
    }
}