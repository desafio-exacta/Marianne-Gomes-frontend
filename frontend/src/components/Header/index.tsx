import React from "react";

import "./style.scss";

const Header = () => {
    const optionsHeader = [
        {id: 1, title: "Dados cadastrados", href: "/list"},
        {id: 2, title: "Privacidade", href: ""},
        {id: 1, title: "Sair", href: ""},
    ];

    const SendTo = (route: string) => {
        window.location.pathname = route;
    }

    return(
        <header className="header-container">
            <h1 onClick={() => SendTo("/")}>Exactaworks</h1>
            <ul>
                {optionsHeader.map((item) => (
                    <li onClick={() => SendTo(item.href)} key={item.id}>{item.title}</li>
                ))}
            </ul>
        </header>
    )
}   

export default Header;