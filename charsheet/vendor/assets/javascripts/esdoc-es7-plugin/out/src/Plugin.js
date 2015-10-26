'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.parser = parser;
exports.patchBabylonAST = patchBabylonAST;
exports.onHandleCodeParser = onHandleCodeParser;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _coreJs = require('core-js');

var _coreJs2 = _interopRequireDefault(_coreJs);

var _estraverse = require('estraverse');

var _estraverse2 = _interopRequireDefault(_estraverse);

var _babylon = require('babylon');

/**
 * parse JavaScript(ES7) with babylon.
 * @param {string} code - target javascript.
 * @returns {AST} result AST.
 */

var babylon = _interopRequireWildcard(_babylon);

function parser(code) {
  var options = {
    allowHashBang: true,
    sourceType: 'module',
    ecmaVersion: Infinity,
    features: {
      // stage 0
      'es7.comprehensions': true,
      'es7.classProperties': true,
      'es7.functionBind': true,

      // stage 1
      'es7.asyncFunctions': true,
      'es7.decorators': true,
      'es7.exportExtensions': true,
      'es7.objectRestSpread': true,
      'es7.trailingFunctionCommas': true,

      // stage 2
      'es7.exponentiationOperator': true
    },
    plugins: {
      jsx: true,
      flow: true
    }
  };

  var babylonAST = babylon.parse(code, options);
  var ast = babylonAST.program;
  patchBabylonAST(ast);
  return ast;
}

/**
 * path babylon ast to obtain Espree compatible.
 * - change ``innerComments`` to ``leadingComments``
 * - change ``CommentBlock`` to ``Block``
 * - change anonymous ``ClassExpression/FunctionExpression`` export to ``ClassDeclaration/FunctionDeclaration``.
 * - ignore unknown node type(``ClassProperty``, ``ExportDefaultSpecifier``, ``ExportNamespaceSpecifier`` and ``BindExpression``).
 * @param {AST} ast - target babylon AST.
 */

function patchBabylonAST(ast) {
  function patch(node, parent) {
    // decorator
    if (node.decorators && node.decorators[0].leadingComments && !node.leadingComments) {
      node.leadingComments = [node.decorators[0].leadingComments[0]];
    }

    // for innerComments
    if (node.innerComments) {
      var _node$leadingComments;

      node.leadingComments = node.leadingComments || [];
      (_node$leadingComments = node.leadingComments).push.apply(_node$leadingComments, _toConsumableArray(node.innerComments));
    }

    // for leadingComments
    var _iteratorNormalCompletion = true;

    // for trailingComments
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (node.leadingComments || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var comment = _step.value;

        if (comment.type === 'CommentBlock') comment.type = 'Block';
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

    var _iteratorNormalCompletion2 = true;

    // for anonymous class and function
    // babylon decide anonymous class to 'ClassExpression'.
    // but espree decide to 'ClassDeclaration'.
    // same function.
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (node.trailingComments || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var comment = _step2.value;

        if (comment.type === 'CommentBlock') comment.type = 'Block';
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

    var exportType = ['ExportDefaultDeclaration', 'ExportNamedDeclaration'];
    switch (node.type) {
      case 'ClassExpression':
        if (!node.id && exportType.includes(parent.type)) node.type = 'ClassDeclaration';
        break;
      case 'FunctionExpression':
        if (!node.id && exportType.includes(parent.type)) node.type = 'FunctionDeclaration';
        break;
    }

    // unknown node type
    var unknownNodeTypes = ['ClassProperty', 'ExportDefaultSpecifier', 'ExportNamespaceSpecifier', 'BindExpression'];
    if (unknownNodeTypes.includes(node.type)) {
      node.type = 'Identifier';
    }
  }

  var ESTRAVERSE_KEYS = {
    Super: [],
    JSXElement: [],
    ClassProperty: [], // todo
    ExportDefaultSpecifier: [], // todo
    ExportNamespaceSpecifier: [], // todo
    BindExpression: [] // todo
  };

  _estraverse2['default'].traverse(ast, {
    enter: function enter(node, parent) {
      patch(node, parent);
    },

    keys: ESTRAVERSE_KEYS
  });
}

/**
 * change default parser to babylon parser.
 * @param {Object} ev - handler event.
 */

function onHandleCodeParser(ev) {
  ev.data.parser = parser;
}