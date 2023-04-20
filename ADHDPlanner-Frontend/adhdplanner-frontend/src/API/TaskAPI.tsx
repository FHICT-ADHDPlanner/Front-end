export const GetTasks = async () => {
    let res = await
        fetch("http://localhost:1001" + '/api/Task', {
            method: "GET",
            headers: {
                /*'Access-Control-Allow-Origin': '*'*/
                "Content-Type": "application/json"
            }
        });
    let data: Task[] = (await res.json()) as Task[]
    return data;
}

export const GetTask = async (id : number) => {
    let res = await
        fetch("http://localhost:1001" + '/api/Task/' + id, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
    let data: Task = (await res.json()) as Task
    return data;
}

export const PostTask = async () => {
    let res = await
        fetch("http://localhost:1001" + '/api/Task', {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

export const PutTask = async (id : number) => {
    let res = await
        fetch("http://localhost:1001" + '/api/Task/' + id, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

export const DeleteTask = async (id : number) => {
    let res = await
        fetch("http://localhost:1001" + '/api/Task/' + id, {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

export interface Task {
    id: number,
    name: string,
    isComplete: boolean,
    duration: number,
    description: string,
    dueDate: Date
}
