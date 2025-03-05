const baseUrl = "http://localhost:3030/jsonstore/users"
export default {
    async getAllUsersTable() {
        const res = await fetch(baseUrl);
        // console.log(Object.values(await res.json()))
        return Object.values(await res.json())
    },

    async getOneUser (userId) {
        const res = await fetch(`${baseUrl}/${userId}`);

        return (await res.json())
    },


    async createUser(user) {
        const {country, city, street, streetNumber, ...postData} = user;
        postData.address = {country, city, street, streetNumber};

        postData.createdAt = new Date().toISOString().slice(0, 10);
        postData.updatedAt = new Date().toISOString().slice(0, 10);
        console.log(postData);

        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData),
        })
        return await res.json();

    },

    async deleteUser(userId) {
        const res = await fetch(`${baseUrl}/${userId}`,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }


            );
        // return null;
    },
}