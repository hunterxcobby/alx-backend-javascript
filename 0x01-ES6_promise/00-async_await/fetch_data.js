
async function Fetch(url) {
    try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result.followers);
    } catch (error) {
       console.log('This is the error', error) 
    }
        
}

Fetch('https://api.github.com/users/hunterxcobby'); git commit --
date="2024-04-21 HH:MM:SS" -m "add a chapter async an
d await"