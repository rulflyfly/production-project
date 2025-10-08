import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article/model/types/article';
import BigIcon from 'shared/assets/icons/big.svg';
import SmallIcon from 'shared/assets/icons/small.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import classes from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string,
    view?: ArticleView,
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigIcon,
    },
];

const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(classes.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}

                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [classes.notSelected]: viewType.view !== view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
};

export default memo(ArticleViewSelector);
