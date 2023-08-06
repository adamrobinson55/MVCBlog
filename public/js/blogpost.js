const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#comment-title').value.trim();
    const text = document.querySelector('#comment-text').value.trim();

    if (title &&  text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ title: title, text: text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('nice')
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('nice')
      } else {
        alert('Failed to delete comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  