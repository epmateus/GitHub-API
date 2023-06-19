const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl}" alt="foto do perfil do usuário" />
                             <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                <p>Seguidores: ${user.followers}</p>
                                <p>Seguindo: ${user.following}</p>
                            </div>
                       </div>`

        let eventsItens = ''

        const filteredEvents = user.events.filter(even => even.type === "CreateEvent" || even.type === "PushEvent");
        const slicedEvents = filteredEvents.slice(0, 10);

        slicedEvents.forEach(even => {
            const repoName = even.repo ? even.repo.name : '';
            const commitMessage = even.payload && even.payload.commits && even.payload.commits.length > 0 ? even.payload.commits[0].message : '';
                    
            eventsItens += `<li><h4>${repoName}</h4><p>-${commitMessage}</p></li>`;
        });
        
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                <h2>Eventos</h2>
                <ul class="event-list">${eventsItens}</ul>
            </div>`
        }

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
            <li class="repository-list">
                <a href="${repo.html_url}" target="_blank">
                    <h3>${repo.name}</h3>
                    <div>
                        <ul class="repository-infos">
                            <li>🍴 ${repo.forks_count}</li>
                            <li>⭐ ${repo.stargazers_count}</li>
                            <li>👀 ${repo.watchers_count}</li>
                            <li>👨‍💻 ${repo.language}</li>
                        </ul>
                    </div>
                </a>
            </li>`);

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }