/*
        Name: John Kuczynski, John_Kuczynski@student.uml.edu, Student at UMass Lowell.
        Class: COMP 4610-201, GUI Programming I.
        File: /usr/cs/2019/jkuczyn1/public_html/461f2017/Kuczynski-John_comp4610f2017-final-project/js/MyJs.js. The file is named MyJs.js, and it is in directory /usr/cs/2019/jkuczyn1/public_html/461f2017/Kuczynski-John_comp4610f2017-final-project/js
        This file was created on 1-Dec-2017.
        Last updated by JK on 12-Dec-2017, 20:40.
        Description: A website which provides two calculators. One accepts inputs concerning grades, and displays the current final grade, and the best possible final grade. The other is a house calculator, which displays the cost of renting, and the cost of buying a house.
*/

function CalcCostPerMonth(U1, A11, A12, A13, A14)
{
  var DownPayment = (U1-A11) * (A12/100.0);
  //The original sum - (down payment and the discounts)
  var Principal = U1 - (DownPayment + A11);
  var MonthlyInterestRate = (A14/100.0)/12.0;
  var NumberOfMonths = A13;
    
  return Principal*((MonthlyInterestRate*Math.pow((1 + MonthlyInterestRate), NumberOfMonths))/(Math.pow((1 + MonthlyInterestRate), NumberOfMonths) - 1));
}
