import { FiSmartphone, FiDollarSign, FiBarChart2, FiCheck, FiSmile, FiUsers } from "react-icons/fi";
import styles from "./benefits.module.scss";

const BENEFITS = [
    {
        icon: <FiSmartphone />,
        title: "Tudo no app",
        desc: "Controle sua conta e investimentos direto do celular, com autonomia total e sem complicações.",
    },
    {
        icon: <FiDollarSign />,
        title: "Transferências sem custo",
        desc: "Envie e receba dinheiro à vontade, sem tarifas ou limites escondidos.",
    },
    {
        icon: <FiCheck />,
        title: "Rendimento inteligente",
        desc: "Seu saldo rende automaticamente mais que a poupança após 30 dias.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Organização automática",
        desc: "Pague contas, acompanhe boletos e receba lembretes de vencimento num só lugar.",
    },
    {
        icon: <FiSmile />,
        title: "Zero mensalidade",
        desc: "Nada de taxas de manutenção ou tarifas surpresa. Sua conta é gratuita, simples assim.",
    },
    {
        icon: <FiUsers />,
        title: "Acesso para todos",
        desc: "Abra sua conta HotInvest sem burocracia e sem análise de crédito.",
    },
];

const Benefits = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                Tudo o que você precisa, com a conta da <span style={{ color: "#EF5635" }}>Hot</span><span style={{ color: "#16487E", fontStyle: "italic" }}>Invest</span>.
            </h2>
            <div className={styles.grid}>
                {BENEFITS.map((b, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.icon}>{b.icon}</div>
                        <div className={styles.cardTitle}>{b.title}</div>
                        <div className={styles.cardDesc}>{b.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
