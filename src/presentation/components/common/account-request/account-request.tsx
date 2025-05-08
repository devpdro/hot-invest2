import styles from "./account-request.module.scss";

export default function AccountRequest() {
    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <h2 className={styles.title}>
                    Complete os campos ao lado para pedir sua Conta e Cartão de crédito
                </h2>
                <div className={styles.illustration}>
                    {/* Substitua por suas imagens */}
                    <img src="/images/app-mockup.png" alt="App Nubank" className={styles.appImg} />
                    <img src="/images/card-mockup.png" alt="Cartão Nubank" className={styles.cardImg} />
                </div>
            </div>
            <div className={styles.right}>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="CPF" />
                    <input className={styles.input} type="text" placeholder="Nome Completo" />
                    <input className={styles.input} type="text" placeholder="Celular" />
                    <input className={styles.input} type="email" placeholder="E-mail" />
                    <input className={`${styles.input} ${styles.inputPurple}`} type="email" placeholder="Confirmação de E-mail" />
                    <div className={styles.terms}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta{" "}
                            <a href="#" target="_blank" rel="noopener noreferrer">Política de Privacidade.</a>
                        </label>
                    </div>
                    <button className={styles.button} disabled>Enviar</button>
                </form>
            </div>
        </section>
    );
} 