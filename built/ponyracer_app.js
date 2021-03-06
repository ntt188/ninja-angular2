var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var races_cmp_1 = require('./races_cmp');
var ponies_cmp_1 = require('./ponies_cmp');
var PonyRacerApp = (function () {
    function PonyRacerApp() {
        this.numberOfUsers = 146;
        this.user1 = { name: 'home' };
    }
    PonyRacerApp = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            template: "\n    <h1>PonyRacer</h1>\n    <h2>{{numberOfUsers}} users</h2>\n    <h2>Welcome {{user1.name}}</h2>\n    <h2>Welcome {{user2?.name}}</h2>\n    <races-cmp></races-cmp>\n    <ponies-cmp></ponies-cmp>\n  ",
            directives: [races_cmp_1.RacesCmp, ponies_cmp_1.PoniesCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], PonyRacerApp);
    return PonyRacerApp;
})();
exports.PonyRacerApp = PonyRacerApp;
//# sourceMappingURL=ponyracer_app.js.map