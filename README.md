# youtube-api-v3-search

[![Build Status](https://travis-ci.org/LionRoar/youtube-api-v3-search.svg?branch=master)](https://travis-ci.org/LionRoar/youtube-api-v3-search)

## YouTube Search Google API for [Node.js](https://nodejs.org/en) and Browser

### Search for YouTube videos, channels, playlists and live events via Google API

* [Node.js](https://nodejs.org/en) using [https](https://nodejs.org/api/https.html) and in the Browser using [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

* <del>Super light no third-party libraries</del> **Added** [browser-resolve](https://www.npmjs.com/package/browser-resolve) for performance.
* Supports the [Prmise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API

* Thanks to @MaximVanhove for adding Support for CommonJS, AMD and global variable.

-----------------

Installing

==========

Using npm:

``` bash
 npm install youtube-api-v3-search
```

Using cdn:

```html


 <script src="https://unpkg.com/youtube-api-v3-search@1.2.1/dist/youtube-api-v3-search.min.js"></script>


 ```

-----------------

Example Usage

=============

```js

const searchYoutube = require('youtube-api-v3-search');
```

or

```js
import searchYoutube from 'youtube-api-v3-search';

```

-----------------

## Callbacks

```js

/**
 * Searching YouTube.
 * @param {string} $YOUTUBE_KEY youtube api-key
 * @param {Object} $options search parameters.
 * @param {function} callback( @param error , @param result).  
 * @return {void}
 */

searchYoutube($YOUTUBE_KEY,$options,callback);
```

-----------------

## Promises __Just don't callback and you'll get a Promise :)__

```js

// NOT passing callback as the 3rd argument it returns Promise
/**
 * Searching YouTube.
 * @param {string} $YOUTUBE_KEY youtube api-key
 * @param {Object} $options search parameters.
 * @return {Promise} The result of the search .
 */

searchYoutube($YOUTUBE_KEY,$options);
```

## Async/Await

```js
async () => {
  let result = await searchYoutube($YOUTUBE_KEY,options);
}
```

-----------------

## Options

### [options/parameters]

### **Search Options**

_The **q** parameter specifies the query term to search for._

_The **part** parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet._

_The **type** parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist._

_Acceptable values are:_

* _channel_
* _playlist_
* _video_

#### Example

```js

const options = {
  q:'nodejs',
  part:'snippet',
  type:'video'
}
```

#### [YouTube API Reference Search#parameters](https://developers.google.com/youtube/v3/docs/search/list#parameters)
