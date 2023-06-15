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
        user.events.forEach(even => eventsItens += `<li><a href="${even.events_url}" target="_blank">${even.name}</a></li>`)

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Eventos</h2>
                <ul>${eventsItens}</ul>
            </div>`
        }

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

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