import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vinda, LBV!</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO</strong>
                    <p>teste</p>
                    
                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>              
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>teste</p>
                    
                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>              
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>teste</p>
                    
                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>              
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>teste</p>
                    
                    <strong>DESCRIÇÃO</strong>
                    <p>descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>              
                </li>
            </ul>
        </div>
    );
}