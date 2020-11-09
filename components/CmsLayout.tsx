import React, { FC, ReactNode, useEffect } from 'react';
import Cms from './Cms';
import Main from './Main';

const CmsLayout: FC<{ children: ReactNode, TopBar: () => JSX.Element }> = ({ children, TopBar }) => {
    
    useEffect(() => {
        document.getElementById('__next')
        .setAttribute("style", "width:100%");
    },[])

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