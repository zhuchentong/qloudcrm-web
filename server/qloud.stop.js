const request=require('./util/requestHandle.js');
var uri=process.env.DISCOVERY_CLUSTER || 'http://qloudkernel.service.sd';
var serviceName=process.env.SERVICE_NAME || 'qlouddemo';

//---------------------------------------------------
///-----------------------------------------------------取消服务注册/services/{
var getoptions =
    {
        url: uri+'/discovery/services/'+serviceName,
        method: 'GET'
    };
request(getoptions, (error, response, data)=>{
    if(error){
        console.error(error)
    }else{
        if(response.statusCode==200){
            data=JSON.parse(data);
            if(data.constructor == Array){
                if(data.length>0){
                    for(var i=0;i<data.length;i++){
                        request({url:uri+'/discovery/services/'+data[i].ServiceID,method:"DELETE"}, (error1, response1, data1)=>{

                            if(error1){
                                console.error(error1)
                            }else{
                                if(response1.statusCode==200){
                                    console.log("取消服务注册成功")
                                }else{
                                    console.error(data1)
                                }

                            }
                        })
                    }

                }
            }
        }else{
            console.error(data)
        }

    }
});
