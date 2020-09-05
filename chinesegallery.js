var paintingName = "";

function showMore(){
    document.getElementById("moreInfo").style.display= "block";
}

function closeMore(){
    document.getElementById("moreInfo").style.display = "none";
    $(".infoContent").empty();
    $(".headingContainer").empty();
}

function chooseImages(paintingName){
    switch (paintingName) {
        case 'ankang':
            appendTitle("安康");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《安康》《Felicity》50x40cm2019年王文华.png");
            appendDescription("《安康》50x40cm 2019年布面油画");
            break;

        case 'huakaifugui':
            appendTitle("花开富贵");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《花开富贵》《Flowers in Full Bloom》王文华 40x30cm 布面油画2016年.png");
            appendDescription("《花开富贵》40x30cm 2016年布面油画");
            break;

        case 'jinpingyulu':
            appendTitle("金瓶玉露");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《金瓶玉露》《Golden Vase and Jade Dew》50x40cm2019年王文华.png");
            appendDescription("《金瓶玉露》50x40cm 2019年布面油画");
            break;

        case 'yifang':
            appendTitle("一方");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/一方《One Square》50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《一方》50x50cm 2018年布面油画");
            break;
        
        case 'shufangyizishang':
            appendTitle("书房椅子上花瓶自有诗情画意");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/书房椅子上花瓶自有诗情画意 The vase on the chair in the study has its own poetic splendor 60x60cm  布面油画 2018年 王文华.png");
            appendDescription("《书房椅子上花瓶自有诗情画意》60x60cm 2018年布面油画");
            break;

        case 'shishiruyi':
            appendTitle("事事如意");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/事事如意 Wishes Fulfilled 50x50cm2019年 王文华.png");
            appendDescription("《事事如意》50x50cm 2019年布面油画");
            break;

        case 'guose':
            appendTitle("国色");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/国色 National Beauty 55x41cm  布面油画 2018年 王文华.png");
            appendDescription("《国色》55x41cm 2018年布面油画");
            break;

        case 'xiayong':
            appendTitle("夏涌");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/夏涌 Summer Gush 55x41cm  布面油画 2018年 王文华.png");
            appendDescription("《夏涌》55x41cm 2018年布面油画");
            break;

        case 'xiayun':
            appendTitle("夏韵");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/夏韵 Summer Tones 王文华 45x65cm 布面油画2015年.png");
            appendDescription("《夏韵》45x65cm 2015年布面油画");
            break;

        case 'guomin':
            appendTitle("敦敏");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/敦敏 Sincerity 50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《敦敏》50x50cm 2018年布面油画");
            break;

        case 'nuanxin':
            appendTitle("暖心");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/暖心 Heartwarming 76x50cm 2019年王文华.png");
            appendDescription("《暖心》76x50cm 2019年布面油画");
            break;

        case 'pingan':
            appendTitle("平安");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/平安 70x40cm2019年王文华.png");
            appendDescription("《平安》70x40cm 2019年布面油画");
            break;

        case 'zhizihuakai':
            appendTitle("栀子花开");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/栀子花开 Gardenia in blossom 51x41cm  布面油画 2018年 王文华.png");
            appendDescription("《栀子花开》51x41cm 2018年布面油画");
            break;

        case 'qihe':
            appendTitle("气和");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/气和 Serenity 51x41cm 2019年王文华.png");
            appendDescription("《气和》51x41cm 2019年布面油画");
            break;

        case 'shengse':
            appendTitle("盛色");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/盛色. Flourishing Colors 50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《盛色》50x50cm 2018年布面油画");
            break;

        case 'qihe':
            appendTitle("气和");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/气和 Serenity 51x41cm 2019年王文华.png");
            appendDescription("《气和》51x41cm 2019年布面油画");
            break;

        case 'qiuyun':
            appendTitle("秋韵");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/秋韵 Autumn Tones 50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《秋韵》50x50cm 2018年布面油画");
            break;

        case 'mijing':
            appendTitle("秘境");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/秘境 Enchanted Place 76x50cm 2019年 王文华.png");
            appendDescription("《秘境》76x50cm 2019年布面油画");
            break;

        case 'fensedaotian':
            appendTitle("粉色稻田");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/粉色稻田2015年 45x65cm.png");
            appendDescription("《粉色稻田》45x65cm 2015年布面油画");
            break;

        case 'honghonghuohuo':
            appendTitle("红红火火");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/红红火火50x50cm2019年王文华.png");
            appendDescription("《红红火火》50x50cm 2019年布面油画");
            break;

            case 'anna':
            appendTitle("安娜");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《安娜》王文华 布面油画  65x45cm.png");
            appendDescription("《安娜》65x45cm 布面油画");
            break;

            case 'shuaigexiaoxiang':
            appendTitle("帅哥肖像");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华 作品 肖像 65x45cm 布面油画 2017年.png");
            appendDescription("《帅哥肖像》65x45cm 2017年布面油画");
            break;

            case 'nanxiaoxiang':
            appendTitle("男肖像");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《男肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《男肖像》65x45cm 布面油画");
            break;

            case 'hongsexiaoxiang':
            appendTitle("红色肖像");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《红色肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《红色肖像》65x45cm 布面油画");
            break;

            case 'meinianda':
            appendTitle("美年达");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《美年达》王文华 布面油画80x60cm.png");
            appendDescription("《美年达》80x60cm 布面油画");
            break;

            case 'laozhe':
            appendTitle("老者");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《老者》王文华65x45cm2017年.png");
            appendDescription("《老者》65x45cm 2017年布面油画");
            break;

            case 'xiaoxiang1':
            appendTitle("肖像");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《肖像》65x45cm 布面油画");
            break;

            case 'miaozulaozhexiaoxiang':
            appendTitle("苗族老者肖像");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《苗族老者肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《苗族老者肖像》65x45cm 布面油画");
            break;

            case 'ruoyi':
            appendTitle("若依");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《若依》 王文华 80x60cm 布面油画 2015年.png");
            appendDescription("《若依》80x60cm 2015年布面油画");
            break;

            case 'ruoqi':
            appendTitle("若齐");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《若齐》 王文华 80x60cm 布面油画 2015年.png");
            appendDescription("《若齐》80x60cm 2015年布面油画");
            break;

            case 'landiao':
            appendTitle("蓝调");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《蓝调》王文华 布面油画 65x45cm 2017年.png");
            appendDescription("《蓝调》65x45cm 2017年布面油画");
            break;

            case 'laidaoguangzhou':
            appendTitle("来到广州");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/来到广州 王文华 60x50cm 布面油画 2013年.png");
            appendDescription("《来到广州》60x50cm 2013年布面油画");
            break;

            case 'niu':
            appendTitle("牛");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华 作品 牛2014年  60x80cm.png");
            appendDescription("《牛》60x80cm 2014年布面油画");
            break;

            case 'ma':
            appendTitle("马");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华 作品 马 2014年  60x80cm.png");
            appendDescription("《马》60x80cm 2014年布面油画");
            break;

            case 'tingjiantingbujian':
            appendTitle("听见 听不见");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华_作品 听见 听不见2014年173x148cm.png");
            appendDescription("《听见 听不见》173x148cm 2014年布面油画");
            break;

            case 'kanjiankanbujian':
            appendTitle("看见 看不见");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华_看见 看不见2014年173x148cm.png");
            appendDescription("《看见 看不见》173x148cm 2014年布面油画");
            break;

            case 'jie':
            appendTitle("姐");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华油画 姐45·65cm.png");
            appendDescription("《姐》45x65cm 布面油画");
            break;

            case 'bailong':
                appendTitle("白龙");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/oilpainting/白龙  王文华 80x60cm.png");
                appendDescription("《白龙》80x60cm 布面油画");
                break;

            case 'nianhua':
                appendTitle("年华");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/《年华》  80x60cm 2020年纸本素描 王文华.png");
                appendDescription("《年华》80x60cm 2020年纸本索描");
                appendNormalImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (1).png");
                appendDescription("《年华》索描肖像 步骤图一");
                appendNormalImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (1.1).png");
                appendDescription("《年华》索描肖像 步骤图一 局部");
                appendNormalImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (2).png");
                appendDescription("《年华》索描肖像 步骤图二");
                appendNormalImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (3).png");
                appendDescription("《年华》索描肖像 步骤图三");
                appendNormalImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (4).png");
                appendDescription("《年华》索描肖像 步骤图四");
                appendNormalImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/《年华》  80x60cm 2020年纸本素描 王文华.png");
                appendDescription("《年华》索描肖像 步骤图五");
                appendVid("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/《年华》 5分钟 加音乐.mp4")
                appendDescription("《年华》time-lapse");
                break;

            case 'ziyinvlang':
                appendTitle("紫衣女郎");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (9).png");
                appendDescription("《紫衣女郎》60x45cm 2020年纸本索描");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (1).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图一");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (2).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图二");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (3).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图三");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (4).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图四");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (5).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图五");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (6).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图六");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (7).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图七");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (8).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图八");
                appendNormalImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (9).png");
                appendDescription("《紫衣女郎》索描肖像 步骤图九");
                appendVid("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/《紫衣女郎》5分钟.mp4")
                appendDescription("《紫衣女郎》索描肖像 视频");
                break;

            case 'zhongguojiayouweinijiayou':
                appendTitle("中国加油 为你加油");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/《中国加油 为你加油》素描 王文华2020年102x78cm.png");
                appendDescription("《中国加油 为你加油》102x78cm 2020年纸本索描");
                appendNormalImg("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/IMG_20200206_173502.png");
                appendDescription("《中国加油 为你加油》索描肖像 步骤图一");
                appendNormalImg("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/《中国加油 为你加油》素描 王文华2020年102x78cm.png");
                appendDescription("《中国加油 为你加油》索描肖像 步骤图二");
                appendVid("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/中国加油 为你加油 加音乐加字幕.mp4")
                appendDescription("《中国加油 为你加油》索描肖像 视频");
            break;

            case 'guaibaobao':
                appendTitle("乖宝宝");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/Final 乖宝宝素描步骤图 (4).png");
                appendDescription("《乖宝宝》80x60cm 2019年纸本索描");
                appendNormalImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (1).png");
                appendDescription("《乖宝宝》索描肖像 步骤图一");
                appendNormalImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (2).png");
                appendDescription("《乖宝宝》索描肖像 步骤图二");
                appendNormalImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (3).png");
                appendDescription("《乖宝宝》索描肖像 步骤图三");
                appendNormalImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/Final 乖宝宝素描步骤图 (4).png");
                appendDescription("《乖宝宝》索描肖像 步骤图四");
                appendNormalImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (5).png");
                appendDescription("《乖宝宝》索描肖像 步骤图五");
                appendVid("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝 2K 加字幕.mp4")
                appendDescription("《乖宝宝》索描肖像 视频");
            break;

            case 'kaqiusha':
                appendTitle("喀秋莎");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (11).png");
                appendDescription("《喀秋莎》80x60cm 2020年纸本索描");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (1).png");
                appendDescription("《喀秋莎》索描肖像 步骤图一");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (2).png");
                appendDescription("《喀秋莎》索描肖像 步骤图二");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (3).png");
                appendDescription("《喀秋莎》索描肖像 步骤图三");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (4).png");
                appendDescription("《喀秋莎》索描肖像 步骤图四");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (5).png");
                appendDescription("《喀秋莎》索描肖像 步骤图五");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (6).png");
                appendDescription("《喀秋莎》索描肖像 步骤图六");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (7).png");
                appendDescription("《喀秋莎》索描肖像 步骤图七");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (8).png");
                appendDescription("《喀秋莎》索描肖像 步骤图八");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (9).png");
                appendDescription("《喀秋莎》索描肖像 步骤图九");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (10).png");
                appendDescription("《喀秋莎》索描肖像 步骤图十");
                appendNormalImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (11).png");
                appendDescription("《喀秋莎》索描肖像 步骤图十一");
                appendVid("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/喀秋莎 4分钟 加 音乐1.mp4")
                appendDescription("《喀秋莎》索描肖像 视频");
            break;

            case 'dahuzi':
                appendTitle("大胡子 Big Beard");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤（4）.png");
                appendDescription("《大胡子 Big Beard》60x45cm 2018年纸本索描");
                appendNormalImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤 (1).png");
                appendDescription("《大胡子 Big Beard》索描肖像 步骤图一");
                appendNormalImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤 (2).png");
                appendDescription("《大胡子 Big Beard》索描肖像 步骤图二");
                appendNormalImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤 (3).png");
                appendDescription("《大胡子 Big Beard》索描肖像 步骤图三");
                appendNormalImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤（4）.png");
                appendDescription("《大胡子 Big Beard》索描肖像 步骤图四");
                
                appendVid("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子男肖像素描步骤1080p.mp4")
                appendDescription("《大胡子 Big Beard》索描肖像 视频");
            break;

            case 'qinvzi':
                appendTitle("奇女子 Mysterious Girl");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (8).png");
                appendDescription("《奇女子 Mysterious Girl》80x60cm 2020年纸本索描");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (1).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图一");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (2).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图二");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (3).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图三");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (4).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图四");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (5).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图五");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (7).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图六");
                appendNormalImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (8).png");
                appendDescription("《奇女子 Mysterious Girl》索描肖像 步骤图七");
                appendVid("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子 5分钟 加音乐.mp4")
                appendDescription("《奇女子 Mysterious Girl》索描肖像 视频");
            break;

            case 'xiaokeai':
                appendTitle("小可爱");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/11.png");
                appendDescription("《小可爱》80x60cm 2020年纸本索描");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/1.png");
                appendDescription("《小可爱》索描肖像 步骤图一");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/2.png");
                appendDescription("《小可爱》索描肖像 步骤图二");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/3.png");
                appendDescription("《小可爱》索描肖像 步骤图三");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/4.png");
                appendDescription("《小可爱》索描肖像 步骤图四");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/5.png");
                appendDescription("《小可爱》索描肖像 步骤图五");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/6.png");
                appendDescription("《小可爱》索描肖像 步骤图六");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/7.png");
                appendDescription("《小可爱》索描肖像 步骤图七");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/8.png");
                appendDescription("《小可爱》索描肖像 步骤图八");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/9.png");
                appendDescription("《小可爱》索描肖像 步骤图九");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/10.png");
                appendDescription("《小可爱》索描肖像 步骤图十");
                appendNormalImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/11.png");
                appendDescription("《小可爱》索描肖像 步骤图十一");
                appendVid("images/sketch/小可爱80x60cm2020年纸本素描王文华/小可爱 4分钟 加 音乐.mp4")
                appendDescription("《小可爱》索描肖像 视频");
            break;

            case 'shuainvhai':
                appendTitle("帅女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (5).png");
                appendDescription("《帅女孩》60x45cm 2019年纸本索描");
                appendNormalImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (1).png");
                appendDescription("《帅女孩》索描肖像 步骤图一");
                appendNormalImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (2).png");
                appendDescription("《帅女孩》索描肖像 步骤图二");
                appendNormalImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (3).png");
                appendDescription("《帅女孩》索描肖像 步骤图三");
                appendNormalImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (4).png");
                appendDescription("《帅女孩》索描肖像 步骤图四");
                appendNormalImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (5).png");
                appendDescription("《帅女孩》索描肖像 步骤图五");
                appendVid("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/帅女孩  2k.mp4")
                appendDescription("《帅女孩》索描肖像 视频");
            break;

            case 'daimaozidexiaohai':
                appendTitle("戴帽子的小孩 Child Who Wears a Hat");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/Final 步骤三.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》80x60cm 2019年纸本索描");
                appendNormalImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤一.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》索描肖像 步骤图一");
                appendNormalImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤一 局部.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》步骤图一 局部");
                appendNormalImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤二.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》索描肖像 步骤图二");
                appendNormalImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤二 局部.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》步骤图二 局部");
                appendNormalImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/Final 步骤三.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》索描肖像 步骤图三");
                appendNormalImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤三 局部.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》步骤图三 局部");
                appendVid("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/19年 素描 戴帽子的女孩全5分加音乐.mp4")
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》索描肖像 视频");
            break;

            case 'wangzi':
                appendTitle("王子 Prince");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (4).png");
                appendDescription("《王子 Prince》60x45cm 2019年纸本索描");
                appendNormalImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (1).png");
                appendDescription("《王子 Prince》索描肖像 步骤图一");
                appendNormalImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (2).png");
                appendDescription("《王子 Prince》索描肖像 步骤图二");
                appendNormalImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (3).png");
                appendDescription("《王子 Prince》索描肖像 步骤图三");
                appendNormalImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (4).png");
                appendDescription("《王子 Prince》索描肖像 步骤图四");
                appendVid("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/王子素描肖像步骤高清4K.mp4")
                appendDescription("《王子 Prince》索描肖像 视频");
            break;

            case 'shigaoxianghema':
                appendTitle("石膏像荷马");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/石膏像荷马步骤图 (5).png");
                appendDescription("《石膏像荷马》80x60cm 2019年纸本索描");
                appendNormalImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step1.png");
                appendDescription("《石膏像荷马》索描肖像 步骤图一");
                appendNormalImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step2.png");
                appendDescription("《石膏像荷马》索描肖像 步骤图二");
                appendNormalImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step3.png");
                appendDescription("《石膏像荷马》索描肖像 步骤图三");
                appendNormalImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step4.png");
                appendDescription("《石膏像荷马》索描肖像 步骤图四");
                appendNormalImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/石膏像荷马步骤图 (5).png");
                appendDescription("《石膏像荷马》索描肖像 步骤图五");
                appendVid("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/荷马3分加音乐.mp4")
                appendDescription("《石膏像荷马》索描肖像 视频");
            break;

            case 'hongfanvhai':
                appendTitle("红发女孩 Ginger-haired Girl");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(5).png");
                appendDescription("《红发女孩 Ginger-haired Girl》60x45cm 2019年纸本索描");
                appendNormalImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(1).png");
                appendDescription("《红发女孩 Ginger-haired Girl》索描肖像 步骤图一");
                appendNormalImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(2).png");
                appendDescription("《红发女孩 Ginger-haired Girl》索描肖像 步骤图二");
                appendNormalImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(3).png");
                appendDescription("《红发女孩 Ginger-haired Girl》索描肖像 步骤图三");
                appendNormalImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(4).png");
                appendDescription("《红发女孩 Ginger-haired Girl》索描肖像 步骤图四");
                appendNormalImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(5).png");
                appendDescription("《红发女孩 Ginger-haired Girl》索描肖像 步骤图五");
                appendVid("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/单眼皮女孩 2k.mp4")
                appendDescription("《红发女孩 Ginger-haired Girl》索描肖像 视频");
            break;

            case 'hongfashuaige':
                appendTitle("红发帅哥 Auburn-haired Handsome Boy");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/红发帅哥60x45cm2019年纸本素描王文华/红发帅哥60x45cm2019年纸本素描王文华.png");
                appendDescription("《红发帅哥 Auburn-haired Handsome Boy》60x45cm 2019年纸本索描");
                appendVid("images/sketch/红发帅哥60x45cm2019年纸本素描王文华/红发帅哥素描步骤视频.mp4")
                appendDescription("《红发帅哥 Auburn-haired Handsome Boy》索描肖像 视频");
            break;

            case 'bangfadaidenvhai':
                appendTitle("绑发带的女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/绑发带的女孩80x60cm2019年纸本素描王文华/绑发带的小孩80x60cm2019年纸本素描王文华.png");
                appendDescription("《绑发带的女孩》80x60cm 2019年纸本索描");
                appendVid("images/sketch/绑发带的女孩80x60cm2019年纸本素描王文华/19年 素描 老照片女孩4分钟1.mp4")
                appendDescription("《绑发带的女孩》索描肖像 视频");
            break;

            case 'meilinvhai':
                appendTitle("美丽女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/Final 美丽女孩素描步骤  (5).png");
                appendDescription("《美丽女孩》60x45cm 2019年纸本索描");
                appendNormalImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (1).png");
                appendDescription("《美丽女孩》索描肖像 步骤图一");
                appendNormalImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (2).png");
                appendDescription("《美丽女孩》索描肖像 步骤图二")
                appendNormalImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (3).png");
                appendDescription("《美丽女孩》索描肖像 步骤图三");
                appendNormalImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (4).png");
                appendDescription("《美丽女孩》索描肖像 步骤图四");
                appendNormalImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/Final 美丽女孩素描步骤  (5).png");
                appendDescription("《美丽女孩》索描肖像 步骤图五");
                appendNormalImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (6).png");
                appendDescription("《美丽女孩》索描肖像 步骤图六");
                appendVid("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩加片头 2K.mp4")
                appendDescription("《美丽女孩》索描肖像 视频");
            break;

            case 'beitounan':
                appendTitle("背头男");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (8).png");
                appendDescription("《背头男》60x45cm 2018年纸本索描");
                appendNormalImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (1).png");
                appendDescription("《背头男》索描肖像 步骤图一");
                appendNormalImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (2).png");
                appendDescription("《背头男》索描肖像 步骤图二");
                appendNormalImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (3).png");
                appendDescription("《背头男》索描肖像 步骤图三");
                appendNormalImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (6).png");
                appendDescription("《背头男》索描肖像 步骤图四");
                appendNormalImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (7).png");
                appendDescription("《背头男》索描肖像 步骤图五");
                appendNormalImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (8).png");
                appendDescription("《背头男》索描肖像 步骤图六");
                appendVid("images/sketch/背头男60x45cm 2018年 纸本素描王文华/男肖像步骤录像.mp4")
                appendDescription("《背头男》索描肖像 视频");
            break;

            case 'lanyanjingshuaige':
                appendTitle("蓝眼睛帅哥");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (3).png");
                appendDescription("《蓝眼睛帅哥》60x45cm 2020年纸本索描");
                appendNormalImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (1).png");
                appendDescription("《蓝眼睛帅哥》索描肖像 步骤图一");
                appendNormalImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (2).png");
                appendDescription("《蓝眼睛帅哥》索描肖像 步骤图二");
                appendNormalImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (3).png");
                appendDescription("《蓝眼睛帅哥》索描肖像 步骤图三");
                appendVid("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 5分钟加音乐.mp4")
                appendDescription("《蓝眼睛帅哥》索描肖像 视频");
            break;

            case 'lanyinvhai':
                appendTitle("蓝衣女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (3).png");
                appendDescription("《蓝衣女孩》60x45cm 2019年纸本索描");
                appendNormalImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (1).png");
                appendDescription("《蓝衣女孩》索描肖像 步骤图一");
                appendNormalImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (2).png");
                appendDescription("《蓝衣女孩》索描肖像 步骤图二");
                appendNormalImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (3).png");
                appendDescription("《蓝衣女孩》索描肖像 步骤图三");
                appendVid("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩5分钟加音乐.mp4")
                appendDescription("《蓝衣女孩》索描肖像 视频");
            break;

            case 'hudiejienvhai':
                appendTitle("蝴蝶结女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (4).png");
                appendDescription("《蝴蝶结女孩》60x45cm 2020年纸本索描");
                appendNormalImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (1).png");
                appendDescription("《蝴蝶结女孩》索描肖像 步骤图一");
                appendNormalImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (2).png");
                appendDescription("《蝴蝶结女孩》索描肖像 步骤图二");
                appendNormalImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (3).png");
                appendDescription("《蝴蝶结女孩》索描肖像 步骤图三");
                appendNormalImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (4).png");
                appendDescription("《蝴蝶结女孩》索描肖像 步骤图四");
                appendVid("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩 5分钟 加音乐.mp4")
                appendDescription("《蝴蝶结女孩》索描肖像 视频");
            break;

            case 'jinsehuanian':
                appendTitle("锦瑟华年");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/Final 锦瑟华年 步骤图 (8).png");
                appendDescription("《锦瑟华年》80x60cm 2020年纸本索描");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (1).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图一");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (2).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图二");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (3).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图三");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (4).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图四");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (5).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图五");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (6).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图六");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (7).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图七");
                appendNormalImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/Final 锦瑟华年 步骤图 (8).png");
                appendDescription("《锦瑟华年》索描肖像 步骤图八");
                appendVid("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 6分钟.mp4")
                appendDescription("《锦瑟华年》索描肖像 视频");
            break;

            case 'heibeijingnanzi':
                appendTitle("黑背景男子");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (4).png");
                appendDescription("《黑背景男子》60x45cm 2019年纸本索描");
                appendNormalImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子(1).png");
                appendDescription("《黑背景男子》索描肖像 步骤图一");
                appendNormalImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (2).png");
                appendDescription("《黑背景男子》索描肖像 步骤图二");
                appendNormalImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (3).png");
                appendDescription("《黑背景男子》索描肖像 步骤图三");
                appendNormalImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (4).png");
                appendDescription("《黑背景男子》索描肖像 步骤图四");
                appendVid("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/黑背景男肖像素描步骤1080p加音乐.mp4")
                appendDescription("《黑背景男子》索描肖像 视频");
            break;

            case 'shoushangderen':
                appendTitle("受伤的人");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/受伤的人60x45cm 2019年纸本素描 王文华 .png");
                appendDescription("《受伤的人》60x45cm 2019年纸本索描");
            break;

            case 'yangdage':
                appendTitle("杨大哥");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/杨大哥60x45cm2017年纸本素描王文华.png");
                appendDescription("《杨大哥》60x45cm 2017年纸本索描");
            break;

            case 'liuxuesheng':
                appendTitle("留学生");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/留学生60x45cm2017年纸本素描王文华.png");
                appendDescription("《留学生》60x45cm 2017年纸本索描");
            break;

            case 'liuxueshengfeiji':
                appendTitle("留学生非籍");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/留学生非籍60x45cm2017年纸本素描王文华.png");
                appendDescription("《留学生非籍》60x45cm 2017年纸本索描");
            break;

            case 'hongfaxiaonvhai':
                appendTitle("红发小女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/红发小女孩80x4560cm2019年纸本素描王文华.png");
                appendDescription("《红发小女孩》80x4560cm 2019年纸本索描");
            break;

            case 'wudaonvhai':
                appendTitle("舞蹈女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/舞蹈女孩80x60cm 2020年 纸本素描王文华 .png");
                appendDescription("《舞蹈女孩》80x60cm 2020年纸本索描");
            break;
    
        default:
            appendTitle("Sorry invalid selection");
            break;
    }
}

