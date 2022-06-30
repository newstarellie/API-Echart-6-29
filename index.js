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

  //for 抓到婚姻類型
  let marriage_type_diff_sex = 0;
  let marriage_type_same_sex = 0;
  for (let i = 1; i < 2000; i++) {
    if (data.result.records[i].marriage_type == '不同性別') {
      marriage_type_diff_sex += 1;
    } else {
      marriage_type_same_sex += 1;
    }
  }
  console.log(marriage_type_diff_sex);

  console.log(marriage_type_same_sex);
};

var dataC = {};
// 年分
//性別
//數量
/*
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '2015', '2016', '2017'], //X軸
      ['Matcha Latte', 43.3, 85.8, 93.7], 
		//對應到上面['product', '2015', '2016', '2017']
		// EX: Matcha Latte 2015年的數量是43.3
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  xAxis: { type: 'category' },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
*/
