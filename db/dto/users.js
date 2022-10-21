export default class UsersDTO {
    constructor(user) {
        this.userId = user.userId;
        this.email = user.email;
        this.password = user.password;
    }
}

export function asDto(dataU) {
    if (Array.isArray(dataU)) return dataU.map((u) => new UsersDTO(u));
    else return new UsersDTO(dataU);
}
