import React from "react";

import "./style.scss";

const Profile = () => {
    return(
        <div className="profile-container">
            <div>
                <span>Me chamo:</span>
                <span>Paul Irish</span>
                <span>CPF: 762.880.176-92</span>
            </div>
            <div>
                <span>Preciso de:</span>
                <span>R$ 2.000,00</span>
            </div>
            <div>
                <span>Quero pagar em:</span>
                <span>12 vezes</span>
            </div>
            <div>
                <span>Para:</span>
                <span>Comprar uma bike</span>
            </div>
        </div>
    )
}

export default Profile;