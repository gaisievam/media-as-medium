const url = 'https://jsonplaceholder.typicode.com/posts';

function loadArticles() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const newsList = document.querySelector('.newsList');
            data.forEach(item => {
                const newArticle = document.createElement('div');
                newArticle.classList.add('thirdNews');

                newArticle.innerHTML = `
                    <div class="tleft">
                        <div class="top">
                            <div class="infoTop">
                                <img class="account" src="./images/acc1.png" alt="account">
                                <a class="Auth">Authors name</a>
                                <p class="in">in</p>
                                <a class="topic" href="">Topics name</a>
                                <div class="dot">&#183</div>
                                <p class="date">7 july</p>
                            </div>
                            <div class="descriptionZone">
                                <a href="secondPage.html" onclick="saveTitle('${item.title}')" style="text-decoration:none; color:black;" class="titleOfDescription">
                                    <div class="ttitleOfDescription">${item.title}</div>
                                </a>
                                <div class="description">${item.body}</div>
                            </div>
                        </div>
                        <div class="infoBottom">
                            <div class="Info">
                                <button class="button">Java Script</button>
                                <p class="pText1">12 min read</p>
                                <div class="infosDot">&#183</div>
                                <p class="pText2">Selected for you</p>
                            </div>
                            <div class="actions">
                                <div class="icon_1"></div>
                                <div class="icon_2"></div>
                                <div class="icon_3"></div>
                            </div>
                        </div>
                    </div>
                    <img class="smguy" src="./images/sm_guy.png" alt="some_guy">
                `;

                newsList.appendChild(newArticle);
            });
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

function saveTitle(title) {
    localStorage.setItem('selectedTitle', title);
}

loadArticles();
