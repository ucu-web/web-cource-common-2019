export const getData = async (endpoint) => await (await fetch(endpoint)).json();
