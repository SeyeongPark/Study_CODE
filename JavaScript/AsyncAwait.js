// Stop and wait until sth is resolved.

// async : to represent that the function is an asynchtonos function
// The async function returns a promise.


const showPost = async() => {
    const res = await fatch('https:website.com/post')
}

showPost();