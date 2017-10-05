class KeyView {
    constructor() {
        this.up = false;

        document.addEventListener("keydown", (keyBoardDown) => {
            if (keyBoardDown.keyCode == 32) {
                this.up = true;
            }
        });

        document.addEventListener("keyup", (keyBoardUp) => {

            if(keyBoardUp.keyCode == 32) {
                this.up = false;
            }
        });
    }

    get location (){
        return {

            up: this.up,

        };
    }
}

module.exports = KeyView;

