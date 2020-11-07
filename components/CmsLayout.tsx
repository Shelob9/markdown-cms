import React, { FC, ReactNode } from 'react';
import Cms from './Cms';
import Main from './Main';

const CmsLayout : FC<{children:ReactNode,TopBar: () => JSX.Element}> = ({children,TopBar}) => {

    return (
        <Main>
            <Cms>
                <TopBar />
                {children}
            </Cms>      
        </Main>
    )
};

export default CmsLayout;