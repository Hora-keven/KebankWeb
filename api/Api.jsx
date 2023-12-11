import axios from "axios"

//Criando a constante da api para poder exportar e usar a url nos outros arquivos.


const headers = {
  
    'Content-Type': 'application/json',
    'Accept':'application/json',
  
  };

// 192.168.0.106
// 10.109.71.20
 const api = axios.create({
  
    baseURL:"http://192.168.0.106:8080/api/version1/",
    headers:headers
})



export default api
