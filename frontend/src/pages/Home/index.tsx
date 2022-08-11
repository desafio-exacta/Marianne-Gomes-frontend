import React, {useEffect, useState} from "react";

import {toast, Toaster} from "react-hot-toast";

import "./style.scss";

import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Stages from "../../components/Stages";
import HomeServices from "./services";

interface PersonalData {
    rg?: string;
    issueDate?: string;
    issuingAgency?: string;
    gender?: string;
    type?: string;
}

interface IssuingAgency {
    id: number;
    value: string;
    label: string;
}

const Home = () => {
    const [personalData, setPersonalData] = useState<PersonalData>();
    const [issuingAgency, setIssuingAgency] = useState<IssuingAgency []>(); 

    const NextStage = async(e: any) => {
        e.preventDefault();

        if(personalData){
            await HomeServices.SavedPersonalData(personalData);
            toast.success('Informações salvas com sucesso!');
        }
    }

    const ListIssuingAgency = async() => {
        const {data} = await HomeServices.ListIssuingAgency();
        setIssuingAgency(data)
    }

    const OptionSelected = (e: any, type: string) => {
        e.preventDefault();

        setPersonalData({...personalData, type: type});
    }

    useEffect(() => {
        ListIssuingAgency();
    }, [])

    return(
        <>
            <Header />
            <Profile />
            <Stages />
            <section className="home-container">
                <form>
                    <h1>Dados pessoais</h1>
                    <div className="form-container">
                        <div className="form-group">
                            <label>* Número do RG:</label>
                            <input type="text" onChange={(e) => setPersonalData({...personalData, rg: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>* Data de emissão:</label>
                            <input type="text" onChange={(e) => setPersonalData({...personalData, issueDate: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>* Órgão expedidor:</label>
                            <select onChange={(e) => setPersonalData({...personalData, issuingAgency: e.target.value})}>
                                <option>Selecione um órgão expedidor</option>
                                {issuingAgency?.map((item) => (
                                    <option>{item.value} - {item.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                     <div className="form-group">
                        <label>* Sexo:</label>
                        <div className="form-button">
                            <button onClick={(e) => OptionSelected(e, "Masculino")}>Masculino</button>
                            <button onClick={(e) => OptionSelected(e, "Feminino")}>Feminino</button>
                        </div>
                    </div>
                    <button className="button-next" onClick={(e) => NextStage(e)}>Continuar</button>
                </form>
            </section>
            <Toaster position="top-center" reverseOrder={false}/>
        </>
    )
}

export default Home;