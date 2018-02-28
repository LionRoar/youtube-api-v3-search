var searchYoutube =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var request = __webpack_require__(1);
var common = __webpack_require__(2);
module.exports = function (key, options, cb) {
  return common(request, key, options, cb);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url) {
  var req = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    req.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          var response = JSON.parse(this.response);
          resolve(response);
        } else {
          var err = JSON.parse(this.response);
          reject(err);
        }
      }
    };
    req.onerror = function (e) {
      reject(new Error(this.statusText));
    };
    req.open('GET', url, true);
    req.send(null);
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(3);
var querystring = __webpack_require__(4);

module.exports = function (request, key, options, cb) {
  if (!key && typeof cb === 'function') return cb(new Error('API Key is required'));else if (!key) throw new Error('API Key is required');
  fillData(key, options);
  var q = querystring.stringify(config.options);
  if (typeof cb === 'function') request(config.URL + q).then(function (res) {
    return cb(null, res);
  }).catch(function (err) {
    return cb(err);
  });else return request(config.URL + q);
};

function fillData(key, options) {
  config.options.key = key;
  for (var i in options) {
    config.options[i] = options[i];
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.URL = 'https://www.googleapis.com/youtube/v3/search?';
module.exports.options = {
  q: '',
  part: 'snippet',
  type: 'video'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.stringify = function (json) {
  var string = '';
  for (var j in json) {
    string += j + '=' + json[j] + '&';
  }string = string.slice(0, -1);

  return string;
};

/***/ })
/******/ ]);