function createLineBreak(){
    var linebreakyay = document.createElement("br");     
    var linebreakyay1 = document.createElement("br");       
    var linebreakyay2 = document.createElement("br");         
    $(".infoContent").append(linebreakyay);
    $(".infoContent").append(linebreakyay1);
    $(".infoContent").append(linebreakyay2);
}

function showLoading(){
    var loadingIcon = document.createElement("div");       
    loadingIcon.setAttribute("id","loader");
    $(".infoContent").append(loadingIcon);
}

function appendNormalImg(imgName){
    var image = document.createElement("img");                  //create img element
    image.src = imgName;
    image.alt = "image";
    image.setAttribute("class", "normalImage");            

    $(".infoContent").append(image);                 
}

function appendImg(imgName){
    var newZoomClass = document.createElement("div");        
    newZoomClass.setAttribute("id", "zoomID");           

    $(".infoContent").append(newZoomClass);

    var image = document.createElement("img");                 
    image.src = imgName;
    image.alt = "image";
    image.setAttribute("id", "imgID");            

    $("#zoomID").append(image);                   //appendchild image to specific zoom ID

    $(document).ready(function(){                                //jquery plugin zoom function for zooming in on picture
        $("#zoomID").zoom({on:'click', magnify:1,url:false, touch:true});
    });

    $("#imgID").ready(function(){                                    
        $("#loader").remove();
    });

    $("#zoomID").hover(function(){   
        $("#zoomID").css('cursor',"zoom-in");                             
});
}

