/*
function constructorObject(input, [obj] = []) {
    return tryCatch((value, o) => value.constructor === o, [input, obj]);
}

function constructorName(input, [name] = []) {
    return tryCatch((value, o) => {
        const name1 = String(value.constructor.name).toLocaleLowerCase();
        const name2 = String(o).toLocaleLowerCase();

        return name1 === name2;
    }, [input, name]);
}

function tryCatch(input, [...args]) {
    try {
        return input(...args);
    } catch (error) {}

    return false;
}

console.log(constructorObject(/^/));
console.log(constructorObject(/^/, [RegExp]));
console.log(constructorName('aa', ['regexp']));
*/

export * from './packages/boolean-type';
