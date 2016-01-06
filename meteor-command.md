# meteor command

Create a new project in a directory called `project-name`:

    meteor create project-name

This creates a `.meteor` folder, with an appropriate `.meteor/.gitignore` inside of it.

Create a project named after the parent directory:

    meteor create .

Start development server:

    meteor

List demo projects:

    meteor create --list

Create a demo project:

    meteor create --example clock

The server watches your project, and makes you browser refresh automatically! How: <http://stackoverflow.com/questions/10103470/how-does-meteor-update-the-browser>

Likely server sent events.

Interact with database:

    meteor mongo
