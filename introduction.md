# Introduction

Meteor is pretty radical, as it blurs the division between front and back-end.

The concept is very interesting, but 1.2.1 simply does not feel mature enough for real apps.

Features:

-   server push for everything (try opening two browser tabs)

    Made to create single page applications.

    TODO: how it is documented.

    WebSockets based: <https://www.quora.com/How-does-Meteor-Javascript-platform-push-realtime-app-updates-to-all-clients-without-them-having-to-refresh>

-   identical JavaScript DB access from client and server: even stronger than a single language as in a Node.js framework like MEAN.

    Well, almost, because that would break up security... <https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/>

-   templates are updated automatically when underlying database is changed

-   user accounts out of the box

-   optimistic UI <http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation>

Downsides:

- very dynamic. Even classic "static pages" break if JavaScript is disabled. Harder for crawlers: <https://forums.meteor.com/t/where-does-meteor-stand-on-progressive-enhancement/2382>

## Name

Likely called meteor because of comet <https://en.wikipedia.org/wiki/Comet_%28programming%29>
