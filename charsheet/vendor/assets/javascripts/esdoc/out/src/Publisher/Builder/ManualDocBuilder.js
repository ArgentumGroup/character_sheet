'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _iceCap = require('ice-cap');

var _iceCap2 = _interopRequireDefault(_iceCap);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _DocBuilderJs = require('./DocBuilder.js');

var _DocBuilderJs2 = _interopRequireDefault(_DocBuilderJs);

var _utilJs = require('./util.js');

/**
 * Manual Output Builder class.
 */

var ManualDocBuilder = (function (_DocBuilder) {
  function ManualDocBuilder() {
    _classCallCheck(this, ManualDocBuilder);

    _get(Object.getPrototypeOf(ManualDocBuilder.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(ManualDocBuilder, _DocBuilder);

  _createClass(ManualDocBuilder, [{
    key: 'exec',

    /**
     * execute building output.
     * @param {function(html: string, filePath: string)} callback - is called each manual.
     * @param {function(src: string, dest: string)} callbackForCopy - is called asset.
     */
    value: function exec(callback, callbackForCopy) {
      if (!this._config.manual) return;

      var manualConfig = this._getManualConfig();
      var ice = this._buildLayoutDoc();
      ice.autoDrop = false;
      ice.attr('rootContainer', 'class', ' manual-root');

      {
        var fileName = 'manual/index.html';
        var baseUrl = this._getBaseUrl(fileName);
        this._buildManualIndex(manualConfig);
        ice.load('content', this._buildManualIndex(manualConfig), _iceCap2['default'].MODE_WRITE);
        ice.load('nav', this._buildManualNav(manualConfig), _iceCap2['default'].MODE_WRITE);
        ice.text('title', 'Manual', _iceCap2['default'].MODE_WRITE);
        ice.attr('baseUrl', 'href', baseUrl, _iceCap2['default'].MODE_WRITE);
        callback(ice.html, fileName);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = manualConfig[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (!item.paths) continue;
          var fileName = this._getManualOutputFileName(item);
          var baseUrl = this._getBaseUrl(fileName);
          ice.load('content', this._buildManual(item), _iceCap2['default'].MODE_WRITE);
          ice.load('nav', this._buildManualNav(manualConfig), _iceCap2['default'].MODE_WRITE);
          ice.text('title', item.label, _iceCap2['default'].MODE_WRITE);
          ice.attr('baseUrl', 'href', baseUrl, _iceCap2['default'].MODE_WRITE);
          callback(ice.html, fileName);
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

      if (this._config.manual.asset) {
        callbackForCopy(this._config.manual.asset, 'manual/asset');
      }
    }
  }, {
    key: '_getManualConfig',

    /**
     * get manual config based on ``config.manual``.
     * @returns {ManualConfigItem[]} built manual config.
     * @private
     */
    value: function _getManualConfig() {
      var m = this._config.manual;
      var manualConfig = [];
      if (m.overview) manualConfig.push({ label: 'Overview', paths: m.overview });
      if (m.installation) manualConfig.push({ label: 'Installation', paths: m.installation });
      if (m.tutorial) manualConfig.push({ label: 'Tutorial', paths: m.tutorial });
      if (m.usage) manualConfig.push({ label: 'Usage', paths: m.usage });
      if (m.configuration) manualConfig.push({ label: 'Configuration', paths: m.configuration });
      if (m.example) manualConfig.push({ label: 'Example', paths: m.example });
      manualConfig.push({ label: 'Reference', fileName: 'identifiers.html', references: true });
      if (m.faq) manualConfig.push({ label: 'FAQ', paths: m.faq });
      if (m.changelog) manualConfig.push({ label: 'Changelog', paths: m.changelog });
      return manualConfig;
    }
  }, {
    key: '_buildManualNav',

    /**
     * build manual navigation.
     * @param {ManualConfigItem[]} manualConfig - target manual config.
     * @return {IceCap} built navigation
     * @private
     */
    value: function _buildManualNav(manualConfig) {
      var ice = this._buildManualIndex(manualConfig);
      var $root = _cheerio2['default'].load(ice.html).root();
      $root.find('.github-markdown').removeClass('github-markdown');
      return $root.html();
    }
  }, {
    key: '_buildManual',

    /**
     * build manual.
     * @param {ManualConfigItem} item - target manual config item.
     * @return {IceCap} built manual.
     * @private
     */
    value: function _buildManual(item) {
      var html = this._convertMDToHTML(item);
      var ice = new _iceCap2['default'](this._readTemplate('manual.html'));
      ice.text('title', item.label);
      ice.load('content', html);

      // convert relative src to base url relative src.
      var $root = _cheerio2['default'].load(ice.html).root();
      $root.find('img').each(function (i, el) {
        var $el = (0, _cheerio2['default'])(el);
        var src = $el.attr('src');
        if (!src) return;
        if (src.match(/^http[s]?:/)) return;
        if (src.charAt(0) === '/') return;
        $el.attr('src', './manual/' + src);
      });
      $root.find('a').each(function (i, el) {
        var $el = (0, _cheerio2['default'])(el);
        var href = $el.attr('href');
        if (!href) return;
        if (href.match(/^http[s]?:/)) return;
        if (href.charAt(0) === '/') return;
        if (href.charAt(0) === '#') return;
        $el.attr('href', './manual/' + href);
      });

      return $root.html();
    }
  }, {
    key: '_buildManualIndex',

    /**
     * built manual index.
     * @param {ManualConfigItem[]} manualConfig - target manual config.
     * @return {IceCap} built index.
     * @private
     */
    value: function _buildManualIndex(manualConfig) {
      var _this = this;

      var ice = new _iceCap2['default'](this._readTemplate('manualIndex.html'));

      ice.loop('manual', manualConfig, function (i, item, ice) {
        var toc = [];
        if (item.references) {
          var identifiers = _this._findAllIdentifiersKindGrouping();
          if (identifiers['class'].length) toc.push({ label: 'Class', link: 'identifiers.html#class', indent: 'indent-h1' });
          if (identifiers['interface'].length) toc.push({ label: 'Interface', link: 'identifiers.html#interface', indent: 'indent-h1' });
          if (identifiers['function'].length) toc.push({ label: 'Function', link: 'identifiers.html#function', indent: 'indent-h1' });
          if (identifiers.variable.length) toc.push({ label: 'Variable', link: 'identifiers.html#variable', indent: 'indent-h1' });
          if (identifiers.typedef.length) toc.push({ label: 'Typedef', link: 'identifiers.html#typedef', indent: 'indent-h1' });
          if (identifiers.external.length) toc.push({ label: 'External', link: 'identifiers.html#external', indent: 'indent-h1' });
        } else {
          (function () {
            var fileName = _this._getManualOutputFileName(item);
            var html = _this._convertMDToHTML(item);
            var $root = _cheerio2['default'].load(html).root();
            var isHRise = $root.find('h1').length === 0;
            $root.find('h1,h2,h3,h4,h5').each(function (i, el) {
              var $el = (0, _cheerio2['default'])(el);
              var label = $el.text();
              var link = fileName + '#' + $el.attr('id');
              var indent = undefined;
              if (isHRise) {
                var tagName = 'h' + (parseInt(el.tagName.charAt(1), 10) - 1);
                indent = 'indent-' + tagName;
              } else {
                indent = 'indent-' + el.tagName.toLowerCase();
              }
              toc.push({ label: label, link: link, indent: indent });
            });
          })();
        }

        ice.attr('manual', 'data-toc-name', item.label.toLowerCase());
        ice.text('title', item.label);
        ice.attr('title', 'href', _this._getManualOutputFileName(item));
        ice.loop('manualNav', toc, function (i, item, ice) {
          ice.attr('manualNav', 'class', item.indent);
          ice.text('link', item.label);
          ice.attr('link', 'href', item.link);
        });
      });

      return ice;
    }
  }, {
    key: '_getManualOutputFileName',

    /**
     * get manual file name.
     * @param {ManualConfigItem} item - target manual config item.
     * @returns {string} file name.
     * @private
     */
    value: function _getManualOutputFileName(item) {
      if (item.fileName) return item.fileName;
      return 'manual/' + item.label.toLowerCase() + '.html';
    }
  }, {
    key: '_convertMDToHTML',

    /**
     * convert markdown to html.
     * if markdown has only one ``h1`` and it's text is ``item.label``, remove the ``h1``.
     * because duplication ``h1`` in output html.
     * @param {ManualConfigItem} item - target.
     * @returns {string} converted html.
     * @private
     */
    value: function _convertMDToHTML(item) {
      var contents = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = item.paths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var path = _step2.value;

          contents.push(_fsExtra2['default'].readFileSync(path).toString());
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var content = contents.join('\n\n');
      var html = (0, _utilJs.markdown)(content);
      var $root = _cheerio2['default'].load(html).root();
      return $root.html();
    }
  }, {
    key: '_getLabelSynonyms',

    /**
     * get label synonyms.
     * @param {string} label - target item label.
     * @returns {string[]} synonyms
     * @private
     */
    value: function _getLabelSynonyms(label) {
      switch (label.toLowerCase()) {
        case 'overview':
          return ['overview'];
        case 'installation':
          return ['installation', 'install'];
        case 'tutorial':
          return ['tutorial'];
        case 'configuration':
          return ['configuration', 'config'];
        case 'usage':
          return ['usage'];
        case 'example':
          return ['example', 'examples'];
        case 'faq':
          return ['faq'];
        case 'changelog':
          return ['changelog', 'change log'];
      }
    }
  }]);

  return ManualDocBuilder;
})(_DocBuilderJs2['default']);

exports['default'] = ManualDocBuilder;
module.exports = exports['default'];