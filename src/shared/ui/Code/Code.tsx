import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import classes from './Code.module.scss';
import Button from '../Button/Button';

interface CodeProps {
    className?: string,
    text: string;
}

const Code = (props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(classes.code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={classes.copyBtn}
            >
                Copy
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};

export default Code;
