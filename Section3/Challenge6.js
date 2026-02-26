const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

const bills = [125, 555, 44];

const tips = bills.map((bill) => {
  return calcTip(bill);
});

console.log(tips);
