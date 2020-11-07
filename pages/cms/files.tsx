
import React, { Fragment } from 'react';
import useSWR from 'swr';
import CmsLayout from '../../components/CmsLayout';
import Link from 'next/link';
const fetcher = (url) => {
    return fetch(url).then(r => r.json());
}
const Files = () => {
    const { data } = useSWR('/api/files', fetcher)
    let { files } = data;
    return (
        <CmsLayout TopBar={() => <Fragment />}>
            <ul>
                {files.map(({name,path}) => (
                    <li key={`${name}-${path}`}>
                        <Link href={`/cms/edit?name=${name}&path=${encodeURI(path)}`}>
                            <a>{path}</a>
                        </Link>
                    </li>)
                )}
            </ul>
            </CmsLayout>
    );
}



export default Files