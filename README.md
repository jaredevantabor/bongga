# bongga
Bongga Philippines

This is the repo for the Bongga Philippines site. Please contact bonggaphilippines.org if you are interested in contributing.

## Getting started

To contribute to Bongga you'll need a text editor of your choice, access to a terminal, and access to AWS. I recommend Visual Studio
(`https://code.visualstudio.com/download`) for text, and iTerm (`https://www.iterm2.com/downloads.html`) for the terminal.
Access to AWS must be manually added per contributer, so please contact me for access. You'll also need to create a Github account
to download this repository, as well as git for the command line (`https://git-scm.com/downloads`).
You'll also need to install node/npm (`https://nodejs.org/en/`).

### Step 1: Clone repo to your local machine

Open a terminal window, and run the following command to clone this repository locally.
```
git clone https://github.com/jaredevantabor/bongga.git
```

### Step 2: Install the dependencies and begin the developement server

Once downloaded, you can start the local dev server using the following command:
```
npm run start
```
This will run the website in the browser at `http://localhost:3000`. Any changes made to the
codebase will automatically reload in the browser.

### Step 3: Commit changes and push to Github

It's recommended to use branching techniques and Peer Reviews (PR's) to contribute to the bongga
project. Doing development work on a feature branch and creating a PR is the preferred method of
contributing to the project. Here is a quick resource for branching and merging techniques with git:
`https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging`. Please reach out if you need
assistance getting setup with git.

### Step 4: Publishing your changes to Github and AWS

Assuming you've been given access to the AWS instance, changes pushed to this repository can
automatically be published to the production environment. To publish the repo, run the following command.
```
npm run build
``` 
and then

```
npm run deploy
```
This will build the site and deploy it directly to AWS.