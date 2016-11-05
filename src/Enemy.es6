class Enemy {
    constructor() {
        this.enemy = {
            xPos: 0,
            yPos: 0,
            height: 50,
            width: 50,
            color: "rgba(200,0,0,1)",
            xvel: 2,
            yvel: 2
        };
        // this.bounds;
    }



    get pos2() {
        return {
            x: this.enemy.xPos,
            y: this.enemy.yPos,
            width: this.enemy.width,
            height: this.enemy.height,
            color: this.enemy.color
        };
    }




    move(bounds) {
        this.enemy.xPos += this.enemy.xvel;
        this.enemy.yPos += this.enemy.yvel;


        if (this.enemy.xPos + this.enemy.width > bounds.width)
        {
            this.enemy.xPos = bounds.width - this.enemy.width;
            this.enemy.xvel *= -1;

        } else if (this.enemy.xPos < 0 )
        {
            this.enemy.xPos = 0;
            this.enemy.xvel *= -1;
        }
        if (this.enemy.yPos + this.enemy.height > bounds.height)
        {
            this.enemy.yPos = bounds.height - this.enemy.height;
            this.enemy.yvel *= -1;

        } else if (this.enemy.yPos < 0 )
        {
            this.enemy.yPos = 0;
            this.enemy.yvel *= -1;
        }
    }



}

module.exports = Enemy;