
import React, { Fragment, useMemo } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import GitApi from '../../lib/GitApi';
import Layout from '../../components/Layout/Layout';

const getPosts = (url) => {
    return fetch(url)
    .then(r => r.json())
}
const Files = ({ files }) => {
    const { data } = useSWR('/api/files', getPosts, { initialData: files });
    console.log(data);
    let theFiles = useMemo(() => {
        return data && data.files ? data.files.map(({name,path}) => {
            return {
                name,
                path: path.replace('.md', '')
            }
        }) : files;
    }, [data, files]);
    console.log(data, theFiles);
    return (
        <>
            {theFiles ? (
                <ul>
                    {theFiles.map(({ name, path }) => (
                        <li key={`${name}-${path}`}>
                            <Link href={`/posts/${name}`}>
                                <a>{path}</a>
                            </Link>
                        </li>)
                    )}
                </ul>) : <div>Loading</div>}
        </>
    );
}

export async function getStaticProps() {
	let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
    const files = await git.getFiles(undefined, 'md');
    return { props: { files } }
  }


export default Files