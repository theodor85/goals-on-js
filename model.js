
// инициализация
// *************************************************
let DB = indexedDB.open("store", 1);

DB.onerror = function() {
    console.error("Error", DB.error);
};

DB.onupgradeneeded = function() {
    let db = DB.result;
    db.createObjectStore('goals', {autoIncrement: true});
    console.log("DB was upgraded");
};

DB.onsuccess = function() {
    let db = DB.result;
    console.log("DB was opened successfully");
};

// API
// *************************************************
function createGoal(name, target) {
    console.log("Внутри createGoal");
    console.log(name);
    console.log(target);

    let db = DB.result;
    transaction = db.transaction("goals", "readwrite");

    // получить хранилище объектов для работы с ним
    let goalsStore = transaction.objectStore("goals");

    let newGoal = {
        name,
        target,
        current: 0,
    }

    let request = goalsStore.add(newGoal);

    request.onsuccess = function() { // (4)
        console.log("Цель добавлена в хранилище", request.result);
    };
      
    request.onerror = function() {
        console.log("Ошибка", request.error);
    };
}