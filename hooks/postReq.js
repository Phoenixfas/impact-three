const usePost = async (url, body, token) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }

    try {
        const res = await fetch(`/api/${url}`, config);
        const json = await res.json();
        // const data = json.data;
        return json;
    } catch (error) {
        console.log(error)
    }

};

export default usePost;
