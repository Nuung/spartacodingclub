type User = {
    id: number,
    name: string,
    email: string,
}

interface UserI {
    id: number,
    name: string,
    email: string
}

const user: User = {
    id: 0,
    name: "",
    email: ""
}

const user2: UserI = {
    id: 0,
    name: "",
    email: ""
}