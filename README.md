# Markdown CMS

Github-backed markdown CMS.

This is an experiment [Josh](https://joshpress.net) made.

## Development

- Clone
  - `git clone git@github.com:Shelob9/markdown-cms.git`
- Setup env variables
  - `cp .env.example .env`
  - [see next section](#env-variables)
creating-a-personal-access-token)
- Install
  - `yarn`
- Start
  - `yarn dev`
- Test
  - `yarn test`

### Env Variables  

- Github API token
  - [Github Personal Access Token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/)
  - `GITHUB_API_TOKEN`
- Next Auth
  - [Env Varibles](https://next-auth.js.org/configuration/options#environment-variables)
  - [Github Provider](https://next-auth.js.org/providers/google)
    - [Create a Github app](https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-a-github-app)
  - `GITHUB_ID`
  - `GITHUB_SECRET`
  - `NEXTAUTH_URL=http://localhost:3202/api/auth`
  - `JWT_SIGNING_PRIVATE_KEY`

## Idea and Ideas

The idea here is to create a very simple API and markdown UI for a CMS.

### What It Is Built With

- [NextJS]()
  - [Next Auth](https://next-auth.js.org/)
- [TailwindCSS]()
- [TypeScript]()
- [octokit.js]()
  - [Great article on using Octokit with TypeScript](https://dev.to/lucis/how-to-push-files-programatically-to-a-repository-using-octokit-with-typescript-1nj0) that helped a ton.

### Ideas For Making This Useful
