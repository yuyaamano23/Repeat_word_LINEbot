var CHANNEL_ACCESS_TOKEN = 'o3KyH/TUeihLLp1etRfadYTzGbVz9QcUsY+Pixm0DbWRaj/ej5eIiKabZ0H9mQA4J0HJUl5c2o1TKFJO1QPPclKavtd2DnACN7MmNCoPq3bh1V+O1UoffFJUMktxvAO8S+VEtxsR3Md4k2deRrv+LAdB04t89/1O/w1cDnyilFU=';

function doPost(e) {
  var replytoken= JSON.parse(e.postData.contents).events[0].replyToken;
  if (typeof replytoken === 'undefined') {
    return;
  }
  var user_message = JSON.parse(e.postData.contents).events[0].message.text;

  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replytoken,
      'messages': [{
        'type': 'text',
        'text': user_message,
      }],
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
