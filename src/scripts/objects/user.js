const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName:'',
    followers: '',
    following: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setEvents(event){
        this.events = event.map(even => {
            return {
                ...even,
                name: this.repo ? this.repo.name : null,
                commit: this.payload && this.payload.commits && this.payload.commits.length > 0 ? this.payload.commits[0].message : null,
            };
        }).filter(event => event.commit !== undefined);
    },
    setRepositories(repositories){
        this.repositories = repositories.map(repo => {
            return {
                ...repo,
                forks: this.forks,
                stars: this.stargazers_count,
                watchers: this.watchers,
                language: repo.language || 'Não especificado'
            }
        })
    }
}

export { user }