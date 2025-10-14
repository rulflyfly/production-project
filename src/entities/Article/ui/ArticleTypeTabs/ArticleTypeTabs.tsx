import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'pages/ArticlesPage';

interface ArticleTypeTabsProps {
    className?: string,
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: 'All',
        },
        {
            value: ArticleType.ECONOMICS,
            content: 'Economics',
        },
        {
            value: ArticleType.IT,
            content: 'IT',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'Science',
        },

    ], []);

    const handleCahngeType = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (

        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={handleCahngeType}
            className={classNames('', {}, [className])}
        />

    );
};

export default memo(ArticleTypeTabs);
