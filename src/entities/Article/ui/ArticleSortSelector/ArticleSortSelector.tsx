import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/types';
import classes from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;

    const orderOption = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: 'Asc',
        },
        {
            value: 'desc',
            content: 'Desc',
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: 'Created at',
        },
        {
            value: ArticleSortField.TITLE,
            content: 'Title',
        },
        {
            value: ArticleSortField.VIEWS,
            content: 'Views',
        },
    ], []);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(classes.articleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label="Sort by"
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOption}
                label="Direction"
                value={order}
                onChange={changeOrderHandler}
                className={classes.order}
            />
        </div>
    );
};

export default memo(ArticleSortSelector);
