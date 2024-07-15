import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export const useMutationHook = (fnCallback) => {
    const [isLoading, setIsLoading] = useState(false);

    const mutation = useMutation({
        mutationFn: fnCallback,
        onMutate: () => {
            setIsLoading(true);
        },
        onSettled: () => {
            setIsLoading(false);
        }
    })
    return { ...mutation, isLoading };
}

