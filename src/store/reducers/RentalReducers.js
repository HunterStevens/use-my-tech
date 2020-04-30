const initialState = {
    equipments:[],
    isFetching:false,
    error:'',
}

export const RentalReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_ITEMS_START':
            return{
                ...state,
                isFetching:true
            }

        case 'FETCH_ITEMS_SUCCESS':
            return{
                ...state,
                equipments:action.payload,
                isFetching:false,
                error:''
            }
        

        case 'FETCH_ITEMS_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
    }
}