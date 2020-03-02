"use strict";

// при старте показываем Цели
turnOnGoals();
turnOffActions();


// обработчик выбора меню Цели
function goalsMenuClick() {
    turnOffActions();
    turnOnGoals();
}

// обработчик выбора меню Действия
function actionsMenuClick() {
    turnOnActions();
    turnOffGoals();
}

function turnOnGoals() {
    let divGoals = document.getElementById("goals");
    divGoals.style.display = "";
}

function turnOffGoals() {
    let divGoals = document.getElementById("goals");
    divGoals.style.display = "none";
}

function turnOnActions() {
    let divActions = document.getElementById("actions");
    divActions.style.display = "";
}

function turnOffActions() {
    let divActions = document.getElementById("actions");
    divActions.style.display = "none";
}


// обработчик ввода новой цели
function onAddGoal(){
    // проверка, что указано имя цели
    let divGoalName = document.getElementById("goalName");
    let goalNumericArgument = document.getElementById("goalNumericArgument");
    if (!divGoalName.value){
        alert("Укажите название цели!");
        return;
    }

    // отображаем div с новой целью
    /* добавляем вот такой div:
    <div>
        <p style="margin-top: 20px; margin-bottom: 0;">Название цели - 25% (25/100)</p>
        <div class="progress" style="margin-top: 0;">
            <div class="progress-bar" role="progressbar" style="width: 45%;" aria-valuenow="25" 
                aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    */
    let divGoals = document.getElementById("goals");    
    let div = document.createElement('div');
    div.innerHTML = '<div><p style="margin-top: 20px; margin-bottom: 0;">' + divGoalName.value + ' - 0% (0/' + goalNumericArgument.value + ')</p><div class="progress" style="margin-top: 0;"><div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div>';

    divGoals.appendChild(div);

    // очищаем поля ввода
    divGoalName.value = "";
    goalNumericArgument.value = "";
    
}

