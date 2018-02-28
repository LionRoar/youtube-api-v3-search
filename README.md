# youtube-api-v3-search

### YouTube Search Google API for [Node.js](https://nodejs.org/en) and the Browser using

* Search for YouTube videos, channels, playlists and live events via Google API for both [Node.js](https://nodejs.org/en) using [https](https://nodejs.org/api/https.html) and in the Browser using [XMLHttpRequests ](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

* Super light no third-party libraries
* Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API


Installing
==========

Using npm:

`$ npm install youtube-api-v3-search`

Using cdn:

`<script src=""></script>`

Example Usage
=============

```
//Using Node

const youtubeSearch = require('youtube-api-v3-search');

```
**Set Search Options**

_The **q** parameter specifies the query term to search for._

_The **part** parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet._


_The **type** parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist._

_Acceptable values are:_
* _channel_
* _playlist_
* _video_

```
const options = {
  q:'nodejs',
  part:'snippet',
  type:'video'
}
```
Using callback
===============

```
youtubeSearch($YOUTUBE_KEY,$options,callback);
```
** youtubeSearch _[Function]_***  _return void_

** $YOUTUBE_KEY *[Stirng]* ** _your youtube api-key_

** $options _[Object]_ ** _your search parameters_

### All possible [options/parameters]
`https://developers.google.com/youtube/v3/docs/search/list#parameters`

**callback _[Function]_** _function(error , result )_

Using Promise
==============
```
// without passing callback as the third argument it returns [Promise]

youtubeSearch($YOUTUBE_KEY,$options);
```
** youtubeSearch _[Function]_** _return Promise_

** $YOUTUBE_KEY *[Stirng]* ** _your youtube api-key_

** $options _[Object]_ ** _your search parameters_
