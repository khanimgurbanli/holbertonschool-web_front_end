class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;

        function changeScoreBy(points) {
            privateScore += points;
        }

        return {
            setName: function (newName) {
                name = newName;
            },

            rewardStudent: function () {
                changeScoreBy(1);
            },

            penalizeStudent: function () {
                changeScoreBy(-1);
            },

            getScore: function () {
                return `${name} ${privateScore}`
            }
        }
    }
}

let harry = new studentHogwarts();
harry.name = "Harry";
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

const harryNameScore= harry.getScore();
console.log(harryNameScore);


let draco = new studentHogwarts();
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

const dracoNameScore = draco.getScore();
console.log(dracoNameScore);