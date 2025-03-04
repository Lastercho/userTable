const baseUrl = "http://localhost:3030/jsonstore/users"

export default {
    async getAllUsersTable() {
        const res = await fetch(baseUrl);
        return Object.values(await res.json())
    }
}