import baseApi from "../../services";

class ListServices{
    static ListPersonalData(){
        return baseApi.get("/personalData");
    }
}

export default ListServices;