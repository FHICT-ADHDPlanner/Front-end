
export const GetTasks = async () => {
    let res = await
        fetch("https://localhost:7179" + '/api/ToDoItems', {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json"
            }
        });
    let data:Task[] = (await res.json()) as Task[]
    console.log(data)
    console.log(typeof(data))
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