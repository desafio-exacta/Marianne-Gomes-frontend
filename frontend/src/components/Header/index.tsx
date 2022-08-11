import React from "react";

import "./style.scss";

const Header = () => {
    const optionsHeader = [
        {id: 1, title: "Como funciona", href: ""},
        {id: 2, title: "Privacidade", href: ""},
        {id: 1, title: "Ajuda", href: ""},
    ]

    return(
        <header className="header-container">
            <h1>Exactaworks</h1>
            <ul>
                {optionsHeader.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </header>
    )
}   

export default Header;