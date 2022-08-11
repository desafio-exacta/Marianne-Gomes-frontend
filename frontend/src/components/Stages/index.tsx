import React from "react";

import "./style.scss";

const Stages = () => {
    const stageTopics = [
        {id: 1, title: "Simule"},
        {id: 2, title: "Preencha o cadastro"},
        {id: 3, title: "Revise seu pedido"},
        {id: 4, title: "Finalize o pedido"}
    ]

    return(
        <div className="stages-container">
            <ul>
                {stageTopics.map((item) => (
                    <li key={item.id}><span>{item.id}</span>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Stages;