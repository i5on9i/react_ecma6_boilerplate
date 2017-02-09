

export const ajaxSend = (options)=>{
    var {type, url, success, error, dataType} = options
    
    var xhr = new XMLHttpRequest();
	
    let _type = type || 'GET';
    xhr.open(type, encodeURI(url));
	xhr.responseType = dataType || '';
    
    // User-Agent
    // the below does not work, see background.js to change user-agent
    // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36")
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            if(success !== 'undefined'){
                success(xhr.response)    
            }
            
        }
        else {
            if(error !== 'undefined'){
                error(xhr, xhr.status)    
            }
        }
        
    };
    xhr.send();
 
}
