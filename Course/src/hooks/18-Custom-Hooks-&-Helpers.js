export function hookExportadoDesdeJavaScript() {
    const [data, setData] = useState([]);
    const fetchUser = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const dataApi = await response.json();
            setData(dataApi)
        } catch(error){
            console.warn(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])
    
    return {
        data
    }
}