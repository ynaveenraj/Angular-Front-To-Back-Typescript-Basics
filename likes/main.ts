import { LikesComponent } from "./likes.component";

let likesComponent = new LikesComponent(9, true);
likesComponent.onClick();
console.log(`Likes Count : ${likesComponent.likesCount}, isSelected : ${likesComponent.isLiked}`);