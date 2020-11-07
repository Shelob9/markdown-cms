
import React, { Fragment, useMemo } from 'react';
import useSWR from 'swr';
import CmsLayout from '../../components/CmsLayout';
import Link from 'next/link';
import GitApi from '../../lib/GitApi';
const Files = ({ files }) => {
    const { data } = useSWR('/api/files',undefined,{initialData:files});
    let theFiles = useMemo(() => {
        return data && data.files ? data.files : files;
    },[data,files])
    return (
        <CmsLayout TopBar={() => <Fragment />}>
            {theFiles ? (
                <ul>
                    {theFiles.map(({ name, path }) => (
                        <li key={`${name}-${path}`}>
                            <Link href={`/cms/edit?name=${name}&path=${encodeURI(path)}`}>
                                <a>{path}</a>
                            </Link>
                        </li>)
                    )}
                </ul>) : <div>Loading</div>}
            </CmsLayout>
    );
}

export async function getStaticProps() {
	let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
    const files = await git.getFiles(undefined, 'md');
    return { props: { files } }
  }


export default Files