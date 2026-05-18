import axios from "axios";
import type { AxiosResponse } from "axios";


interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean 
}

// axios.get("https://example.com")
//     .then((responce) => {
//         console.log(responce.data);
//     })



const fetchData = async () {
    try {
        const response: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log("Todo", response.data);
         
    } catch (error: any) {
        // console.log("ERROR : ",error.message);
        if(axios.isAxiosError(error)){
            console.log("Axios Error : ", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
