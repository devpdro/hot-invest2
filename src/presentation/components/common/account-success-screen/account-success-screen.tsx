'use client'

import { useEffect } from 'react';

import { IMAGE } from 'src/presentation/assets';

import { FiCheckCircle, FiX } from 'react-icons/fi';

import styles from './account-success-screen.module.scss';

interface AccountSuccessScreenProps {
    onClose?: () => void;
}

export default function AccountSuccessScreen({ onClose }: AccountSuccessScreenProps) {
    useEffect(() => {
        if (!onClose) return;
        const timer = setTimeout(() => {
            onClose();
        }, 1000000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={styles.successFullScreen}>
            {onClose && (
                <button className={styles.successCloseBtn} onClick={onClose} aria-label="Fechar">
                    <FiX size={28} />
                </button>
            )}
            <div className={styles.successIconFull}><FiCheckCircle size={64} color="var(--color-primary, #EF5635)" /></div>
            <h1 className={styles.successTitleFull}>Informações enviadas</h1>
            <p className={styles.successTextFull}>
                Seu pedido vai ser analisado e, se estiver tudo certo, uma resposta vai ser enviada para o seu e-mail cadastrado.
            </p>
            <img src={IMAGE.CELULAR_CARTAO.src} alt="App HotInvest" className={styles.successImgFull} />
        </div>
    );
} 