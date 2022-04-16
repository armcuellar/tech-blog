async function updateHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#updatedTitle').value.trim();
    const content = document.querySelector('#updated-textarea').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'put',
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

async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.updatePost-form').addEventListener('submit', updateHandler);
document.querySelector('#deletePost').addEventListener('click', deleteFormHandler);