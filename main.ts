import { data } from "./src/scripts/data";

const dataAsArray = Object.entries(data)

let maxIncomeSeason = dataAsArray[0];

dataAsArray.forEach(([season, info]) => {
//ищем самый прибыльный сезон
if(info.income > maxIncomeSeason[1].income) {
    maxIncomeSeason = [season, info];
}
});

console.log("Самый прибыльный сезон", maxIncomeSeason[0]);
console.log("Доход в этом сезоне", maxIncomeSeason[1].income);

