import React from 'react';
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import style from '../App.css';

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className={style.app}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        className={style.repos}
        title='Repositórios:'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className={style.starred}
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent