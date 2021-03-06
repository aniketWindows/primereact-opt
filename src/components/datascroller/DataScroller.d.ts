import * as React from 'react';

interface DataScrollerLazyLoadParams {
    first: number;
    rows: number;
}

export interface DataScrollerProps {
    id?: string;
    value?: any[];
    rows?: number;
    inline?: boolean;
    scrollHeight?: string;
    loader?: boolean;
    buffer?: number;
    style?: object;
    className?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    lazy?: boolean;
    onLazyLoad?(e: DataScrollerLazyLoadParams): void;
    itemTemplate?(item: any): React.ReactNode;
}

export declare class DataScroller extends React.Component<DataScrollerProps, any> {
    public load(): void;
}
