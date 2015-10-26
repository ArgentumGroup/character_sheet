'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

/**
 * Plugin system for your plugin.
 */

var Plugin = (function () {
  /**
   * create instance.
   */

  function Plugin() {
    _classCallCheck(this, Plugin);

    this._plugins = null;
  }

  _createClass(Plugin, [{
    key: 'init',

    /**
     * initialize with plugin property.
     * @param {Array<{name: string, option: object}>} plugins - expect config.plugins property.
     */
    value: function init() {
      var plugins = arguments[0] === undefined ? [] : arguments[0];

      this._plugins = copy(plugins);
    }
  }, {
    key: '_execHandler',

    /**
     * exec plugin handler.
     * @param {string} handlerName - handler name(e.g. onHandleCode)
     * @param {PluginEvent} ev - plugin event object.
     * @param {boolean} [giveOption=false] - if true, event has plugin option.
     * @private
     */
    value: function _execHandler(handlerName, ev) {
      var giveOption = arguments[2] === undefined ? false : arguments[2];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var plugin = undefined;
          if (item.name.match(/^[.\/]/)) {
            var pluginPath = _path2['default'].resolve(item.name);
            plugin = require(pluginPath);
          } else {
            module.paths.push('./node_modules');
            plugin = require(item.name);
            module.paths.pop();
          }

          if (!plugin[handlerName]) continue;

          if (giveOption) ev.data.option = item.option;

          plugin[handlerName](ev);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'onStart',

    /**
     * handle start.
     */
    value: function onStart() {
      var ev = new PluginEvent();
      this._execHandler('onStart', ev, true);
    }
  }, {
    key: 'onHandleConfig',

    /**
     * handle config.
     * @param {ESDocConfig} config - original esdoc config.
     * @returns {ESDocConfig} handled config.
     */
    value: function onHandleConfig(config) {
      var ev = new PluginEvent({ config: config });
      this._execHandler('onHandleConfig', ev);
      return ev.data.config;
    }
  }, {
    key: 'onHandleCode',

    /**
     * handle code.
     * @param {string} code - original code.
     * @returns {string} handled code.
     */
    value: function onHandleCode(code) {
      var ev = new PluginEvent({ code: code });
      this._execHandler('onHandleCode', ev);
      return ev.data.code;
    }
  }, {
    key: 'onHandleCodeParser',

    /**
     * handle code parser.
     * @param {function(code: string)} parser - original js parser.
     * @returns {function(code: string)} handled parser.
     */
    value: function onHandleCodeParser(parser) {
      var ev = new PluginEvent();
      ev.data.parser = parser;
      this._execHandler('onHandleCodeParser', ev);
      return ev.data.parser;
    }
  }, {
    key: 'onHandleAST',

    /**
     * handle AST.
     * @param {AST} ast - original ast.
     * @returns {AST} handled AST.
     */
    value: function onHandleAST(ast) {
      var ev = new PluginEvent({ ast: ast });
      this._execHandler('onHandleAST', ev);
      return ev.data.ast;
    }
  }, {
    key: 'onHandleTag',

    /**
     * handle tag.
     * @param {Tag} tag - original tag(s).
     * @returns {Tag} handled tag.
     */
    value: function onHandleTag(tag) {
      var ev = new PluginEvent({ tag: tag });
      this._execHandler('onHandleTag', ev);
      return ev.data.tag;
    }
  }, {
    key: 'onHandleHTML',

    /**
     * handle HTML.
     * @param {string} html - original HTML.
     * @returns {string} handled HTML.
     */
    value: function onHandleHTML(html) {
      var ev = new PluginEvent({ html: html });
      this._execHandler('onHandleHTML', ev);
      return ev.data.html;
    }
  }, {
    key: 'onComplete',

    /**
     * handle complete
     */
    value: function onComplete() {
      var ev = new PluginEvent();
      this._execHandler('onComplete', ev);
    }
  }]);

  return Plugin;
})();

/**
 * Plugin Event class.
 */

var PluginEvent =
/**
 * create instance.
 * @param {Object} data - event content.
 */
function PluginEvent() {
  var data = arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, PluginEvent);

  this.data = copy(data);
};

exports.PluginEvent = PluginEvent;

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Instance of Plugin class.
 */
exports['default'] = new Plugin();