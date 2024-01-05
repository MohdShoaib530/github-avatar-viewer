import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import GitHubUserList from '../Main/Main';

function GithubUser() {
  const [searchTerm,setSearchTerm] =useState('');

  return (
    <div className="name-wrapper">
      <Navbar updateSearchTerm={setSearchTerm}/>
      {(searchTerm.length == 0 ) ? <p>hello</p> : <GitHubUserList key={searchTerm} userName={searchTerm}/> }
    </div>
  );
}

export default GithubUser;