function appendHeading(headingText){
    var headingName = document.createElement("H2");
    var headingTextNode = document.createTextNode(headingText);
    headingName.appendChild(headingTextNode);
    $(".infoContent").append(headingName);
}

function appendZoom(){
    var zoomInstruct = document.createElement("p");
    var descriptionTextNode = document.createTextNode("点击画面可放大");
    zoomInstruct.appendChild(descriptionTextNode);
    zoomInstruct.setAttribute("id", "zoomInstruct");
    $(".infoContent").append(zoomInstruct);
}

function appendDescription(descriptionText){
    var descriptionName = document.createElement("p");
    var descriptionTextNode = document.createTextNode(descriptionText);
    descriptionName.appendChild(descriptionTextNode);
    $(".infoContent").append(descriptionName);
}

function appendTitle(titleText){
    var titleName = document.createElement("H2");
    var titleTextNode = document.createTextNode(titleText);
    titleName.appendChild(titleTextNode);
    $(".headingContainer").append(titleName);
}

function appendVid(vidName){
    var paintingVid = document.createElement("video");
    paintingVid.src = vidName;
    paintingVid.alt = "video";
    paintingVid.setAttribute("id", "paintingVid");
    paintingVid.controls = true;

    $(".infoContent").append(paintingVid);                             
}

function displayMobileNav(){
    var x = document.getElementById("mobileNavSections");

    if (x.style.display == "block") {
        $("#mobileNavSections").slideToggle();
    } else {
        $("#mobileNavSections").slideToggle();
    }
}

$("#toutiaoicon").click(function(){
    var x = document.getElementById("toutiaoScan");

    if (x.style.display == "inline-block") {
        x.style.display ="none";
    } else {
        x.style.display ="inline-block";
    }
})

$("#wechaticon").click(function(){
    var x = document.getElementById("wechatnewsletter");
    var y = document.getElementById("wechatcontact");

    if (x.style.display == "inline-block") {
        x.style.display ="none";
        y.style.display ="none";
    } else {
        x.style.display ="inline-block";
        y.style.display ="inline-block";
    }
})

function setInfocontentMargin(){
    var iconHeight = $(".iconContainer").height();
    var headingHeight = $(".headingContainer").height();
    $(".infoContent").css('margin-top',headingHeight+iconHeight);
}