import React from "react";
import styles from "./footer.module.scss";
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Coluna 1 */}
        <div className={styles.column}>
          <h4>Ouvidoria</h4>
          <ul>
            <li>Atendimento em dias úteis das 8h às 18h (horário de Brasília)</li>
            <li><strong>0800 887 0463</strong></li>
            <li>ouvidoria@hotinvest.com.br</li>
          </ul>
          <h5>Privacidade e proteção de dados</h5>
          <ul>
            <li>Encarregada: Raíssa Moura Ferreira</li>
            <li>dpo@hotinvest.com.br</li>
            <li><strong>Procedimentos de Ouvidoria</strong></li>
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

        {/* Coluna 2 */}
        <div className={styles.column}>
          <h4>Imprensa</h4>
          <ul>
            <li>Sala de Imprensa</li>
          </ul>
          <h5>Ajuda</h5>
          <ul>
            <li>Segurança</li>
            <li>Perguntas frequentes</li>
          </ul>
          <h5>Fale com a gente</h5>
          <ul>
            <li>
              Capitais e regiões metropolitanas<br />
              <strong>4020 0185</strong>
            </li>
            <li>
              Demais localidades<br />
              <strong>0800 591 2117</strong>
            </li>
            <li>Canal de atendimento em libras</li>
            <li>Portal de Relacionamento com Autoridades Judiciais e Administrativas</li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className={styles.column}>
          <h4>Explorar</h4>
          <ul>
            <li>Blog</li>
            <li>Central de Ajuda</li>
          </ul>
          <h5>Carreiras</h5>
          <ul>
            <li>Trabalhe com a gente</li>
          </ul>
          <h5>Fornecedores</h5>
          <ul>
            <li>Seja um fornecedor</li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className={styles.column}>
          <h4>Transparência</h4>
          <ul>
            <li>Política de privacidade</li>
            <li>Política anticorrupção</li>
            <li>Política KYC</li>
            <li>Programa responsabilidade social</li>
            <li>Código de Ética</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.logo}>
          <span style={{ color: "#EF5635" }}>Hot</span><span style={{ color: "#fff", fontStyle: "italic" }}>Invest</span>
        </div>
        <div className={styles.copyright}>
          © 2025 HotInvest S.A - Instituição de Pagamento. 00.000.000/0001-00. Avenida da Inovação, 100 - São Paulo, SP - 01000-000
        </div>
        <div className={styles.accessibility}>
          <span role="img" aria-label="acessibilidade">🦽</span>
        </div>
      </div>
    </footer>
  );
}
