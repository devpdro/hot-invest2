"use client";

import React, { useRef, useEffect, useState } from "react";

import styles from "./steps-open.module.scss";

const STEPS = [
    'Baixe o app do HotInvest na loja do seu celular e abra-o.',
    'Toque em "Criar conta" e preencha seus dados pessoais de forma rápida e segura.',
    'Escolha seu tipo de conta e personalize seus produtos — como cartão, investimentos e mais.',
    'Confirme suas informações, aceite os termos e pronto! Sua conta estará ativa em poucos minutos.',
];

const StepsOpen = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function handleScroll() {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalHeight = rect.height;

            let percent = 0;

            if (totalHeight > windowHeight) {
                // Seção maior que viewport (comportamento original)
                const start = Math.max(0, -rect.top);
                if (rect.top <= 0 && rect.bottom >= windowHeight) {
                    percent = Math.min(1, start / (totalHeight - windowHeight));
                } else if (rect.top > 0) {
                    percent = 0;
                } else if (rect.bottom < windowHeight) {
                    percent = 1;
                }
            } else {
                // Seção menor ou igual ao viewport
                if (rect.top >= 0 && rect.bottom <= windowHeight) {
                    percent = 1;
                } else if (rect.top > 0) {
                    percent = 0;
                } else if (rect.bottom < windowHeight) {
                    percent = 1;
                } else {
                    // Parcialmente visível
                    percent = Math.min(1, (windowHeight - rect.top) / totalHeight);
                    percent = Math.max(0, percent);
                }
            }

            setProgress(percent);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="abra-sua-conta" className={styles.section}>
            <h2 className={styles.title}>Abra sua conta no Hot<span style={{ color: "#16487E", fontStyle: "italic" }}>Invest</span> em poucos minutos</h2>
            <div className={styles.cardWrapper}>
                <div className={styles.card} ref={containerRef}>
                    <div className={styles.lineContainer}>
                        <div className={styles.lineBg}></div>
                        <div
                            className={styles.lineProgress}
                            style={{ height: `${progress * 100}%` }}
                        ></div>
                    </div>
                    <div className={styles.steps}>
                        {STEPS.map((desc, idx) => (
                            <div className={styles.stepRow} key={idx}>
                                <div className={styles.stepNum}>{String(idx + 1).padStart(2, "0")}</div>
                                <div className={styles.stepDesc}>{desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsOpen;
