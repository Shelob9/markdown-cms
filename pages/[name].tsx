import GitApi from "../lib/GitApi";
import ReactMarkdown from "react-markdown";
import Main from "../components/Main";
import useSWR from "use-swr";
import { useLayoutEffect, useState } from "react";

let fetchPost = async (url) => fetch(url).then( r => r.json())
function Post({ post,name }) {
    let [content, setContent] = useState(post.content);

    useLayoutEffect(() => {
        fetchPost(`/api/content?path=${name}`).then((r) => {
            console.log(r);
        });
    });
    return (
        <Main>
            <ReactMarkdown source={content} />
        </Main>
    )
}
  
  // This function gets called at build time
  export async function getStaticPaths() {
    let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
    const files = await git.getFiles(undefined, 'md');
    // Get the paths we want to pre-render based on posts
    const paths = files.map((file) => ({
      params: { name: file.name.replace('.md', '') },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
export async function getStaticProps({ params }) {
    let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
    let { name } = params;
    let post = await git.getFile(`${name}.md`);
    // Pass post data to the page via props
    return { props: { post,name } }
  }
  
  export default Post