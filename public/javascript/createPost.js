async function createHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value.trim();
    const content = document.querySelector('#content-textarea').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title: title,
                content: content
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.createPost-form').addEventListener('submit', createHandler);