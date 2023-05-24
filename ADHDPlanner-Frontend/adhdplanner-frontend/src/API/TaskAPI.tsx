export const GetTasks = async () => {
    let res = await
        fetch(process.env.REACT_APP_API_URL + '/api/Task', {
            method: "GET",
            headers: {
               /* "Content-Type": "application/json"*/
               /* "Access-Control-Allow-Origin": '*'*/
                
            }
        });
    let data: Task[] = (await res.json()) as Task[]
    return data;
}

export const GetTask = async (id : number) => {
    let res = await
        fetch(process.env.REACT_APP_API_URL + '/api/Task/' + id, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
    let data: Task = (await res.json()) as Task
    return data;
}

export const CreateTask = async (_name: string, _isComplete: boolean, _duration: number, _description: string, _dueDate: Date) =>
{
    let res = await
        fetch(process.env.REACT_APP_API_URL + '/api/Task', {
            method: "POST",
            headers: {

                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: _name, isComplete: _isComplete ,duration: _duration, description: _description, dueDate: _dueDate })
        });
}

export const UpdateTask = async (id : number) => {
    let res = await
        fetch(process.env.REACT_APP_API_URL + '/api/Task/' + id, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
}

export const DeleteTask = async (id : number) => {
    let res = await
        fetch(process.env.REACT_APP_API_URL + '/api/Task/' + id, {
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
