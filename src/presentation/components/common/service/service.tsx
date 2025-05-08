"use client";

import styles from "./service.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { FaHandPeace } from "react-icons/fa";


export default function Service() {
    return (
        <section id="atendimento" className={styles.container}>
            <div className={styles.serviceSection}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Canais de atendimento</h2>
                    <p className={styles.subtitle}>
                        Fale com a gente pelo chat no app da HotInvest — atendimento 24 horas, todos os dias.
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.card}>
                        <div className={styles.iconCol}>
                            <FiPhoneCall className={styles.iconMain} />
                        </div>
                        <div>
                            <div className={styles.cardTitle}>Se preferir, ligue:</div>
                            <div className={styles.phoneBlock}>
                                <span className={styles.phone}>4020 0185</span>
                                <span className={styles.phoneDesc}>Capitais e Regiões metropolitanas</span>
                            </div>
                            <div className={styles.phoneBlock}>
                                <span className={styles.phone}>0800 591 2117</span>
                                <span className={styles.phoneDesc}>Demais localidades</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconCol}>
                            <FaHandPeace className={styles.iconSecondary} />
                        </div>
                        <a href="#" className={styles.linkPurple}>
                            Canal de atendimento em libras
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
}
