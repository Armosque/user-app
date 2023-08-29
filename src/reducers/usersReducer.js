

export const usersReducer = (state = [], action) => {
    const newId = state.length + 1
    switch (action.type) {
        case 'AddUser':
            
            
            return [
                ...state,
                {
                    ...action.payload,
                    id: newId
                }
            ];
        case 'DeleteUser':
            return state.filter(user => user.id !== action.payload);

        case 'UpdateUser':
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: user.password
                    }
                }
                return user
            })

        default:
            return state;
    }
};

