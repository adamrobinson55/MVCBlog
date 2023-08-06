const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title= document.querySelector('#blogpost-title').value.trim();
    const text = document.querySelector('#blogpost-text').value.trim();
  
    if (title &&  text) {
      const response = await fetch(`/api/blogposts`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blogpost');
      }
    }
  };
  
  document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogpost-list')
    .addEventListener('click', delButtonHandler);
  