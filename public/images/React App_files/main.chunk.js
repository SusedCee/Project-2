(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n \nul{\n  list-style: none\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MovieContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieContainer */ "./src/MovieContainer/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register */ "./src/Register/index.js");
var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/App.js";






const My404 = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "'You're lost buddy'");
};

function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/",
    component: _Register__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/movies",
    component: _MovieContainer__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: My404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/CreateMovie/index.js":
/*!**********************************!*\
  !*** ./src/CreateMovie/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/CreateMovie/index.js";


class CreateMovie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.updateMovie = e => {
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      });
    };

    this.state = {
      title: '',
      description: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.props.addMovie.bind(null, this.state),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Movie:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "title",
      onChange: this.updateMovie,
      value: this.state.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "description:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.updateMovie,
      value: this.state.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Create Movie"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CreateMovie);

/***/ }),

/***/ "./src/EditMovie/index.js":
/*!********************************!*\
  !*** ./src/EditMovie/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/EditMovie/index.js";


const EditMovie = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, " Edit Movie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: props.closeAndEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Edit Movie:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: props.handleFormChange,
    value: props.movieToEdit.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Edit Description:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "description",
    onChange: props.handleFormChange,
    value: props.movieToEdit.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditMovie); // class EditMovie extends Component {
//   constructor(props)){
//     super(props);
//     this.state = {
//       title: props.title,
//       description: props.description
//     }
//   }
//   updateMovie = (e) => {
//     this.setState({[e.currentTarget.name] : e.currentTarget.value})
//   }
//   render(){
//     return (
//       <form onSubmit={this.props.addMovie.bind(null, this.state)}>
//         <label htmlFor="title">Movie:
//           <input type="text" name="title" onChange={this.updateMovie} value={this.state.title}/>
//         </label>
//         <label htmlFor="description">description:
//           <input type="text" name="description" onChange={this.updateMovie} value={this.state.description}/>
//         </label>
//         <button type='submit'>
//           Create Movie
//         </button>
//       </form>
//       )
//   }
// }

/***/ }),

/***/ "./src/MovieContainer/index.js":
/*!*************************************!*\
  !*** ./src/MovieContainer/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sandraabernathy_sei_autumn_sweaters_movie_client_react_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreateMovie */ "./src/CreateMovie/index.js");
/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MovieList */ "./src/MovieList/index.js");
/* harmony import */ var _EditMovie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EditMovie */ "./src/EditMovie/index.js");

var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/MovieContainer/index.js";





class MovieContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    this.addMovie = async (movie, e) => {
      e.preventDefault(); // prevent the page from refreshing

      console.log(movie, e, ' inside of addMovie');

      try {
        const createMovie = await fetch('http://localhost:9000/api/v1/movies', {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json' // lets our server (express app)
            // know that the contents of the request is json

          }
        });
        console.log(createMovie, "<createMovie fetch");

        if (createMovie.status !== 200) {
          // from the fetch request itself seeing if its a successful request
          throw Error('Resource not found');
        }

        const createMovieResponse = await createMovie.json();
        console.log(createMovieResponse.data, ' createMovieResponse'); // we only want to add teh movie to the movies array, if it has
        // its mongo id, and it should because thats what are express
        // api is sending back

