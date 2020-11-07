import React, { FC, ReactNode } from 'react';
import Main from './Main';

const CmsLayout : FC<{children:ReactNode,TopBar: () => JSX.Element}> = ({children,TopBar}) => {

    return (
        <Main>
            <TopBar />
            {children}
        </Main>
    )
};

export default CmsLayout;