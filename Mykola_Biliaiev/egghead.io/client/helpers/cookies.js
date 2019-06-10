import jwt_decode from 'jwt-decode';

export const set_cookie = (cookie_name, data) =>
    (document.cookie = `${cookie_name}=${data}`);
export const get_cookie = cookie_name =>
    document.cookie
        .split(";")
        .filter(item => item.split("=")[0].trim() === cookie_name);
export const get_token = () =>
    get_cookie("access_token").length
        ? get_cookie("access_token")[0].split("=")[1]
        : null;

export const delete_cookie = (name) => document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

export const remove_token = () =>
    delete_cookie("access_token");


export const decode_token = () => jwt_decode(get_token());
