let Goals = [];

function addNewGoal(name, target) {
    Goals.push({
        name,
        target,
        current: 0,
    });
    createGoal(name, target);
}