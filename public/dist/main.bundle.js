webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_details_question_details_component__ = __webpack_require__("../../../../../src/app/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    // {
    // 	path: '',
    // 	component: LoginRegComponent,
    // },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__["a" /* LoginRegComponent */],
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__success_success_component__["a" /* SuccessComponent */],
    },
    {
        path: 'new_question',
        component: __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__["a" /* NewQuestionComponent */],
    },
    {
        path: 'question/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__question_details_question_details_component__["a" /* QuestionDetailsComponent */],
    },
    {
        path: 'question/:id/new_answer',
        component: __WEBPACK_IMPORTED_MODULE_6__new_answer_new_answer_component__["a" /* NewAnswerComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n\tbackgroud-image: url(\"https://static.pexels.com/photos/3003/telescope-science-discover-world.jpg\");\n\tmargin: 0;\n\tpadding: 0;\n}\n\nhtml{\n\tmargin: 0;\n\tpadding: 0;\n}\n\nheader{\n\tmargin: 0;\n\tpadding: 0;\n}\nli a:hover:not(.active) {\n    background-color: black !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['login']\" >Login or Register</a> |  <a [routerLink]=\"['success']\">Go to the Success Page</a> -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_details_question_details_component__ = __webpack_require__("../../../../../src/app/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__success_success_component__["a" /* SuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_reg_login_reg_component__["a" /* LoginRegComponent */],
            __WEBPACK_IMPORTED_MODULE_10__new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__question_details_question_details_component__["a" /* QuestionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__new_answer_new_answer_component__["a" /* NewAnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__login_reg_service__["a" /* LoginRegService */], __WEBPACK_IMPORTED_MODULE_5__question_service__["a" /* QuestionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login-reg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginRegService = (function () {
    function LoginRegService(_http) {
        this._http = _http;
    }
    LoginRegService.prototype.registerUser = function (user) {
        return this._http.post('/api/users', user).map(function (Response) { return Response.json(); }).toPromise();
    };
    LoginRegService.prototype.loginUser = function (user) {
        return this._http.post('/api/login', user).map(function (Response) { return Response.json(); }).toPromise();
    };
    // loginUser(user){
    //  		return this._http.post('/api/login', user).map(Response=>Response.json()).toPromise();
    //  	}
    LoginRegService.prototype.getCurrentUser = function () {
        return this._http.get('/api/users/current').map(function (Response) { return Response.json(); }).toPromise();
    };
    LoginRegService.prototype.logout = function () {
        return this._http.get('/api/users/logout').map(function (Response) { return Response.json(); }).toPromise();
    };
    return LoginRegService;
}());
LoginRegService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginRegService);

var _a;
//# sourceMappingURL=login-reg.service.js.map

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    /*background-color: #333;*/\n}\n\nli {\n    float: right;\n}\n\nli a {\n    display: block;\n    color: #111;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: black;\n}\n\n.welcome{\n\tfont-size: 20px;\n\tdisplay: block;\n    color: #111;\n    float: left;\n    padding: 14px 16px;\n    text-decoration: none;\n    \n}\n\n\nbody{\n\t/*background-image: url(\"https://images.pexels.com/photos/248152/pexels-photo-248152.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tmargin: 0;\n\tpadding: 0;*/\n\n}\nhtml{\n\tmargin: 0;\n\tpadding: 0;\n}\n\ntable{\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\ninput{\n\twidth: 150px;\n}\n\n/*#labels{\n\twidth: 29%;\n}*/\n\nform{\n    width: 100%;\n    margin: auto;\n\n}\n#content{\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n\n\t\n}\n\n#title{\n\ttext-align: center;\n}\n.right{\n\tfloat: right;\n}\nh1{\n\ttext-align: center;\n\tdisplay: block;\n}\nh5{\n\ttext-align: center;\n}\ninput{\n\twidth: 100%;\n\n}\n\nlabel{\n\ttext-align: center;\n\tdisplay: block;\n}\n\n#login{\n\twidth: 250px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tbackground-color: white;\n\tborder-radius: 15px;\n\tborder: 1px solid lightgrey;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding:20px;\n\tbox-shadow: 2px 2px 5px rgba(39, 18, 18, 0.27);\n}\n\n#login-btn{\n\twidth: 100%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n\n\n<ul>\n\t<li class=\"welcome\">Biology 201 | Q&A board</li>\n <!--  <li><a (click)=\"logout()\" >Logout</a></li>\n  <li><a href=\"#news\">New Answers</a></li>\n  <li><a href=\"#contact\">Profile</a></li>\n  <li><a [routerLink]=\"['/new_question']\">Add Question </a></li>\n  <li><a  class=\"active\" [routerLink]=\"['/']\" >Home</a></li> -->\n\n</ul>\n\n</header>\n\n<div id=\"content\">\n\n<h1>Login</h1>\n<div id=\"login\" class=\"container\">\n  \n  <form (submit)=\"login()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"user.email\" #email= \"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\" [(ngModel)]=\"user.password\" #password= \"ngModel\">\n    </div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" name=\"remember\"> Remember me</label>\n    </div>\n    <button id=\"login-btn\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n</div>\n\n\n<h1>Register</h1>\n<div id=\"login\" class=\"container\">\n  \n  <form (submit)=\"register()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"Name\" placeholder=\"Enter name\" name=\"name\" required [(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"newUser.email\" #email= \"ngModel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"newUser.password\" #password= \"ngModel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pwd\">Confirm Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"passwordConfirmation\" [(ngModel)]=\"newUser.passwordCofirmation\" #passwordConfirmation= \"ngModel\">\n    </div>\n\n\n    <button id=\"login-btn\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n</div>\n\n\n\t\n\n\n\n<!-- <p *ngIf=\"name.errors\">Name is required</p> -->\n\n<!-- {{name.errors | json}} -->\n\n</div>\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRegComponent = (function () {
    // newUser: object = {
    // 	name: "",
    // 	username: "",
    // 	email: "",
    // 	password: "",
    // 	passwordConfirmation: "",
    // }
    // user: object = {
    // 	name: "",
    // }
    function LoginRegComponent(_logRegService, _router, _route) {
        this._logRegService = _logRegService;
        this._router = _router;
        this._route = _route;
        this.newUser = {
            name: "",
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "Password Confirmation",
        };
        this.user = {
            username: "",
            email: "",
            password: "",
        };
    }
    LoginRegComponent.prototype.ngOnInit = function () {
    };
    LoginRegComponent.prototype.register = function () {
        var _this = this;
        this._logRegService.registerUser(this.newUser)
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("successfully got in ", data);
                _this._router.navigate(['/']);
            }
        });
    };
    LoginRegComponent.prototype.login = function () {
        var _this = this;
        this._logRegService.loginUser(this.user)
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("successfully got logged in ", data);
                _this._router.navigate(['/']);
            }
        });
    };
    return LoginRegComponent;
}());
LoginRegComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-reg',
        template: __webpack_require__("../../../../../src/app/login-reg/login-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-reg/login-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginRegComponent);

var _a, _b, _c;
//# sourceMappingURL=login-reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".answer{\n\twidth: 70%;\n\tmargin: auto;\n\tdisplay: block;\n}\n.answer-button{\n\tfloat: right;\n\tdisplay: block;\n}\n\n.answer-box{\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n\t \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <a [routerLink]=\"['/']\"> Home </a> |\n<a [routerLink]=\"['/question', question._id]\">Go Back to Question</a> -->\n\n<!-- <h1>{{question._id}}</h1> -->\n<!-- <input type=\"text\" name=\"\" value=question_id [(ngModel)]=\"question_id\"> -->\n\n<form (submit)=\"addAnswer()\">\n\t<p>\n\t<textarea type=\"text\" name=\"title\"\n\t\t[(ngModel)]=\"newAnswer.title\"></textarea>\n\t</p>\n\t<div class=\"answer-box\">\n\t<textarea class=\"answer\" type=\"text\" name=\"Description\"\n\t\t[(ngModel)]=\"newAnswer.description\">\n\t\t</textarea>\n\t<input class=\"answer-button\" type=\"submit\" name=\"\" value=\"Answer\">\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAnswerComponent = (function () {
    function NewAnswerComponent(_logRegService, _questionService, _router, _route) {
        this._logRegService = _logRegService;
        this._questionService = _questionService;
        this._router = _router;
        this._route = _route;
        this.newAnswer = {
            //user: this.currentUser["name"],
            user: "",
            title: "",
            description: "",
            likes: 0,
        };
        this.currentUser = {};
        this.question = {};
    }
    NewAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //checking if user is logged in
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
        //------------
        this._route.paramMap.subscribe(function (params) {
            console.log("got the param", params.get('id'));
            var id = params.get('id');
            _this._questionService.getQuestion({ "_id": id })
                .then(function (data) {
                if (data.errors) {
                    console.log(data.errors);
                }
                else {
                    console.log("successfully got the question ", data);
                    _this.question = data;
                    console.log(_this.question);
                }
            });
        });
    };
    NewAnswerComponent.prototype.addAnswer = function () {
        var _this = this;
        this.newAnswer["user"] = this.currentUser["name"];
        console.log("**********this.newAnswer['user']", this.newAnswer['user']);
        console.log("in new-answer.components.ts addQuestion: ", this.newAnswer);
        console.log("This is the question id:", this.question["_id"]);
        this._questionService.addAnswer(this.newAnswer, this.question["_id"])
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("added the answer ", data);
                _this._router.navigate(['question/' + _this.question["_id"]]);
            }
        });
    };
    return NewAnswerComponent;
}());
NewAnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-answer',
        template: __webpack_require__("../../../../../src/app/new-answer/new-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-answer/new-answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], NewAnswerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n}\n\nform{\n    width: 100%;\n    margin: auto;\n\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    /*background-color: #333;*/\n}\n\nli {\n    float: right;\n}\n\nli a {\n    display: block;\n    color: #111;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: black;\n}\n.welcome{\n    font-size: 20px;\n    display: block;\n    color: #111;\n    float: left;\n    padding: 14px 16px;\n    text-decoration: none;\n    \n}\nh2{\n    text-align: center;\n}\n\n.addQuestion{\n    font-family: 'Sanchez', serif;\n    text-decoration: none;\n    font-size: 30px;\n   \n}\n\n\n.active {\n    background-color: #4CAF50;\n}\n\n#content{\n    margin-left: 20%;\n    margin-right: 20%;  \n}\n.question-box{\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n.description-box{\n    width: 100%;\n    height: 100px;\n    overflow-y: scroll;\n}\n\n.right{\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n<ul>\n\t<li class=\"welcome\">Biology 201 | Q&A board</li>\n  <li><a (click)=\"logout()\" >Logout</a></li>\n  <li><a href=\"#news\">New Answers</a></li>\n  <li><a href=\"#contact\">Profile</a></li>\n  <li><a class=\"active\" [routerLink]=\"['/new_question']\">Add Question </a></li>\n  <li><a  [routerLink]=\"['/']\" >Home</a></li>\n\n</ul>\n\n</header>\n\n\n\n\n<div class=\"container\">\n\n  <div class=\"well\">\n\n    <h2 class=\"addQuestion\">Enter your question</h2>\n  <form (submit)=\"addQuestion()\">\n    <div class=\"form-group\">\n      <label >Title:</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter title\" name=\"title\"\n      [(ngModel)]=\"newQuestion.title\">\n    </div>\n    <div class=\"form-group\">\n      <label >Description</label>\n      <textarea class=\"form-control description-box\" placeholder=\"Enter description\" name=\"description\"\n      [(ngModel)]=\"newQuestion.description\"\n      ></textarea>\n  \n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-default\">Add Question</button>\n  </form>\n</div>\n\n</div>\n\n<!-- <div id=\"content\">\n<br><br>\n<h2 class=\"addQuestion\">Enter your question</h2>\n<form >\n\t<input class=\"question-box\" type=\"text\" name=\"title\" value=\"title\"\n\t\t >\n\t\t<br>\n\t<textarea class=\"description-box\" type=\"text\" name=\"Description\" value=\"description\"\n\t\t  ></textarea>\n\t<input class=\"right\" type=\"submit\" name=\"\">\n\t\n\n\t\n\n</form>\n\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewQuestionComponent = (function () {
    function NewQuestionComponent(_logRegService, _questionService, _router) {
        this._logRegService = _logRegService;
        this._questionService = _questionService;
        this._router = _router;
        this.currentUser = { name: '', username: '', email: '' };
        this.newQuestion = {
            //user: this.currentUser["name"],
            title: "Title",
            description: "Description",
            likes: 0,
        };
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
                console.log(_this.currentUser);
            }
        });
    };
    NewQuestionComponent.prototype.addQuestion = function () {
        var _this = this;
        console.log("in new-question.components.ts addQuestion: ", this.newQuestion);
        this._questionService.addQuestion(this.newQuestion)
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("added the question ", data);
                _this._router.navigate(['/']);
            }
        });
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n\t\n}\n\n\n\ntable {\n    width: 100%;\n\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    /*background-color: #333;*/\n}\n\nli {\n    float: right;\n}\n\nli a {\n    display: block;\n    color: #111;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: black;\n}\n\n.welcome{\n\tfont-size: 20px;\n\tdisplay: block;\n    color: #111;\n    float: left;\n    padding: 14px 16px;\n    text-decoration: none;\n    \n}\n\n.active {\n    background-color: #4CAF50;\n}\n\n\nh2{\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n#img-header{\n\twidth: 100%;\n\theight: 100px;\n}\n/*img{\n\twidth: 100%;\n}*/\n\n#content{\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n\t\n}\n\n#logout{\n\tfloat: right;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-top: 25px;\n}\n\n#logout:hover{\n\tfont-size: 1.1em;\n    font-weight: bolder;\n    /*border-bottom: solid 2px rgb(59,134,134);*/\n    display: inline;\n    padding-bottom: 3px;\n\n}\n\n#search{\n\tdisplay: block;\n\tfloat: right;\n\tmargin-top: 10px;\n\t\n}\n\n\n.addQuestion{\n\tfont-family: 'Sanchez', serif;\n\ttext-decoration: none;\n\tfont-size: 30px;\n\tdisplay: inline-block;\n}\n\n.addQuestion:hover{\n/*\n*/\n}\n\n.questions{\n\ttext-decoration: none;\n}\n\n.q-links{\n\tfont-weight: bold;\n}\n\n.center{\n\tpadding-left: 26px;\n}\n\n.details{\n\tfont-size: 12px;\n}\np{\n\tmargin-bottom: 0\n}\n\n.right{\n\tfloat: right;\n}\n\n.answer-box{\n\twidth: 100%;\n\theight: 80px;\n\toverflow-y: scroll;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n<ul>\n\t<li class=\"welcome\">Biology 201 | Q&A board</li>\n  <li><a (click)=\"logout()\" >Logout</a></li>\n  <li><a href=\"#news\">New Answers</a></li>\n  <li><a href=\"#contact\">Profile</a></li>\n  <li><a [routerLink]=\"['/new_question']\">Add Question </a></li>\n  <li><a  [routerLink]=\"['/']\" >Home</a></li>\n\n</ul>\n\n</header>\n\n\n<div class=\"container\">\n<div class=\"well\">\n<h2 class=\"addQuestion\">\n<span style=\"font-size:50px;line-height:0em;opacity:0.2\">❝ㅤㅤㅤ</span>{{question.title}}<span style=\"font-size:50px;line-height:0em;opacity:0.2\">        ❞</span></h2>\n<p>{{question.description}}</p>\n<hr>\n<div >\n  <form (submit)=\"addAnswer()\">\n    <div class=\"form-group\">\n    \t<textarea class=\"form-control\" placeholder=\"Enter an answer\" name=\"Description\" [(ngModel)]=\"newAnswer.description\">> </textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Answer </button>\n  </form>\n</div>\n</div>\n\n<div class=\"well\" *ngIf=\"question.answers.length>0\">\n\n<div *ngFor=\"let answer of question.answers\"> \n\n\t<p>{{answer.description}}</p>\n\t<p class=\"details\">Submitted by <a class=\"q-links\" href=\"\">{{answer.user}}</a> on {{answer.createdAt | date: \"MM/dd/yyyy 'at' h:mma\"}} | <span class=\"q-links\">{{answer.likes}} likes</span> <button (click)=\"addLike(answer._id)\">Like!</button></p>\n<!-- \t<p>{{answer.title}}</p> -->\n\t<hr>\n\t\n</div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionDetailsComponent = (function () {
    function QuestionDetailsComponent(_logRegService, _router, _questionService, _route) {
        this._logRegService = _logRegService;
        this._router = _router;
        this._questionService = _questionService;
        this._route = _route;
        this.currentUser = { "name": "" };
        this.question = {};
        this.newAnswer = {
            user: this.currentUser["name"],
            title: "",
            description: "",
            likes: 0,
        };
    }
    QuestionDetailsComponent.prototype.ngOnInit = function () {
        this.loadQuestion();
        this.getUser();
    };
    QuestionDetailsComponent.prototype.addLike = function (answer_id) {
        var _this = this;
        console.log("adding likes to answer: ", answer_id);
        this._questionService.addLike({ "_id": answer_id })
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("successfully added a like", data);
                //this.question = data;
                //console.log(this.question);
                console.log('test');
                _this.loadQuestion();
                _this._router.navigate(['/question/' + _this.question["_id"]]);
            }
        });
    };
    QuestionDetailsComponent.prototype.loadQuestion = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            console.log("got the param", params.get('id'));
            var id = params.get('id');
            _this._questionService.getQuestion({ "_id": id })
                .then(function (data) {
                if (data.errors) {
                    console.log(data.errors);
                }
                else {
                    console.log("successfully got the question ", data);
                    _this.question = data;
                    console.log(_this.question);
                }
            });
        });
    };
    QuestionDetailsComponent.prototype.addAnswer = function () {
        var _this = this;
        this.newAnswer["user"] = this.currentUser["name"];
        console.log("in new-answer.components.ts addQuestion: ", this.newAnswer);
        console.log("This is the question id:", this.question["_id"]);
        this._questionService.addAnswer(this.newAnswer, this.question["_id"])
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("added the answer ", data);
                _this.loadQuestion();
                _this._router.navigate(['question/' + _this.question["_id"]]);
            }
        });
    };
    QuestionDetailsComponent.prototype.getUser = function () {
        var _this = this;
        //checking if user is logged in
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
    };
    return QuestionDetailsComponent;
}());
QuestionDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-details',
        template: __webpack_require__("../../../../../src/app/question-details/question-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-details/question-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], QuestionDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=question-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.addQuestion = function (question) {
        console.log("in question.service.ts: addQuestion()");
        return this._http.post('/api/questions', question).map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.getQuestions = function () {
        console.log("in question.service.ts: getQuestions()");
        return this._http.get('/api/questions').map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.getQuestion = function (question_id) {
        console.log("in question.service.ts: getQuestion()", question_id);
        return this._http.post('/api/question', question_id).map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.addAnswer = function (answer, question_id) {
        console.log("in question.service.ts: addQuestion()");
        return this._http.post('/api/question/' + question_id + '/new_answer', answer).map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.addLike = function (answer_id) {
        console.log("in question.service.ts: addLike()");
        return this._http.post('/api/answer/addlike', answer_id).map(function (Response) { return Response.json(); }).toPromise();
    };
    return QuestionService;
}());
QuestionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n\tbackground-image: url(\"https://images.pexels.com/photos/248152/pexels-photo-248152.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tmargin: 0;\n\tpadding: 0;\n}\nhtml{\n\tmargin: 0;\n\tpadding: 0;\n}\n\n/**{\n\tcolor: red;\n}*/\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    /*background-color: #333;*/\n}\n\nli {\n    float: right;\n}\n\nli a {\n    display: block;\n    color: #111;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: black;\n}\n\n.welcome{\n\tfont-size: 20px;\n\tdisplay: block;\n    color: #111;\n    float: left;\n    padding: 14px 16px;\n    text-decoration: none;\n    \n}\n\n.active {\n    background-color: #4CAF50;\n}\n\n\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\n\nheader{\n/*\twidth: 100%;*/\n}\n\nh2{\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n#img-header{\n\twidth: 100%;\n\theight: 100px;\n}\n/*img{\n\twidth: 100%;\n}*/\n\n#content{\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n\t\n}\n\n#logout{\n\tfloat: right;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-top: 25px;\n}\n\n#logout:hover{\n\tfont-size: 1.1em;\n    font-weight: bolder;\n    /*border-bottom: solid 2px rgb(59,134,134);*/\n    display: inline;\n    padding-bottom: 3px;\n\n}\n\n#search{\n\tdisplay: block;\n\t\n\tmargin-top: 10px;\n\t\n}\n\n\n.addQuestion{\n\tfont-family: 'Sanchez', serif;\n\ttext-decoration: none;\n\tfont-size: 30px;\n\tdisplay: inline-block;\n}\n\n.addQuestion:hover{\n/*\n*/\n}\n\n.questions{\n\ttext-decoration: none;\n\n}\n\n.questions:hover{\n\ttext-decoration: underline;\n\tcolor: blue;\n}\n\n\n.q-links{\n\tfont-weight: bold;\n}\n\n.center{\n\tpadding-left: 26px;\n}\n\n.details{\n\tfont-size: 12px;\n}\np{\n\tmargin-bottom: 0\n}\n\n.right{\n\tfloat: right;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\n\n<ul>\n\t<li class=\"welcome\">Biology 201 | Q&A board</li>\n  <li><a (click)=\"logout()\" >Logout</a></li>\n  <li><a href=\"#news\">New Answers</a></li>\n  <li><a href=\"#contact\">Profile</a></li>\n  <li><a [routerLink]=\"['/new_question']\">Add Question </a></li>\n  <li><a  class=\"active\" [routerLink]=\"['/']\" >Home</a></li>\n\n</ul>\n\n</header>\n<!-- <p class=\"welcome\">Welcome {{currentUser.name}} !</p> -->\n\n<div class=\"container\">\n\n\n<div class=\"well\" > \n\n\t<p id=\"search\" class=\"addQuestion\">Search <input type=\"text\" name=\"search\"\n\t[(ngModel)]=\"searchTerm\" #search= \"ngModel\" (keyup)=\"searchQuestions()\">\n</p>\n</div>\n\n<div class=\"well\">\n<div class=\"card\" *ngFor=\"let question of questions\">\n\t<p><a class=\"questions\" [routerLink]=\"['/question', question._id]\">{{question.title}}</a></p>\n\t<p class=\"details\" >Submitted by <a class=\"q-links\" href=\"\">{{question.user}}</a> on  {{question.createdAt | date: \"MM/dd/yyyy 'at' h:mma\"}} | \n\t\t<a class=\"q-links\" [routerLink]=\"['/question', question._id]\">{{question[\"answers\"].length}} answers</a> </p>\n\t\t<hr>\n</div>\n\n</div>\n\n<!-- <table>\n\t<tr>\n\t\t<th>Questions</th>\n\t\t<th>Answers</th>\n\t\t<th>Action</th>\n\t</tr>\n\t<tr *ngFor=\"let question of questions\">\n\t\t<td>{{question.title}}</td>\n\t\t<td><span class=\"center\" >{{question[\"answers\"].length}}</span></td>\n\t\t<td><a [routerLink]=\"['/question', question._id]\" >Show</a> \n\n\t\t\t<a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer</a></td>\n\n\t</tr>\n</table> -->\n\n\n</div>\n<!-- <p>Name: {{currentUser.name}}</p>\n<p>Email: {{currentUser.email}}</p>\n<p>Username: {{currentUser.username}}</p> -->"

/***/ }),

/***/ "../../../../../src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuccessComponent = (function () {
    function SuccessComponent(_questionService, _logRegService, _router) {
        this._questionService = _questionService;
        this._logRegService = _logRegService;
        this._router = _router;
        this.currentUser = { name: '', username: '', email: '' };
        this.questions = [];
        this.searchTerm = "";
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
        this.getQuestions();
    };
    SuccessComponent.prototype.getQuestions = function () {
        var _this = this;
        console.log("loading questions");
        this._questionService.getQuestions()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to get questions");
                _this._router.navigate(['/']);
                return false;
            }
            else {
                console.log("found cquestions/");
                _this.questions = data;
                return _this.questions;
            }
        });
    };
    SuccessComponent.prototype.logout = function () {
        var _this = this;
        console.log("in logout function");
        this._logRegService.logout()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to logout");
                _this._router.navigate(['login']);
            }
            else {
                console.log("User has been logged out");
                _this._router.navigate(['login']);
            }
        });
    };
    SuccessComponent.prototype.searchQuestions = function () {
        var _this = this;
        if (this.searchTerm == "") {
            this.getQuestions();
        }
        this.questions = this.questions.filter(function (question) {
            return question.title.includes(_this.searchTerm);
        });
    };
    return SuccessComponent;
}());
SuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-success',
        template: __webpack_require__("../../../../../src/app/success/success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/success/success.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SuccessComponent);

var _a, _b, _c;
//# sourceMappingURL=success.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map