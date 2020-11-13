import React, { FC } from 'react';
import DropdownCombobox, { selectItems } from '../../components/DropdownCombobox';
import {getRepos} from '../../lib/GitApi';

const Repo: FC<{ repos: selectItems }> = ({ repos }) => {
    let onSave = (repo) => {
        console.log(repo);
     };
    return <DropdownCombobox items={repos} onSave={onSave} />
}

export async function getStaticProps() {
    let data = await getRepos();
    //@ts-ignore
    let repos = data.data.map(repo => {
        return {
            id: repo.id,
            label: repo.full_name
        }
    })
    return { props: { repos} }
}
  
export default Repo;
