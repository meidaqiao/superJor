/**
 * Created by meitaiqiao on 2019/3/27.
 */
var http = require('http');
var https = require('https');
var server = http.createServer();
var fs = require('fs');
server.listen('8080');
var url = require('url');
server.on('request',(request,response)=>{
  var path = url.parse(request.url);
  if(path.pathname == '/') {
    fs.readFile('./html/coress.html',(err,info)=>{
      response.write(info);
      response.end();
    })
  } else if(path.pathname.startsWith('/v1')) { //服务器转发请求
    var request =  https.request({
      hostname:'xiaoce-timeline-api-ms.juejin.im',
      port:'443',
      path:path.path,
      method:'GET'
    },(resp)=>{
      let results = '';
      resp.on('data',(dataObj)=>{
        results += dataObj;
      })
      resp.on('end',()=>{
        console.log(results);
        response.write(results);
        response.end();
      })
    })
    request.end();
  }
})
//http://localhost:8080/v1/getListByLastTime?uid=&client_id=&token=&src=web&pageNum=1
