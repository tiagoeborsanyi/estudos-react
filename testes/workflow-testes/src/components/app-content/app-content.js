import React from 'react';
import PropTypes from 'prop-types';
import Search from '../search/search'
import UserInfo from '../user-info/user-info'
import Actions from '../actions/actions'
import Repos from '../repos/repos'
import style from '../../App.css';

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className={style.app}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.repos.length &&
      <Repos
        className={style.repos}
        title='Repositórios:'
        repos={repos}
        handlePagination={(clicked) => handlePagination('repos', clicked) }
      />
    }

    {!!starred.repos.length &&
      <Repos
        className={style.starred}
        title='Favoritos:'
        repos={starred}
        handlePagination={(clicked) => handlePagination('starred', clicked) }
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.object.isRequired,
  starred: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent