import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content/app-content'
import style from './App.css';

class App extends Component {
  state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      perPage: 3
    }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    console.log(page);
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.state.perPage}&page=${page}`
  }

  handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
      .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type, page) {
    return (e) => {
      console.log('page: ', page)
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type, page))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return (<div className={style.app}>
    <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
      handlePagination={(type, page) => this.getRepos(type, page)()}
    />
    </div>)
  }
}

export default App;