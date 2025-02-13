# Website for AUV/Robosub at Cal State LA
This is the website for the AUV team at California State University, Los Angeles.
The website is displays the work of both Club Members and Senior Design members.
Additionally, it is used to showcase the different autonomous vehicles our team
at Cal State LA have developed. It also fulfills a part of the requirements
of the international Robosub competition, in which we participate in annually.

On the website, you can also find useful information regarding events and the
process of working on the robotic submarines.

The website is created with React-Bootstrap and JavaScript.
(See [React-Bootstrap Docs](https://https://react-bootstrap.github.io/) for more
information on working with React-Bootstrap.)

You can view the website at https://robosubla.com.

## Getting started
1. The website is using `npm` as its package manager, since we need to download
   all the  packages that the websites is dependent on. You do this by running
   the following command in the project folder:

    `npm install`

    *If there are vulnerabilities:

    `npm audit fix`

2. After all the packages are installed, we use:

    `ng serve` (industry standard)

      or

    `npm start`

   This will start the project through a local development server on the
   location: `http://localhost:3000`.

3. To update or change the website, make a new branch from `master` and push
   and commit future changes to this branch.

    To make a new branch use the command:

     `git checkout -b <Branch Name>`

    The branch name should reflect the updates to be made on the website.

4. When you have made your changes on the new branch and wish to deploy them,
   create a pull request to merge it into the `master` branch. The `master`
   branch is what gets built and displayed on the actual website.
