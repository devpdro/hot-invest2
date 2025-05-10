'use client'

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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

export default function Mission() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
        slidesToScroll: 1,
        dragFree: false,
        containScroll: 'trimSnaps',
        breakpoints: {
            '(max-width: 767px)': { slidesToScroll: 1 },
            '(min-width: 768px) and (max-width: 1023px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 },
        },
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerColumn}>
                    <h2 className={styles.title}>Fique por dentro das novidades</h2>
                    <div className={styles.controls}>
                        <button
                            className={styles.prevBtn}
                            aria-label="Anterior"
                            onClick={() => emblaApi && emblaApi.scrollPrev()}
                            disabled={!canScrollPrev}
                        >
                            &#60;
                        </button>
                        <button
                            className={styles.nextBtn}
                            aria-label="Próximo"
                            onClick={() => emblaApi && emblaApi.scrollNext()}
                            disabled={!canScrollNext}
                        >
                            &#62;
                        </button>
                    </div>
                    <button className={styles.blogBtn}>Ir para o blog</button>
                </div>
                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel} ref={emblaRef}>
                        <div className={styles.track}>
                            {articles.map((article, idx) => (
                                <div className={styles.slide} key={idx}>
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
                </div>
            </div>
        </section>
    );
}
