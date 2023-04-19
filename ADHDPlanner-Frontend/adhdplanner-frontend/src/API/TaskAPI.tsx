export const GetTasks = async () => {
    let res = await
        fetch("https://localhost:7179" + '/api/Tasks', {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
    let data: Task[] = (await res.json()) as Task[]
    return data;
}

export interface Task {
    id: number,
    name: string,
    isComplete: boolean,
    duration: number,
    description: string,
    dueDate: Date
}

export const GetTask = async () => {
    let res = await
        fetch("https://localhost:7179" + '/api/Tasks', {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
    let data: Task[] = (await res.json()) as Task[]
    return data;
}

export interface Task {
    id: number,
    name: string,
    isComplete: boolean,
    duration: number,
    description: string,
    dueDate: Date
}

export const PostTask = async () => {
    let res = await
        fetch("https://localhost:7179" + '/api/Tasks', {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

export const PutTask = async () => {
    let res = await
        fetch("https://localhost:7179" + '/api/Tasks', {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

export const DeleteTask = async () => {
    let res = await
        fetch("https://localhost:7179" + '/api/Tasks', {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

