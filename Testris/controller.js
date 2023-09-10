function init() {
    blank();
    updateView();
}

function blank() {
    board = [
        '', '', '', '', // rad 1
        '', '', '', '', // rad 2
        '', '', '', '', // rad 3
        '', '', '', '', // rad 4
    ];
}

function addL(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[9] = color;
    board[10] = color;
    updateView();
}

function addT(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[6] = color;
    board[9] = color;
    updateView();
}

function addI(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[9] = color;
    board[13] = color;
    updateView();
}

function rotate() {
    /*
        indeks, rad og kolonne for alle rutene på brettet: 
        |-------------------------|-------------------------|-------------------------|-------------------------|
        | indeks  0, col=0, rad=0 | indeks  1, col=1, rad=0 | indeks  2, col=2, rad=0 | indeks  3, col=3, rad=0 |
        | indeks  4, col=0, rad=1 | indeks  5, col=1, rad=1 | indeks  6, col=2, rad=1 | indeks  7, col=3, rad=1 | 
        | indeks  8, col=0, rad=2 | indeks  9, col=1, rad=2 | indeks 10, col=2, rad=2 | indeks 11, col=3, rad=2 | 
        | indeks 12, col=0, rad=3 | indeks 13, col=1, rad=3 | indeks 14, col=2, rad=3 | indeks 15, col=3, rad=3 | 
        |-------------------------|-------------------------|-------------------------|-------------------------|
    */
    let tmpBoard = [];
    for (let index = 0; index < board.length; index++) {
        let rowIndex;
        if (index == 0 || index == 1 || index == 2 || index == 3) rowIndex = 0;
        if (index == 4 || index == 5 || index == 6 || index == 7) rowIndex = 1;
        if (index == 8 || index == 9 || index == 10 || index == 11) rowIndex = 2;
        if (index == 12 || index == 13 || index == 14 || index == 15) rowIndex = 3;
        let colIndex;
        if (index == 0 || index == 4 || index == 8 || index == 12) colIndex = 0;
        if (index == 1 || index == 5 || index == 9 || index == 13) colIndex = 1;
        if (index == 2 || index == 6 || index == 10 || index == 14) colIndex = 2;
        if (index == 3 || index == 7 || index == 11 || index == 15) colIndex = 3;
        let newRowIndex;
        if (colIndex == 0) newRowIndex = 0;
        if (colIndex == 1) newRowIndex = 1;
        if (colIndex == 2) newRowIndex = 2;
        if (colIndex == 3) newRowIndex = 3;
        let newColIndex;
        if (rowIndex == 0) newColIndex = 3;
        if (rowIndex == 1) newColIndex = 2;
        if (rowIndex == 2) newColIndex = 1;
        if (rowIndex == 3) newColIndex = 0;
        let newIndex = newRowIndex * 4 + newColIndex;
        tmpBoard[newIndex] = board[index];
    }
    board = tmpBoard;
    updateView();
}
