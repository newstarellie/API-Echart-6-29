const xhr = new XMLHttpRequest();

xhr.open(
  'get',
  'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-002037-005.json',
  true
);

xhr.send(null);

xhr.onload = function () {
  console.log(xhr);
  console.log(xhr.responseText);
};
