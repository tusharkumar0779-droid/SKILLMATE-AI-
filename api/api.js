const API_URL = "http://localhost:5000/api/users";

export async function registerUser(data) {

const response = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return await response.json();

}

export async function getUsers() {

    const response = await fetch(API_URL);

    return await response.json();

}
