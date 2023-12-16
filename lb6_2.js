function create(){
    let M = prompt('Введите порядок квадратной матрицы: ',1);
    let arr = [];
    for (let i = 0; i < M; i++){
        arr.push([]);
    }
    for (let i = 0; i < M; i++){
        for(let j = 0; j < M; j++){
            arr[i].push(prompt('Введите число: ', 1));
        }
    }
    return [arr, M];
}
function nulling(n){
    let arr = n[0];
    let M = n[1];
    let i1 = Math.trunc(+M/2)-1;
    let i2 = M-i1-1;
    for (let j = Math.trunc(+M/2)+1; j < M; j++) {
        i1++;
        i2--;
        for (i = i2; i <= i1 && j+i>=M; i++){
            arr[i][j] = '0';
        }
    }
    return arr;
}
console.log(nulling(create()));
