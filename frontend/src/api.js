import axios from "axios";
const URL = "http://localhost:3000"

export async function getProjects()
{
    const response = await axios.get(`${URL}/projects`)
    if(response.status == 200)
    {
        return response.data
    }
    else
    {
        return
    }
}

export async function getProject(id)
{
    const response = await axios.get(`${URL}/projects/${id}`)
    if(response.status == 200)
    {
        return response.data
    }
    else
    {
        return
    }
}
