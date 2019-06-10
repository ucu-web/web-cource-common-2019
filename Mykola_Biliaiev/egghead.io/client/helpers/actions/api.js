// import store from "../store/store";
import {
    getAllCoursesErrorAction,
    getAllCoursesStartAction,
    getAllCoursesSuccessAction,
    getAllLessonsErrorAction,
    getAllLessonsStartAction,
    getAllLessonsSuccessAction
} from "../reducers/reducerConstants";
import {get_token, remove_token} from "../cookies";

export const getAllCourses = async store => {
    try {
        let endpoint = "/api/courses";
        store.dispatch(getAllCoursesStartAction, {});

        const response = await fetch(endpoint, {
            method: "get",
            headers: {Authorization: "bearer " + get_token()}
        });
        response.status >= 400 ? remove_token() : null;
        const data = await response.json();

        store.dispatch(getAllCoursesSuccessAction, data);
    } catch (err) {
        console.log(err);
        store.dispatch(getAllCoursesErrorAction, err);
    }
};

export const getAllLessons = async store => {
    try {
        let endpoint = "/api/lessons";
        store.dispatch(getAllLessonsStartAction, {});

        const response = await fetch(endpoint, {
            method: "get",
            headers: {Authorization: "bearer " + get_token()}
        });
        response.status >= 400 ? remove_token() : null;
        const data = await response.json();

        store.dispatch(getAllLessonsSuccessAction, data);
    } catch (err) {
        store.dispatch(getAllLessonsErrorAction, err);
    }
};


export const addCourse = async (data) => {
    try {
        let endpoint = "/api/courses";
        const response = await fetch(endpoint, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "bearer " + get_token()
            },
            body: JSON.stringify(data)
        });
        response.status >= 400 ? remove_token() : null;
        const res = await response.json();
        location.reload();

    } catch (err) {
        console.log(err);
        // store.dispatch(getAllCoursesErrorAction, err);

    }
};

export const addLesson = async (data) => {
    try {
        let endpoint = "/api/lessons";
        const response = await fetch(endpoint, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "bearer " + get_token()
            },
            body: JSON.stringify(data)
        });
        response.status >= 400 ? remove_token() : null;
        const res = await response.json();
        location.reload();

    } catch (err) {
        console.log(err);
        // store.dispatch(getAllCoursesErrorAction, err);

    }
};