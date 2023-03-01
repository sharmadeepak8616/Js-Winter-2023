/**
 * Install Git Bash (ONLY for Windows):
 * https://www.educative.io/answers/how-to-install-git-bash-in-windows
 * 
 * 
 * Install git in machine:
 * https://github.com/git-guides/install-git
 * 
 * 
 * Create github account:
 * 1. Go to https://www.github.com
 * 2. Click on Sign Up
 * 3. Complete the Sign Up steps
 * 4. Verify your email address
 * 
 * 
 * Connect github account with machine:
 * 1. Create a secret password (SSH-Key) in machine
 *      a) Open Terminal/Gitbash
 *      b) Enter command -> ssh-keygen -t rsa -b 4096 -C "yourEmailAddress@company.com"
 *      c) when ask for "Enter file in which to save the key", Press ENTER
 * 2. To view the generated SSH key
 *      a) Open Terminal/Gitbash
 *      b) Enter command -> cat .ssh/id_rsa.pub
 * 3. Add the SSH-Key in Github profile.
 *      a) Login in Github.com
 *      b) Click on Profile icon
 *      c) Click on Settings
 *      d) Click on SSH and GPG Keys
 *      e) Click on New SSH Key
 *      f) Enter Title
 *      g) Paste ssh-key
 *      h) Click "Add SSH Key"
 * 
 * 
 * Create repository in Github:
 * 1. Log in github.com
 * 2. Click "New" button
 * 3. Enter "Repository Name" -> Js-Winter-2023
 * 4. Select 'Add a README file'
 * 5. Click 'Create Repository' button
 * 
 * 
 * Let's clone the repository in local
 * 1. Open Terminal/GitBash
 * 2. Using cd-command, go to folder in which you want to clone the repository
 * 3. using "git clone" command, clone the repo in local
 * 
 * 
 * Download node/npm:
 * 1. Go to https://nodejs.org/en/download/
 * 2. Click on the operating system
 * 3. Double click the downloaded installer
 * 4. Complete the installation flow
 * 5. Open Terminal/GitBash application
 * 6. Verify node is installed successfully, command -> node -v
 * 7. Verify npm is installed successfully, command -> npm -v
 * 
 * 
 * Download VS-Code:
 * 1. https://code.visualstudio.com/download
 * 2. Click on the operating system
 * 3. Double click the downloaded installer
 * 4. Complete the installation flow
 * 5. Drag and drop VS-Code into Applications (ONLY for Mac)
 * 
 * 
 * Create Node-Js project:
 * 1. Open Terminal/Gitbash
 * 2. cd to repo-local
 * 3. Enter command -> npm init -y
 * 
 * 
 * Let's start working in local-repo using VS-Code with Javascript:
 * 1. Open local-repo through VS-Code
 * 2. Create a new folder (name: Modules)
 * 3. Create a new folder (name: Class1) in above created folder
 * 4. Create a file (eg: File1.js) in above created folder
 * 4. Add Js-code in the file
 * 5. Drag and open Terminal in the VS-Code
 * 6. Execute the file using node-command
 *      Command -> node file-path
 *
 * 
 * Let's send(or push) the files/folders in github
 * 1. Open Terminal/Gitbash application
 * 2. Using cd-command, go to the repo in local
 * 3. Using "git add" command, add files/folders which you want to push into github
 * 4. Using "git commit" command, add commit for the added files
 * 5. Using "git push" command, push the added files/folders into github.
 * 
 */