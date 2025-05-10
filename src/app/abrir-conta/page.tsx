'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { makeOpenAccount } from 'src/main/factories/pages';
import { Suspense } from 'react';

function OpenAccountWithSearchParams() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const cpf = searchParams.get('cpf') || '';

    useEffect(() => {
        if (cpf) {
            router.replace('/abrir-conta');
        }
    }, [cpf, router]);

    return makeOpenAccount({ cpf });
}

export default function OpenAccountPage() {
    return (
        <Suspense fallback={null}>
            <OpenAccountWithSearchParams />
        </Suspense>
    );
}
