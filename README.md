# Meteor Cheat

Homepage: <https://www.meteor.com/>

Source code: <https://github.com/meteor/meteor>

1.  Theory
    1.  [meteor command](meteor-command.md)
1.  Examples
    1.  [min](min/)
    1.  [css](css/)
    1.  [two-htmls](two-htmls/)
    1.  Built-in samples
        1.  [Counter](counter/)
        1.  [Clock](clock/)
        1.  [leaderboard](leaderboard/)
        1.  [simple-todos-react](simple-todos-react/)
        1.  [simple-todos-angular](simple-todos-angular/)
        1.  [localmarket](localmarket/)

Install:

    curl https://install.meteor.com/ | sh

## File structure

- `app0.js`: server and client code in a single file since both Js! Cool.
- `app0.html`: not really HTML, but a template file in Meteor's Spacebar template language <https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md>
- `app0.css`

### Project name

### Rename project

<https://forums.meteor.com/t/renaming-meteor-project/3509>

## Database

Meteor uses MongoDB by default.

TODO: possible to change that?

## Template language

https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md

## Output formats

Meteor supports many kinds of clients, including:

- browser
- Android / iOS apps, apparently through Cordova: <http://www.stackoverflow.com/questions/31559417/how-do-meteor-android-ios-apps-work>

## Source tree

- `examples/`: example applications. Just `cd` into them and `meteor` to launch.
