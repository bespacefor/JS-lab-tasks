const input = document.getElementById('input');
const output = document.getElementById('output');
const button = document.getElementById('button');

function permutation(str) {
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str]
    }
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(permutation(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
    );
}

function print(str) {
    output.value = Array.from(
        new Set(permutation(str))
    ).sort().join(', ');
}

button.addEventListener('click', () => {
    permutation(input.value);
    print(input.value);
});
