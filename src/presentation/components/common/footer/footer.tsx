"use client";

import React from "react";
import styles from "./footer.module.scss";
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import { IMAGE } from "src/presentation/assets";

export default function Footer() {
  // Função para scroll suave
  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

        <div className={styles.column}>
          <h4>Ouvidoria</h4>
          <ul>
            <li>Atendimento em dias úteis das 8h às 18h (horário de Brasília)</li>
            <li><strong>0800 887 0463</strong></li>
            <li>ouvidoria@hotinvest.com.br</li>
          </ul>
          <h5>Redes Sociais</h5>
          <div className={styles.social}>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTimes /></a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Privacidade e proteção de dados</h4>
          <ul>
            <li>dpo@hotinvest.com.br</li>
            <li>Procedimentos de Ouvidoria</li>
          </ul>
          <h5>Explorar</h5>
          <ul>
            <li>
              <a href="#atendimento" onClick={handleSmoothScroll("atendimento")}>Central de Ajuda</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Fale com a gente</h4>
          <ul>
            <li>
              Capitais e regiões metropolitanas<br />
              <strong>4020 0185</strong>
            </li>
            <li>
              Demais localidades<br />
              <strong>0800 591 2117</strong>
            </li>
          </ul>
          <h5>Ajuda</h5>
          <ul>
            <li>
              <a href="#perguntas-frequentes" onClick={handleSmoothScroll("perguntas-frequentes")}>Perguntas frequentes</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Transparência</h4>
          <ul>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Política anticorrupção</a></li>
            <li><a href="#">Política KYC</a></li>
            <li><a href="#">Programa responsabilidade social</a></li>
            <li><a href="#">Código de Ética</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.logo}>
          <span style={{ color: "#EF5635" }}>Hot</span><span style={{ color: "#fff", fontStyle: "italic" }}>Invest</span>
        </div>
        <div className={styles.copyright}>
          © 2025 HotInvest S.A - Instituição de Pagamento. 12.345.678/0001-99. Rua Exemplo, 123 - Centro, Rio de Janeiro, RJ - 20000-000
        </div>
        <div className={styles.accessibility}>
          <span role="img" aria-label="acessibilidade">🦽</span>
        </div>
      </div>
    </footer>
  );
}
