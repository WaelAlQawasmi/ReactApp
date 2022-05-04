import axios from 'axios';

const List_API = 'http://localhost:8081/api/lists';

class ListData{

    gitList(){
        return axios.get(List_API);
    }
}

export default new ListData();