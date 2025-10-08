import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        console.log('enter');
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        console.log('leave');
        setIsHover(false);
    }, []);

    return useMemo<UseHoverResult>(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
};
