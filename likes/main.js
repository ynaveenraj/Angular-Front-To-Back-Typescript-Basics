"use strict";
exports.__esModule = true;
var likes_component_1 = require("./likes.component");
var likesComponent = new likes_component_1.LikesComponent(9, true);
likesComponent.onClick();
console.log("Likes Count : " + likesComponent.likesCount + ", isSelected : " + likesComponent.isLiked);
