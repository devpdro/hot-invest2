'use client'

import React, { useState, useRef } from 'react';
import styles from './mission.module.scss';

const articles = [
    {
        image: 'https://s3.amazonaws.com/nu-images-prod/newsroom/2023/11/FRIENDS-Experience-Nubank-1.jpg',
        title: 'The FRIENDS™ Experience: saiba o que você vai encontrar na exposição baseada na série',
        link: '#',
    },
    {
        image: 'https://s3.amazonaws.com/nu-images-prod/newsroom/2022/11/criptoativos-nubank-crypto.jpg',
        title: 'Como trocar criptoativos dentro do app pelo Nubank Cripto?',
        link: '#',
    },
    {
        image: 'https://s3.amazonaws.com/nu-images-prod/newsroom/2023/11/FRIENDS-Experience-Nubank-2.jpg',
        title: 'Nubank te leva para a The FRIENDS™ Experience: saiba como concorrer a ingressos para a exposição que celebra 30 anos da série',
        link: '#',
    },
    {
        image: 'https://s3.amazonaws.com/nu-images-prod/newsroom/2022/11/saque-cartao-credito-nubank.jpg',
        title: 'Saque do Nubank com cartão de crédito: serviço está disponível',
        link: '#',
    },
];

function getSlidesPerView() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

export default function Mission() {
    const [current, setCurrent] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    const trackRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleResize() {
            setSlidesPerView(getSlidesPerView());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const total = articles.length;

    function goTo(idx: number) {
        let next = idx;
        if (next < 0) next = total - 1;
        if (next > total - 1) next = 0;
        setCurrent(next);
    }

    function nextSlide() {
        goTo(current + 1);
    }
    function prevSlide() {
        goTo(current - 1);
    }

    // Para loop infinito visual, duplicar os slides (opcional para UX mais suave)
    // Aqui, apenas faz o loop lógico

    // Calcular o deslocamento
    const offset = -(current * (100 / slidesPerView));

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Fique por dentro das novidades</h2>
                <button className={styles.blogBtn}>Ir para o blog</button>
            </div>
            <div className={styles.carouselWrapper}>
                <button className={styles.prevBtn} aria-label="Anterior" onClick={prevSlide}>&#60;</button>
                <div className={styles.carousel}>
                    <div
                        className={styles.track}
                        ref={trackRef}
                        style={{
                            width: `${(100 * articles.length) / slidesPerView}%`,
                            transform: `translateX(${offset}%)`,
                            transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)'
                        }}
                    >
                        {articles.map((article, idx) => (
                            <div
                                className={styles.slide}
                                key={idx}
                                style={{ width: `${100 / articles.length}%` }}
                            >
                                <div className={styles.card}>
                                    <div className={styles.cardImage}>
                                        <img src={article.image} alt={article.title} />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardTitle}>{article.title}</div>
                                        <a href={article.link} className={styles.cardLink}>
                                            Ir para o artigo <span className={styles.arrow}>&#8594;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={styles.nextBtn} aria-label="Próximo" onClick={nextSlide}>&#62;</button>
            </div>
        </section>
    );
}
