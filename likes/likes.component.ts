export class LikesComponent {
    
    constructor(public likesCount: number, public isLiked: boolean) {

    }

    onClick() {
        this.likesCount += this.isLiked?1:-1;
        this.isLiked = !this.isLiked;
    }

}