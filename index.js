const xhr = new XMLHttpRequest();

xhr.open(
  'get',
  'https://raw.githubusercontent.com/newstarellie/API-Echart-6-29/main/301000000A-001660-007.json',
  true
);

xhr.send(null);

xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);
  console.log(data.result.limit);

  console.log(data.result.records[1].marriage_type);
  document.querySelector('.dataAll').textContent =
    data.result.records[5].marriage_type;

  //for 抓到前五的婚姻類型
  let marriage_type_diff_sex = 0;
  let marriage_type_same_sex = 0;
  for (let i = 1; i < 2000; i++) {
    if (data.result.records[i].marriage_type == '不同性別') {
      //console.log('不同性別');
      marriage_type_diff_sex += 1;
      //console.log(marriage_type_diff_sex);
    } else {
      //console.log('相同性別');
      marriage_type_same_sex += 1;
      //console.log(marriage_type_same_sex);
    }
  }
  console.log(marriage_type_diff_sex);

  console.log(marriage_type_same_sex);
};