        this.setState({
          movies: [...this.state.movies, createMovieResponse.data]
        });
      } catch (err) {
        console.log(err, ' addMovie');
        return err;
      }
    };

    this.getMovies = async () => {
      try {
        const responseGetMovies = await fetch('http://localhost:9000/api/v1/movies');
        console.log(responseGetMovies, ' responseGetMovies');

        if (responseGetMovies.status !== 200) {
          // before we parse
          // fetch won't reject a 404
          // throw errow ends the try and sends
          // the error to the catch
          throw Error('404 from server');
        } // parse the json from a string into a js object we
        // can manipulate


        const moviesResponse = await responseGetMovies.json(); // in the browser console

        console.log(moviesResponse, ' moviesResponse <');
        this.setState({
          movies: [...moviesResponse.data]
        });
      } catch (err) {
        console.log(err, ' getMovies errors');
        return err;
      }
    };

    this.deleteItem = async (movie, e) => {
      e.preventDefault();
      console.log('movieToDelete: ', movie);
      const movieToDelete = movie; // this.setState((currentState) => (
      //   {movies: currentState.movies.filter((movie) => movie !== movieToDelete)}
      // ))

      console.log('movies: ', this.state.movies);

      try {
        const deleteRequest = await fetch('http://localhost:9000/api/v1/movies/' + movieToDelete._id, {
          method: 'DELETE'
        });

        if (deleteRequest.status !== 200) {
          throw Error('editRequest not working');
        }

        const deleteResponse = await deleteRequest.json(); // this.setState({
        //   movies:this.state.movies.filter((movies) => movie._id !== id)
        // })

        console.log(deleteResponse, ' deleteResponse');
        this.getMovies();
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    this.handleFormChange = e => {
      this.setState({
        movieToEdit: Object(_Users_sandraabernathy_sei_autumn_sweaters_movie_client_react_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.movieToEdit, {
          // spread the previous contents
          //of the object in teh movie to edit
          //then use the computational properties to edit
          //the input you're typing in
          [e.target.name]: e.target.value
        })
      });
    };

    this.closeAndEdit = async e => {
      e.preventDefault();
      console.log('movieToEdit: ', this.state.movieToEdit);

      try {
        const editRequest = await fetch('http://localhost:9000/api/v1/movies/' + this.state.movieToEdit._id, {
          method: 'PUT',
          body: JSON.stringify(this.state.movieToEdit),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (editRequest.status !== 200) {
          throw Error('editRequest not working');
        }

        const editResponse = await editRequest.json();
        const editedMovieArray = this.state.movies.map(movie => {
          if (movie._id === editResponse.data._id) {
            //comparing every movie in the array, 
            console.log('hello');
            movie = editResponse.data;
          }

          return movie;
        });
        this.setState({
          movies: editedMovieArray,
          showEditModal: false
        });
        console.log(editResponse, ' editResponse');
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    this.showModal = movie => {
      console.log(movie, ' movieID in show Modal');
      this.setState({
        movieToEdit: movie,
        showEditModal: !this.state.showEditModal
      });
    };

    this.state = {
      movies: [],
      showEditModal: false,
      movieToEdit: {
        _id: null,
        title: '',
        description: ''
      }
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    console.log(this.state, "< state in render");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateMovie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      addMovie: this.addMovie,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MovieList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      movies: this.state.movies,
      showModal: this.showModal,
      deleteItemProp: this.deleteItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), this.state.showEditModal ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EditMovie__WEBPACK_IMPORTED_MODULE_4__["default"], {
      closeAndEdit: this.closeAndEdit,
      movieToEdit: this.state.movieToEdit,
      handleFormChange: this.handleFormChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieContainer);

/***/ }),

/***/ "./src/MovieList/index.js":
/*!********************************!*\
  !*** ./src/MovieList/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/MovieList/index.js";


const Movies = props => {
  console.log(props, ' props in movieList');
  const movieList = props.movies.map(movie => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: movie._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, movie.title, ": "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, movie.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: props.deleteItemProp.bind(null, movie),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }, "Delete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: props.showModal.bind(null, movie),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, "Edit"));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Movies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, movieList));
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ }),

/***/ "./src/Register/index.js":
/*!*******************************!*\
  !*** ./src/Register/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/Register/index.js";
 // import { directive } from '@babel/types';

class Register extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.handleChange = e => {
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      });
    };

    this.handleSubmit = async e => {
      e.preventDefault();
      const register = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedRegister = await register.json();
      console.log('response from register: ', parsedRegister);

      if (parsedRegister.status.message === 'User Logged In') {
        console.log('logged in');
      }
    };

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Username:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "username",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "password",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Register"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/sandraabernathy/sei-autumn-sweaters/movie-client-react/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map