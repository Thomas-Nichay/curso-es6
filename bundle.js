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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ \"./src/modulo1.js\");\n\nvar User1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__[\"Usuario\"]('email@teste.com', 'senha123');\nvar Adm1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__[\"Admin\"]('email@teste.com', 'senha123');\nconsole.log(User1.isAdmin()); // false\n\nconsole.log(Adm1.isAdmin()); // true\n\nconsole.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__[\"map\"]);\nconsole.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__[\"filter\"]);\nconsole.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__[\"find\"]);\nconsole.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__[\"uniao\"]);\nconsole.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__[\"usuario3\"]);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/*! exports provided: Usuario, Admin, map, filter, find, uniao, mostraIdade, usuario3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Usuario\", function() { return Usuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Admin\", function() { return Admin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniao\", function() { return uniao; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mostraIdade\", function() { return mostraIdade; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usuario3\", function() { return usuario3; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// ex1\nvar Usuario =\n/*#__PURE__*/\nfunction () {\n  function Usuario(email, senha) {\n    _classCallCheck(this, Usuario);\n\n    this.email = email;\n    this.senha = senha;\n    this.admin = false;\n  }\n\n  _createClass(Usuario, [{\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.admin;\n    }\n  }]);\n\n  return Usuario;\n}();\nvar Admin =\n/*#__PURE__*/\nfunction (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  function Admin() {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));\n    _this.admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(Usuario); // ex2\n\nvar usuarios = [{\n  nome: 'Diego',\n  idade: 23,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Gabriel',\n  idade: 15,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Lucas',\n  idade: 30,\n  empresa: 'Facebook'\n}]; //2.1\n\nvar map = usuarios.map(function (usr) {\n  return usr.idade;\n}); //2.2\n\nvar filter = usuarios.filter(function (usr) {\n  return usr.idade >= 18 && usr.empresa === 'Rocketseat';\n}); //2.3\n\nvar find = usuarios.find(function (usr) {\n  return usr.empresa === 'Google';\n}); //2.4\n\nvar uniao = usuarios.map(function (usr) {\n  var temp = usr;\n  temp.idade = usr.idade * 2;\n  return temp;\n}).filter(function (usr) {\n  return usr.idade <= 50;\n}); // ex3\n// 3.1\n\nvar arr = [1, 2, 3, 4, 5];\narr.map(function (item) {\n  return item + 10;\n}); // 3.2\n// Dica: Utilize uma constante pra function\n\nvar usuario = {\n  nome: 'Diego',\n  idade: 23\n};\nvar mostraIdade = function mostraIdade(usuario) {\n  return usuario.idade;\n};\nmostraIdade(usuario); // 3.3\n// Dica: Utilize uma constante pra function\n\nvar nome = \"Diego\";\nvar idade = 23;\n\nvar mostraUsuario = function mostraUsuario() {\n  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';\n  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;\n  return {\n    nome: nome,\n    idade: idade\n  };\n};\n\nmostraUsuario(nome, idade);\nmostraUsuario(nome); // 3.4\n\nvar promise = function promise() {\n  return new Promise(function (resolve, reject) {\n    return resolve();\n  });\n}; // ex4\n// 4.1\n\n\nvar empresa = {\n  nome2: 'Rocketseat',\n  endereco: {\n    cidade: 'Rio do Sul',\n    estado: 'SC'\n  }\n};\nvar nome2 = empresa.nome2,\n    _empresa$endereco = empresa.endereco,\n    cidade = _empresa$endereco.cidade,\n    estado = _empresa$endereco.estado; // 4.2\n\nfunction mostraInfo(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos.\");\n}\n\nmostraInfo({\n  nome: 'Diego',\n  idade: 23\n}); // ex5\n// 5.1\n\nvar array = [1, 2, 3, 4, 5, 6];\nvar x = array[0],\n    y = array.slice(1);\n\nfunction soma() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (total, arg) {\n    return total + arg;\n  });\n} //5.2\n\n\nvar usuario_ex5 = {\n  nome: 'Diego',\n  idade: 23,\n  endereco: {\n    cidade: 'Rio do Sul',\n    uf: 'SC',\n    pais: 'Brasil'\n  }\n};\n\nvar usuario2 = _objectSpread({}, usuario_ex5, {\n  nome: 'Gabriel'\n});\n\nvar usuario3 = _objectSpread({}, usuario_ex5, {\n  endereco: _objectSpread({}, usuario_ex5.endereco, {\n    cidade: 'Lontras'\n  }) // ex6\n\n});\nvar usuario_ex6 = 'Diego';\nvar idade_ex6 = 23;\nconsole.log(\"O usu\\xE1rio \".concat(usuario_ex6, \" possui \").concat(idade_ex6, \" anos\")); // ex7\n\nvar nome_ex7 = 'Diego';\nvar idade_ex7 = 23;\nvar usuario_ex7 = {\n  nome_ex7: nome_ex7,\n  idade_ex7: idade_ex7,\n  cidade: 'Rio do Sul'\n};\n\n//# sourceURL=webpack:///./src/modulo1.js?");

/***/ })

/******/ });