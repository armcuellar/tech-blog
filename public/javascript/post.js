
async function switchToCreate(event) {
    document.location.replace('/post');
}

document.querySelector('#addPost').addEventListener('click', switchToCreate);