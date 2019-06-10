import {
    getAllCoursesErrorAction,
    getAllCoursesStartAction,
    getAllCoursesSuccessAction,
    getAllUsersErrorAction,
    getAllUsersStartAction,
    getAllUsersSuccessAction,
    userLoginErrorAction,
    userLoginStartAction,
    userLoginSuccessAction,
    userRegistrationErrorAction,
    userRegistrationStartAction,
    userRegistrationSuccessAction
} from "../reducers/reducerConstants";
import {get_token} from "../cookies";

export const getAllUsers = async store => {
    try {
        let endpoint = "/auth/users";
        store.dispatch(getAllUsersStartAction, {});
        const response = await fetch(endpoint, {
            method: "get",
            headers: {Authorization: "bearer " + get_token()}
        });
        const data = await response.json();

        store.dispatch(getAllUsersSuccessAction, data);
    } catch (err) {
        store.dispatch(getAllUsersErrorAction, err);
    }
};

export const login = async (store, post_data) => {
    try {
        let endpoint = "/auth/login";
        store.dispatch(userLoginStartAction, {});
        const response = await fetch(endpoint, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post_data)
        });

        const data = await response.json();

        store.dispatch(userLoginSuccessAction, data);
    } catch (err) {
        store.dispatch(userLoginErrorAction, err);
    }
};

export const registrate = async (store,post_data) => {


    try {
        let endpoint = "/auth/users";
        store.dispatch(userRegistrationStartAction, {});
        const response = await fetch(endpoint, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post_data)
        });
        const data = await response.json();

        store.dispatch(userRegistrationSuccessAction, data);
    } catch (err) {
        console.log(err,"Err");
        store.dispatch(userRegistrationErrorAction, err);
    }
};


export const getUser = async (store, user_id, post_data = false) => {
    try {
        let endpoint = "/auth/users/" + user_id;
        store.dispatch(userLoginStartAction, {});
        const method = post_data ? "post" : "get";
        const body = post_data ? JSON.stringify(post_data) : null;
        const response = await fetch(endpoint, {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "bearer " + get_token()
            },
            body: body
        });
        const data = await response.json();
        store.dispatch(userLoginSuccessAction, data);
    } catch (err) {
        store.dispatch(userLoginErrorAction, err);
    }
    try {
        let endpoint = "/auth/users";
        store.dispatch(userRegistrationStartAction, {});

        const response = await fetch(endpoint, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const data = await response.json();

        store.dispatch(userRegistrationSuccessAction, data);
    } catch (err) {
        store.dispatch(userRegistrationErrorAction, err);
    }
};
