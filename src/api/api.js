const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");
    if (!response.ok) {
      throw new Error('Network error');
    }
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; 
  }
};

const fetchPrice = async () => {
  try {
    const response = await fetch("http://localhost:3000/prices");
    if (!response.ok) {
      throw new Error('Network error');
    }
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error; 
  }
};

export { fetchPosts, fetchPrice };
