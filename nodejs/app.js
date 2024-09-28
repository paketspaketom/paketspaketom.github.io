let bank = 150;
const name = 'Вячеслав';
const broke = false;

bank = 250;

function summarize(money, owner, isBroke) {
    return (
        'у ' + owner + 'є ' + money + ' грошей. Скарбничка розбита: ' + isBroke
    );
}

console.log(summarize(bank, name, broke))