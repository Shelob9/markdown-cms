
import React, { Fragment, useMemo } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import GitApi from '../../lib/GitApi';
import Layout from '../../components/Layout/Layout';
import PostList from '../../components/Layout/PostList';
import { listItem } from '../../components/Layout/ItemList';
import ReactMarkdown from 'react-markdown';

const getPosts = (url) => {
    return fetch(url)
    .then(r => r.json())
}
const Files = ({ files }) => {
    const { data } = useSWR('/api/files', getPosts, { initialData: files });

    let thePosts = useMemo<listItem[]>(() => {
        return data && data.files ? data.files.map(({ sha, path }) => {
            path = path.replace('.md', '')
            let item : listItem = {
                id: path,
                title: path,
                to: `/posts/${path}`,
                content: '',
                date: ''
            }
            return item;
        }) : [];
    }, [data, files]);
    return (
        <>
            {thePosts ? <PostList
                posts={thePosts}
                RenderContent={({ post }) => (
                    <ReactMarkdown source={post.content.slice(0,55)} />
                )}
            />: <div>Loading</div>}
        </>
    );
}

export async function getStaticProps() {
	let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
    const files = await git.getFiles(undefined, 'md');
    return { props: { files } }
  }


export default Files