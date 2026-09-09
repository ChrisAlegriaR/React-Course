// ^Custom Hooks & Helpers.
export async function helperExportadoDeJavaScript(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataApi = await response.json();
        return dataApi;
    } catch(error){
        console.warn(error);
        return [];
    }
}
