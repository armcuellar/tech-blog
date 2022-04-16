async function commentHandler(event) {
    event.preventDefault();

    const comment = document.querySelector('#comment-textarea').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment && post_id) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                comment_text: comment,
                post_id: post_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}



document.querySelector('.comment-form').addEventListener('submit', commentHandler);

