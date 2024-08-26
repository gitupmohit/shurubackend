const express = require('express')

require('dotenv').config()

const githubData = {
  "login": "gitupmohit",
  "id": 145444460,
  "node_id": "U_kgDOCKtObA",
  "avatar_url": "https://avatars.githubusercontent.com/u/145444460?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gitupmohit",
  "html_url": "https://github.com/gitupmohit",
  "followers_url": "https://api.github.com/users/gitupmohit/followers",
  "following_url": "https://api.github.com/users/gitupmohit/following{/other_user}",
  "gists_url": "https://api.github.com/users/gitupmohit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gitupmohit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gitupmohit/subscriptions",
  "organizations_url": "https://api.github.com/users/gitupmohit/orgs",
  "repos_url": "https://api.github.com/users/gitupmohit/repos",
  "events_url": "https://api.github.com/users/gitupmohit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gitupmohit/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-09-19T09:33:46Z",
  "updated_at": "2024-08-26T13:07:54Z"
}

const app = express()
const PORT = 3000

app.listen(process.env.PORT,()=>{
  console.log(`server is running on ${PORT}`)
})

app.get('/',(req,res) =>{
  res.send("welcome to my home page")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.get('/youtube',(req,res)=>{
  res.send("welcome to my youtube channel")
})

