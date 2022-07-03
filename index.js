function sortData(data) {
  let marriage_type_diff_sex = 0;
  let marriage_type_same_sex = 0;
  //計算婚姻類型的數量
  for (let i = 1; i < 2000; i++) {
    if (data.result.records[i].marriage_type == '不同性別') {
      marriage_type_diff_sex += 1;
    } else {
      marriage_type_same_sex += 1;
    }
  }
  console.log(marriage_type_diff_sex);
  console.log(marriage_type_same_sex);
}

function sendGet(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.send(null);
  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    sortData(data);
  };
}

sendGet(
  'https://raw.githubusercontent.com/newstarellie/API-Echart-6-29/main/dataJson/109.json'
);
