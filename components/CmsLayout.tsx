import Link from 'next/link';
import React, { FC, ReactNode, useEffect, useRef } from 'react';
import Cms from './Cms';
import Main from './Main';

let navItems :{ to: string, label: string }[] = [
    { to: '/cms/files', label: 'Item List' },
    { to: '/cms/new', label: 'New Item' },
]
const CmsHeader = () => (
    <header className={'container mx-auto flex-auto relative border-t border-gray-200 dark:border-gray-800'}>


        <ul className="flex">
            {navItems.map(({ label, to }) => (
                <li className="mr-6" key={to}>
                    <Link href={to}>
                        <a className="text-blue-500 hover:text-blue-800" href="#">
                            {label}
                        </a>
                    </Link> 
              </li>
            ))}
            </ul>
    </header>
)
const CmsLayout: FC<{ children: ReactNode, TopBar: () => JSX.Element }> = ({ children, TopBar }) => {
    

    useEffect(() => {
        if (document && document.getElementById('__next')) {
            document.getElementById('__next')
        .setAttribute("style", "width:100%");
        }
        
    },[])

    return (
        <>
                <CmsHeader />
              <Main>
                <Cms>
                    <TopBar />
                    {children}
                </Cms>      
            </Main>
        </>
    )
};

export default CmsLayout;