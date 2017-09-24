import "isomorphic-fetch";

const initialHeaders = {"Content-Type": "application/json"};
const omsFetch = async ({url, method, body, headers}) => {
    // do this here to get Content-Type to not be overridden if you didn't want to.
    const actualHeaders = {...initialHeaders, ...headers};
    const response = await fetch(url, {
        method,
        headers: actualHeaders,
        body
    });
    const responseType = response.headers.get("content-type");
    if (!response.ok) {
        throw Error(response.message || response.statusText);
    } else if (responseType.indexOf("application/json") !== -1) {
        return response.json();
    } else if (responseType.indexOf("application/pdf") !== -1) {
        return response.blob();
    } else if (responseType.indexOf("text/html") !== -1) {
        return response.text();
    } else {
        throw Error("Response type not supported yet!");
    }

};

export const fetchGet = ({url, headers}) => {
    return omsFetch({url, method: "GET", headers});
};

export const fetchPost = ({url, body, headers}) => {
    return omsFetch({url, method: "POST", body, headers});
};

export const fetchPut = ({url, body, headers}) => {
    return omsFetch({url, method: "PUT", body, headers});
};

export const fetchDelete = ({url, body, headers}) => {
    return omsFetch({url, method: "DELETE", body, headers});
};
