import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from 'entities/Comment/model/types/comment';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(classes.commentCard, {}, [className])}>
                <div className={classes.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={classes.username} />
                </div>
                <Skeleton className={classes.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(classes.commentCard, {}, [className])}>
            <div className={classes.header}>
                {comment.user.avatar && (<Avatar size={30} src={comment.user.avatar} />)}
                <Text className={classes.username} title={comment.user.username} />
            </div>
            <Text className={classes.text} text={comment.text} />
        </div>
    );
};

export default memo(CommentCard);
