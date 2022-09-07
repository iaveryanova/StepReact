import { UserState } from "../types/user";
import { UserActionType } from "../types/user";
import { UsersAction } from "../types/user";

const initialState: UserState = {
    users: []
};

export const userReducer = (state = initialState, action: UsersAction): UserState => {
    switch (action.type) {
        case UserActionType.GET_USERS:
            return {users:action.payload}
        default:
            return state;
    }
}