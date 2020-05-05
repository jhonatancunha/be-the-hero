import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
//teste
import './style.css';
export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero!" />

          <h1>Cadastrar novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontra um herói para rsolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>

        <form>
          <input placeholder="Título do Caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em Reais" type="number" min="0" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
