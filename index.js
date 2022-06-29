const xhr = new XMLHttpRequest();

xhr.open(
  'get',
  'https://raw.githubusercontent.com/newstarellie/API-Echart-6-29/main/301000000A-002037-005.json',
  true
);

xhr.send(null);

xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);
  console.log(data.result.records[0]);
  document.querySelector('.dataAll').textContent = data.result;
};
