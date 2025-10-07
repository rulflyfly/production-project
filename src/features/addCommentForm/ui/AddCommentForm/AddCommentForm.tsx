import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getAddCommentFormError, getAddCommentFormText }
    from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string,
    onSendComment: (value: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onCommentTextChange(' ');
        if (text) onSendComment(text);
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(classes.addCommentForm, {}, [className])}>
                <Input
                    className={classes.input}
                    placeholder="Enter your comment"
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                >
                    Send
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
