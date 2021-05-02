import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
)

FileList.propTypes = {
  files: PropTypes.array
}

const testFiles = [
  {
    id: 1, 
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2021-03-27 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3, 
    name: 'README',
    type: 'file', 
    updated_at: "2021-04-18 21:24:00",
    latestCommit: {
      message: "Added a readme"
    }
  }
]; 

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    {getFileName(file)}
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

const FileIcon = ({ file }) => {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = 'fa-folder';
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`}/>
    </td>
  );
}

const getFileName = (file) => {
  return [<FileIcon file={file} key={0}/>,
    <td className="file-name" key={1}> {file.name }</td>
  ];
}

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
    {commit.message}
  </td>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}

// function Time({ time }) {
//   return (
//     <div></div>
//   );
// }



ReactDOM.render(
  <FileList files={testFiles}/>, 
  document.getElementById('root')
);