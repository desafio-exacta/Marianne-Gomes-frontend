import baseApi from "../../services";


class HomeServices {
    static ListIssuingAgency(){
        return baseApi.get("/issuingAgency");
    }

    static SavedPersonalData(data: object){
        return baseApi.post("/personalData", data);
    }
}

export default HomeServices;