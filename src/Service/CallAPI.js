import axios from "axios";

// export const AddBloodGroup = async (data) => {
//     return axios.post()
// }

export const GetBloodGroup = async (data) => {
    return await axios.get("https://localhost:7212/api/Groupbloods").then(res => res.data);
};

export const AddBloodGroup = async (data) => {
    return await axios.post("https://localhost:7212/api/Groupbloods", data).then(res => res.data);
}

export const getBloodGroupById = async (id) => {
    return await axios.get("https://localhost:7212/api/Groupbloods/"+id).then(res => res.data);
};

export const EditBloodGroupById = async (id , data) => {
    return await axios.put("https://localhost:7212/api/Groupbloods/"+id , data).then(res => res.data);
};

export const deleteBloodGroupById = async (id) => {
    return await axios.delete("https://localhost:7212/api/Groupbloods/"+id);
}