import axios from "axios";
import {GlobalVariables} from "./variables";



export async function get(endpoint) {
    return await axios.get(GlobalVariables.baseUrl+endpoint);
}



