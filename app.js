// https://www.omnicalculator.com/math/average

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 =  document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const v7 =  document.getElementById('v7');
const v8 = document.getElementById('v8');
const v9 = document.getElementById('v9');
const v10 = document.getElementById('v10');
const values = document.getElementById('values');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');
const variable6 = document.getElementById('variable6');
const variable7 = document.getElementById('variable7');
const variable8 = document.getElementById('variable8');
const variable9 = document.getElementById('variable9');
const variable10 = document.getElementById('variable10');

// The default option is of select tag is ten
values.value = 'ten';

values.addEventListener('click', function() {
  if(values.value === 'one') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='none';variable2.style.display='none';v3.style.display='none';variable3.style.display='none';v4.style.display='none';variable4.style.display='none';v5.style.display='none';variable5.style.display='none';v6.style.display='none';variable6.style.display='none';v7.style.display='none';variable7.style.display='none';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'two') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='none';variable3.style.display='none';v4.style.display='none';variable4.style.display='none';v5.style.display='none';variable5.style.display='none';v6.style.display='none';variable6.style.display='none';v7.style.display='none';variable7.style.display='none';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'three') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='none';variable4.style.display='none';v5.style.display='none';variable5.style.display='none';v6.style.display='none';variable6.style.display='none';v7.style.display='none';variable7.style.display='none';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'four') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='none';variable5.style.display='none';v6.style.display='none';variable6.style.display='none';v7.style.display='none';variable7.style.display='none';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'five') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='inline';variable5.style.display='inline';v6.style.display='none';variable6.style.display='none';v7.style.display='none';variable7.style.display='none';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'six') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='inline';variable5.style.display='inline';v6.style.display='inline';variable6.style.display='inline';v7.style.display='none';variable7.style.display='none';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'seven') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='inline';variable5.style.display='inline';v6.style.display='inline';variable6.style.display='inline';v7.style.display='inline';variable7.style.display='inline';v8.style.display='none';variable8.style.display='none';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'eight') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='inline';variable5.style.display='inline';v6.style.display='inline';variable6.style.display='inline';v7.style.display='inline';variable7.style.display='inline';v8.style.display='inline';variable8.style.display='inline';v9.style.display='none';variable9.style.display='none';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'nine') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='inline';variable5.style.display='inline';v6.style.display='inline';variable6.style.display='inline';v7.style.display='inline';variable7.style.display='inline';v8.style.display='inline';variable8.style.display='inline';v9.style.display='inline';variable9.style.display='inline';v10.style.display='none';variable10.style.display='none'};
  if(values.value === 'ten') {v1.style.display='inline';variable1.style.display='inline';v2.style.display='inline';variable2.style.display='inline';v3.style.display='inline';variable3.style.display='inline';v4.style.display='inline';variable4.style.display='inline';v5.style.display='inline';variable5.style.display='inline';v6.style.display='inline';variable6.style.display='inline';v7.style.display='inline';variable7.style.display='inline';v8.style.display='inline';variable8.style.display='inline';v9.style.display='inline';variable9.style.display='inline';v10.style.display='inline';variable10.style.display='inline'};
})

btn.addEventListener('click', function() {
  
  if(values.value === 'one')
    result.textContent = `Mean average = ${compute1().toFixed(2)}`;

  if(values.value === 'two')
    result.textContent = `Mean average = ${compute2().toFixed(2)}`;

  if(values.value === 'three')
    result.textContent = `Mean average = ${compute3().toFixed(2)}`;

  if(values.value === 'four')
    result.textContent = `Mean average = ${compute4().toFixed(2)}`;

  if(values.value === 'five')
    result.textContent = `Mean average = ${compute5().toFixed(2)}`;

  if(values.value === 'six')
    result.textContent = `Mean average = ${compute6().toFixed(2)}`;

  if(values.value === 'seven')
    result.textContent = `Mean average = ${compute7().toFixed(2)}`;

  if(values.value === 'eight')
    result.textContent = `Mean average = ${compute8().toFixed(2)}`;

  if(values.value === 'nine')
    result.textContent = `Mean average = ${compute9().toFixed(2)}`;

  if(values.value === 'ten')
    result.textContent = `Mean average = ${compute10().toFixed(2)}`;
})

// calculation

function compute1() {
  return Number(v1.value);
}
function compute2() {
  return (Number(v1.value) + Number(v2.value)) / 2;
}
function compute3() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value)) / 3;
}
function compute4() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value)) / 4;
}
function compute5() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value) + Number(v5.value)) / 5;
}
function compute6() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value) + Number(v5.value) + Number(v6.value)) / 6;
}
function compute7() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value) + Number(v5.value) + Number(v6.value) + Number(v7.value)) / 7;
}
function compute8() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value) + Number(v5.value) + Number(v6.value) + Number(v7.value) + Number(v8.value)) / 8;
}
function compute9() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value) + Number(v5.value) + Number(v6.value) + Number(v7.value) + Number(v8.value) + Number(v9.value)) / 9;
}
function compute10() {
  return (Number(v1.value) + Number(v2.value) + Number(v3.value) + Number(v4.value) + Number(v5.value) + Number(v6.value) + Number(v7.value) + Number(v8.value) + Number(v9.value) + Number(v10.value)) / 10;
}