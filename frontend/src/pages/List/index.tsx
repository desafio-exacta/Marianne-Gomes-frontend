import React, { useEffect, useState } from "react";

import "./style.scss";

import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Stages from "../../components/Stages";
import ListServices from "./services";

interface PersonalData {
    rg?: string;
    issueDate?: string;
    issuingAgency?: string;
    gender?: string;
    type?: string;
}

const List = () => {
    const [list, setList] = useState<PersonalData []>()

    const ListPersonalData = async() => {
        const {data} = await ListServices.ListPersonalData();
        setList(data)
    }

    useEffect(() => {
        ListPersonalData();
    }, [])

    return(
        <>
            <Header />
            <Profile />
            <Stages />
            <section className="list-container">
                <table>
                    <tr>
                        <th>RG</th>
                        <th>Agência emissora</th>
                        <th>Data de emissão</th>
                        <th>Gênero</th>
                    </tr>
                    {list?.map((item) => (
                        <tr>
                            <td>{item.rg}</td>
                            <td>{item.issuingAgency}</td>
                            <td>{item.issueDate}</td>
                            <td>{item.type}</td>
                        </tr>
                    ))}

                    {list?.length == 0 && (
                        <td colSpan={4} className="label-align">Não há dados cadastrados.</td>
                    )} 
                </table>
            </section>
        </>
    )
}

export default List;