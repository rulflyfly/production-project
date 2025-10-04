import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import Text from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment/model/types/comment';
import classes from './CommentList.module.scss';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = (props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    return (
        <div className={classNames(classes.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard isLoading={isLoading} className={classes.comment} comment={comment} key={comment.id} />
                ))
                : <Text text="No comments" />}
        </div>
    );
};

export default memo(CommentList);
