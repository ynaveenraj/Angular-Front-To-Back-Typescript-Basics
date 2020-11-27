"use strict";
exports.__esModule = true;
exports.LikesComponent = void 0;
var LikesComponent = /** @class */ (function () {
    function LikesComponent(likesCount, isLiked) {
        this.likesCount = likesCount;
        this.isLiked = isLiked;
    }
    LikesComponent.prototype.onClick = function () {
        this.likesCount += this.isLiked ? 1 : -1;
        this.isLiked = !this.isLiked;
    };
    return LikesComponent;
}());
exports.LikesComponent = LikesComponent;
