# Meteor Cheat

Homepage: <https://www.meteor.com/>

Source code: <https://github.com/meteor/meteor>

1.  Theory
    1.  [meteor command](meteor-command.md)
1.  Examples
    1.  [min](min/)
    1.  [css](css/)
    1.  [two HTMLs](two-htmls/)
    1.  [Tag update](tag-update/)
    1.  [Method](method/)
    1.  Built-in samples
        1.  [Counter](counter/)
        1.  [Clock](clock/)
        1.  [leaderboard](leaderboard/)
        1.  [simple-todos](simple-todos/)
        1.  [simple-todos-react](simple-todos-react/)
        1.  [simple-todos-angular](simple-todos-angular/)
        1.  [localmarket](localmarket/)
    1.  TODO
        1.  [Update multi](update-multi/)

Install:

    curl https://install.meteor.com/ | sh

## File structure

- `app0.js`: server and client code in a single file since both Js! Cool.
- `app0.html`: not really HTML, but a template file in Meteor's Spacebar template language <https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md>, which is similar to handlebars.js <https://github.com/wycats/handlebars.js/>
- `app0.css`

### Project name

### Rename project

<https://forums.meteor.com/t/renaming-meteor-project/3509>

## Database

Meteor uses MongoDB by default.

TODO: possible to change that?

## Template language

<https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md>

### Data context

<https://www.discovermeteor.com/blog/a-guide-to-meteor-templates-data-contexts/>

    var profile = {
      avatar: 'avatar.jpg',
      name: {
        first: 'John',
        last: 'Smith'
      }
    }

We could very well write:

    <template name="profile">
      <h2>Profile</h2>
      {{#with profile}}
        <img src="{{avatar}}"/>
        {{#with name}}
          <p>{{first}} {{last}}</p>
        {{/with}}
      {{/with}}
    </template>

### this on helper

The current data context: <http://stackoverflow.com/questions/22432690/this-id-in-meteors-leader-board-example>

## Change URL

## Save some app state in the URL

TODO? `meteor.com` uses the hash part of the URL exclusively, e.g.: <http://docs.meteor.com/#/basic/>, where `#/basic` is the hash!

- <https://meteorhacks.com/meteor-ui-pattern-keeping-app-state-in-the-url/>
- <https://github.com/iron-meteor/iron-router>
- <http://www.manuel-schoebel.com/blog/iron-router-tutorial>

## Output formats

Meteor supports many kinds of clients, including:

- browser
- Android / iOS apps, apparently through Cordova: <http://www.stackoverflow.com/questions/31559417/how-do-meteor-android-ios-apps-work>

## Libraries

TODO what are the default libraries that ship with Meteor:

- utility: underscore, ...
- template engine?

## Session

equals vs get: <http://stackoverflow.com/questions/25629529/what-is-meteor-session-equals-used-for> Why equals since it is so specific and could be done with get?

## Mongo

<http://docs.meteor.com/#/basic/Mongo-Collection>

Does not seem the same as MongoDB Node.js API on the server: <https://mongodb.github.io/node-mongodb-native/> as it is identical on both client and server! But the syntax is close.

Used to be `Meteor.Collection`: <http://stackoverflow.com/questions/25756664/is-it-mongo-collection-or-meteor-collection>

## Testing

No standard: <http://stackoverflow.com/questions/12987525/meteor-test-driven-development>

## Packages

<https://atmospherejs.com/>
