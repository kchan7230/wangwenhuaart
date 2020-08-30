var zoomNum;            //incrementing number for different zoom class IDs
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
    zoomNum=0;
    switch (paintingName) {
        case 'ankang':
            appendTitle("安康 Felicity");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《安康》《Felicity》50x40cm2019年王文华.png");
            appendDescription("《安康 Felicity》50x40cm 2019 oil on canvas");
            break;

        case 'huakaifugui':
            appendTitle("花开富贵 Flowers in Full Bloom");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《花开富贵》《Flowers in Full Bloom》王文华 40x30cm 布面油画2016年.png");
            appendDescription("《花开富贵 Flowers in Full Bloom》40x30cm 2016 oil on canvas");
            break;

        case 'jinpingyulu':
            appendTitle("金瓶玉露 Golden Vase and Jade Dew");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《金瓶玉露》《Golden Vase and Jade Dew》50x40cm2019年王文华.png");
            appendDescription("《金瓶玉露 Golden Vase and Jade Dew》50x40cm 2019 oil on canvas");
            break;

        case 'yifang':
            appendTitle("一方 One Square");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/一方《One Square》50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《一方 One Square》50x50cm 2018 oil on canvas oil on canvas");
            break;
        
        case 'shufangyizishang':
            appendTitle("书房椅子上花瓶自有诗情画意 The vase on the chair in the study has its own poetic splendor");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/书房椅子上花瓶自有诗情画意 The vase on the chair in the study has its own poetic splendor 60x60cm  布面油画 2018年 王文华.png");
            appendDescription("《书房椅子上花瓶自有诗情画意 The vase on the chair in the study has its own poetic splendor》60x60cm 2018 oil on canvas");
            break;

        case 'shishiruyi':
            appendTitle("事事如意 Wishes Fulfilled");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/事事如意 Wishes Fulfilled 50x50cm2019年 王文华.png");
            appendDescription("《事事如意 Wishes Fulfilled》50x50cm 2019 oil on canvas");
            break;

        case 'guose':
            appendTitle("国色 National Beauty");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/国色 National Beauty 55x41cm  布面油画 2018年 王文华.png");
            appendDescription("《国色 National Beauty》55x41cm 2018 oil on canvas");
            break;

        case 'xiayong':
            appendTitle("夏涌 Summer Gush");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/夏涌 Summer Gush 55x41cm  布面油画 2018年 王文华.png");
            appendDescription("《夏涌 Summer Gush》55x41cm 2018 oil on canvas");
            break;

        case 'xiayun':
            appendTitle("夏韵 Summer Tones");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/夏韵 Summer Tones 王文华 45x65cm 布面油画2015年.png");
            appendDescription("《夏韵 Summer Tones》45x65cm 2015 oil on canvas");
            break;

        case 'guomin':
            appendTitle("敦敏 Sincerity");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/敦敏 Sincerity 50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《敦敏 Sincerity》50x50cm 2018 oil on canvas");
            break;

        case 'nuanxin':
            appendTitle("暖心 Heartwarming");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/暖心 Heartwarming 76x50cm 2019年王文华.png");
            appendDescription("《暖心 Heartwarming》76x50cm 2019 oil on canvas");
            break;

        case 'pingan':
            appendTitle("平安");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/平安 70x40cm2019年王文华.png");
            appendDescription("《平安》70x40cm 2019 oil on canvas");
            break;

        case 'zhizihuakai':
            appendTitle("栀子花开 Gardenia in blossom");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/栀子花开 Gardenia in blossom 51x41cm  布面油画 2018年 王文华.png");
            appendDescription("《栀子花开 Gardenia in blossom》51x41cm 2018 oil on canvas");
            break;

        case 'qihe':
            appendTitle("气和 Serenity");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/气和 Serenity 51x41cm 2019年王文华.png");
            appendDescription("《气和 Serenity》51x41cm 2019 oil on canvas");
            break;

        case 'shengse':
            appendTitle("盛色 Flourishing Colors");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/盛色. Flourishing Colors 50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《盛色 Flourishing Colors》50x50cm 2018 oil on canvas");
            break;

        case 'qihe':
            appendTitle("气和 Serenity");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/气和 Serenity 51x41cm 2019年王文华.png");
            appendDescription("《气和 Serenity》51x41cm 2019 oil on canvas");
            break;

        case 'qiuyun':
            appendTitle("秋韵 Autumn Tones");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/秋韵 Autumn Tones 50x50cm  布面油画 2018年 王文华.png");
            appendDescription("《秋韵 Autumn Tones》50x50cm 2018 oil on canvas");
            break;

        case 'mijing':
            appendTitle("秘境 Enchanted Place");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/秘境 Enchanted Place 76x50cm 2019年 王文华.png");
            appendDescription("《秘境 Enchanted Place》76x50cm 2019 oil on canvas");
            break;

        case 'fensedaotian':
            appendTitle("粉色稻田");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/粉色稻田2015年 45x65cm.png");
            appendDescription("《粉色稻田》45x65cm 2015 oil on canvas");
            break;

        case 'honghonghuohuo':
            appendTitle("红红火火");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/红红火火50x50cm2019年王文华.png");
            appendDescription("《红红火火》50x50cm 2019 oil on canvas");
            break;

            case 'anna':
            appendTitle("安娜 Anna");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《安娜》王文华 布面油画  65x45cm.png");
            appendDescription("《安娜 Anna》65x45cm oil on canvas");
            break;

            case 'shuaigexiaoxiang':
            appendTitle("帅哥肖像 Handsome Boy Portrait");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华 作品 肖像 65x45cm 布面油画 2017年.png");
            appendDescription("《帅哥肖像 Handsome Boy Portrait》65x45cm 2017 oil on canvas");
            break;

            case 'nanxiaoxiang':
            appendTitle("男肖像 Portrait of a Man");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《男肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《男肖像 Portrait of a Man》65x45cm oil on canvas");
            break;

            case 'hongsexiaoxiang':
            appendTitle("红色肖像 Red Portrait");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《红色肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《红色肖像 Red Portrait》65x45cm oil on canvas");
            break;

            case 'meinianda':
            appendTitle("美年达 Mirinda");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《美年达》王文华 布面油画80x60cm.png");
            appendDescription("《美年达 Mirinda》80x60cm oil on canvas");
            break;

            case 'laozhe':
            appendTitle("老者 Senior");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《老者》王文华65x45cm2017年.png");
            appendDescription("《老者 Senior》65x45cm 2017 oil on canvas");
            break;

            case 'xiaoxiang1':
            appendTitle("肖像 Portrait");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《肖像 Portrait》65x45cm oil on canvas");
            break;

            case 'miaozulaozhexiaoxiang':
            appendTitle("苗族老者肖像 Portrait of Hmong Senior");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《苗族老者肖像》王文华 布面油画  65x45cm.png");
            appendDescription("《苗族老者肖像 Portrait of Hmong Senior》65x45cm oil on canvas");
            break;

            case 'ruoyi':
            appendTitle("若依");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《若依》 王文华 80x60cm 布面油画 2015年.png");
            appendDescription("《若依》80x60cm 2015 oil on canvas");
            break;

            case 'ruoqi':
            appendTitle("若齐");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《若齐》 王文华 80x60cm 布面油画 2015年.png");
            appendDescription("《若齐》80x60cm 2015 oil on canvas");
            break;

            case 'landiao':
            appendTitle("蓝调 Blues");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/《蓝调》王文华 布面油画 65x45cm 2017年.png");
            appendDescription("《蓝调 Blues》65x45cm 2017 oil on canvas");
            break;

            case 'laidaoguangzhou':
            appendTitle("来到广州 Arriving in Guangzhou");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/来到广州 王文华 60x50cm 布面油画 2013年.png");
            appendDescription("《来到广州 Arriving in Guangzhou》60x50cm 2013 oil on canvas");
            break;

            case 'niu':
            appendTitle("牛 Cow");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华 作品 牛2014年  60x80cm.png");
            appendDescription("《牛 Cow》60x80cm 2014 oil on canvas");
            break;

            case 'ma':
            appendTitle("马 Horse");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华 作品 马 2014年  60x80cm.png");
            appendDescription("《马 Horse》60x80cm 2014 oil on canvas");
            break;

            case 'tingjiantingbujian':
            appendTitle("听见 听不见 Audible Inaudible");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华_作品 听见 听不见2014年173x148cm.png");
            appendDescription("《听见 听不见 Audible Inaudible》173x148cm 2014 oil on canvas");
            break;

            case 'kanjiankanbujian':
            appendTitle("看见 看不见 Visible Invisible");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华_看见 看不见2014年173x148cm.png");
            appendDescription("《看见 看不见 Visible Invisible》173x148cm 2014 oil on canvas");
            break;

            case 'jie':
            appendTitle("姐 Sister");
            setInfocontentMargin();
            appendZoom();
            showLoading();
            appendImg("images/oilpainting/王文华油画 姐45·65cm.png");
            appendDescription("《姐 Sister》45x65cm");
            break;

            case 'bailong':
                appendTitle("白龙 White Dragon");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/oilpainting/白龙  王文华 80x60cm.png");
                appendDescription("《白龙 White Dragon》80x60cm");
                break;

            case 'nianhua':
                appendTitle("年华");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/《年华》  80x60cm 2020年纸本素描 王文华.png");
                appendDescription("《年华》80x60cm 2020 sketch");
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (1).png");
                appendDescription("《年华》sketch step 1");
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (1.1).png");
                appendDescription("《年华》 sketch step 2");
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (2).png");
                appendDescription("《年华》 sketch step 3");
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (3).png");
                appendDescription("《年华》 sketch step 4");
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/步骤图 (4).png");
                appendDescription("《年华》 sketch step 5");
                appendImg("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/《年华》  80x60cm 2020年纸本素描 王文华.png");
                appendDescription("《年华》 sketch step 6");
                appendVid("images/sketch/《年华》  80x60cm 2020年纸本素描 王文华/《年华》 5分钟 加音乐.mp4")
                appendDescription("《年华》 time-lapse");
                break;

            case 'ziyinvlang':
                appendTitle("紫衣女郎");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (9).png");
                appendDescription("《紫衣女郎》60x45cm 2020 sketch");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (1).png");
                appendDescription("《紫衣女郎》sketch step 1");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (2).png");
                appendDescription("《紫衣女郎》sketch step 2");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (3).png");
                appendDescription("《紫衣女郎》sketch step 3");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (4).png");
                appendDescription("《紫衣女郎》sketch step 4");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (5).png");
                appendDescription("《紫衣女郎》sketch step 5");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (6).png");
                appendDescription("《紫衣女郎》sketch step 6");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (7).png");
                appendDescription("《紫衣女郎》sketch step 7");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (8).png");
                appendDescription("《紫衣女郎》sketch step 8");
                appendImg("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/步骤图  (9).png");
                appendDescription("《紫衣女郎》sketch step 9");
                appendVid("images/sketch/《紫衣女郎》60x45cm2020年纸本素描 王文华/《紫衣女郎》5分钟.mp4")
                appendDescription("《紫衣女郎》sketch time-lapse");
                break;

            case 'zhongguojiayouweinijiayou':
                appendTitle("中国加油 为你加油");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/《中国加油 为你加油》素描 王文华2020年102x78cm.png");
                appendDescription("《中国加油 为你加油》102x78cm 2020 sketch");
                appendImg("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/IMG_20200206_173502.png");
                appendDescription("《中国加油 为你加油》sketch step 1");
                appendImg("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/《中国加油 为你加油》素描 王文华2020年102x78cm.png");
                appendDescription("《中国加油 为你加油》sketch step 2");
                appendVid("images/sketch/中国加油 为你加油60X45cm2020年 纸本素描王文华/中国加油 为你加油 加音乐加字幕.mp4")
                appendDescription("《中国加油 为你加油》sketch time-lapse");
            break;

            case 'guaibaobao':
                appendTitle("乖宝宝");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/Final 乖宝宝素描步骤图 (4).png");
                appendDescription("《乖宝宝》80x60cm 2019 sketch");
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (1).png");
                appendDescription("《乖宝宝》sketch step 1");
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (2).png");
                appendDescription("《乖宝宝》sketch step 2");
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (3).png");
                appendDescription("《乖宝宝》sketch step 3");
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/Final 乖宝宝素描步骤图 (4).png");
                appendDescription("《乖宝宝》sketch step 4");
                appendImg("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝素描步骤图 (5).png");
                appendDescription("《乖宝宝》sketch step 5");
                appendVid("images/sketch/乖宝宝80x60cm 2019年纸本素描 王文华/乖宝宝 2K 加字幕.mp4")
                appendDescription("《乖宝宝》sketch time-lapse");
            break;

            case 'kaqiusha':
                appendTitle("喀秋莎");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (11).png");
                appendDescription("《喀秋莎》80x60cm 2020 sketch");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (1).png");
                appendDescription("《喀秋莎》sketch step 1");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (2).png");
                appendDescription("《喀秋莎》sketch step 2");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (3).png");
                appendDescription("《喀秋莎》sketch step 3");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (4).png");
                appendDescription("《喀秋莎》sketch step 4");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (5).png");
                appendDescription("《喀秋莎》sketch step 5");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (6).png");
                appendDescription("《喀秋莎》sketch step 6");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (7).png");
                appendDescription("《喀秋莎》sketch step 7");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (8).png");
                appendDescription("《喀秋莎》sketch step 8");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (9).png");
                appendDescription("《喀秋莎》sketch step 9");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (10).png");
                appendDescription("《喀秋莎》sketch step 10");
                appendImg("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/  (11).png");
                appendDescription("《喀秋莎》sketch step 11");
                appendVid("images/sketch/喀秋莎80x60cm2020年纸本素描王文华/喀秋莎 4分钟 加 音乐1.mp4")
                appendDescription("《喀秋莎》sketch time-lapse");
            break;

            case 'dahuzi':
                appendTitle("大胡子 Big Beard");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤（4）.png");
                appendDescription("《大胡子 Big Beard》60x45cm 2018 sketch");
                appendImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤 (1).png");
                appendDescription("《大胡子 Big Beard》sketch step 1");
                appendImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤 (2).png");
                appendDescription("《大胡子 Big Beard》sketch step 2");
                appendImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤 (3).png");
                appendDescription("《大胡子 Big Beard》sketch step 3");
                appendImg("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子素描步骤（4）.png");
                appendDescription("《大胡子 Big Beard》sketch step 4");
                
                appendVid("images/sketch/大胡子60x45cm 2018年 纸本素描王文华/大胡子男肖像素描步骤1080p.mp4")
                appendDescription("《大胡子 Big Beard》sketch time-lapse");
            break;

            case 'qinvzi':
                appendTitle("奇女子 Mysterious Girl");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (8).png");
                appendDescription("《奇女子 Mysterious Girl》80x60cm 2020 sketch");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (1).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 1");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (2).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 2");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (3).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 3");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (4).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 4");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (5).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 5");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (7).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 6");
                appendImg("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子步骤  (8).png");
                appendDescription("《奇女子 Mysterious Girl》sketch step 7");
                appendVid("images/sketch/奇女子80x60cm2020年 纸本素描 王文华/奇女子 5分钟 加音乐.mp4")
                appendDescription("《奇女子 Mysterious Girl》sketch time-lapse");
            break;

            case 'xiaokeai':
                appendTitle("小可爱");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/11.png");
                appendDescription("《小可爱》80x60cm 2020 sketch");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/1.png");
                appendDescription("《小可爱》sketch step 1");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/2.png");
                appendDescription("《小可爱》sketch step 2");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/3.png");
                appendDescription("《小可爱》sketch step 3");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/4.png");
                appendDescription("《小可爱》sketch step 4");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/5.png");
                appendDescription("《小可爱》sketch step 5");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/6.png");
                appendDescription("《小可爱》sketch step 6");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/7.png");
                appendDescription("《小可爱》sketch step 7");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/8.png");
                appendDescription("《小可爱》sketch step 8");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/9.png");
                appendDescription("《小可爱》sketch step 9");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/10.png");
                appendDescription("《小可爱》sketch step 10");
                appendImg("images/sketch/小可爱80x60cm2020年纸本素描王文华/11.png");
                appendDescription("《小可爱》sketch step 11");

                appendVid("images/sketch/小可爱80x60cm2020年纸本素描王文华/小可爱 4分钟 加 音乐.mp4")
                appendDescription("《小可爱》sketch time-lapse");
            break;

            case 'shuainvhai':
                appendTitle("帅女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (5).png");
                appendDescription("《帅女孩》60x45cm 2019 sketch");
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (1).png");
                appendDescription("《帅女孩》sketch step 1");
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (2).png");
                appendDescription("《帅女孩》sketch step 2");
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (3).png");
                appendDescription("《帅女孩》sketch step 3");
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (4).png");
                appendDescription("《帅女孩》sketch step 4");
                appendImg("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/19年帅哥女素描肖像步骤 (5).png");
                appendDescription("《帅女孩》sketch step 5");

                appendVid("images/sketch/帅女孩 60x45cm 2019年纸本素描 王文华/帅女孩  2k.mp4")
                appendDescription("《帅女孩》sketch time-lapse");
            break;

            case 'daimaozidexiaohai':
                appendTitle("戴帽子的小孩 Child Who Wears a Hat");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/Final 步骤三.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》80x60cm 2019 sketch");
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤一.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch step 1");
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤一 局部.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch step 1 detailed view");
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤二.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch step 2");
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤二 局部.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch step 2 detailed view");
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/Final 步骤三.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch step 3");
                appendImg("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/步骤三 局部.png");
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch step 3 detailed view");

                appendVid("images/sketch/戴帽子的小孩80x60cm2019年纸本素描王文华/19年 素描 戴帽子的女孩全5分加音乐.mp4")
                appendDescription("《戴帽子的小孩 Child Who Wears a Hat》sketch time-lapse");
            break;

            case 'wangzi':
                appendTitle("王子 Prince");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (4).png");
                appendDescription("《王子 Prince》60x45cm 2019 sketch");
                appendImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (1).png");
                appendDescription("《王子 Prince》sketch step 1");
                appendImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (2).png");
                appendDescription("《王子 Prince》sketch step 2");
                appendImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (3).png");
                appendDescription("《王子 Prince》sketch step 3");
                appendImg("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/公子素描肖像步骤 (4).png");
                appendDescription("《王子 Prince》sketch step 4");
                appendVid("images/sketch/王子 60x45cm 2019年 纸本素描 王文华/王子素描肖像步骤1080p1.mp4")
                appendDescription("《王子 Prince》sketch time-lapse");
            break;

            case 'shigaoxianghema':
                appendTitle("石膏像荷马");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/石膏像荷马步骤图 (5).png");
                appendDescription("《石膏像荷马》80x60cm 2019 sketch");
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step1.png");
                appendDescription("《石膏像荷马》sketch step 1");
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step2.png");
                appendDescription("《石膏像荷马》sketch step 2");
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step3.png");
                appendDescription("《石膏像荷马》sketch step 3");
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/step4.png");
                appendDescription("《石膏像荷马》sketch step 4");
                appendImg("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/石膏像荷马步骤图 (5).png");
                appendDescription("《石膏像荷马》sketch step 5");
                appendVid("images/sketch/石膏像荷马80x60cm2019年纸本素描王文华/荷马3分加音乐.mp4")
                appendDescription("《石膏像荷马》sketch time-lapse");
            break;

            case 'hongfanvhai':
                appendTitle("红发女孩 Ginger-haired Girl");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(5).png");
                appendDescription("《红发女孩 Ginger-haired Girl》60x45cm 2019 sketch");
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(1).png");
                appendDescription("《红发女孩 Ginger-haired Girl》sketch step 1");
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(2).png");
                appendDescription("《红发女孩 Ginger-haired Girl》sketch step 2");
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(3).png");
                appendDescription("《红发女孩 Ginger-haired Girl》sketch step 3");
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(4).png");
                appendDescription("《红发女孩 Ginger-haired Girl》sketch step 4");
                appendImg("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/(5).png");
                appendDescription("《红发女孩 Ginger-haired Girl》sketch step 5");
                appendVid("images/sketch/红发女孩 60x45cm  纸本素描2019年 王文华/单眼皮女孩 2k.mp4")
                appendDescription("《红发女孩 Ginger-haired Girl》sketch time-lapse");
            break;

            case 'hongfashuaige':
                appendTitle("红发帅哥 Auburn-haired Handsome Boy");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/红发帅哥60x45cm2019年纸本素描王文华/红发帅哥60x45cm2019年纸本素描王文华.png");
                appendDescription("《红发帅哥 Auburn-haired Handsome Boy》60x45cm 2019 sketch");

                appendVid("images/sketch/红发帅哥60x45cm2019年纸本素描王文华/红发帅哥素描步骤视频.mp4")
                appendDescription("《红发帅哥 Auburn-haired Handsome Boy》sketch time-lapse");
            break;

            case 'bangfadaidenvhai':
                appendTitle("绑发带的女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/绑发带的女孩80x60cm2019年纸本素描王文华/绑发带的小孩80x60cm2019年纸本素描王文华.png");
                appendDescription("《绑发带的女孩》80x60cm 2019 sketch");
                appendVid("images/sketch/绑发带的女孩80x60cm2019年纸本素描王文华/19年 素描 老照片女孩4分钟1.mp4")
                appendDescription("《绑发带的女孩》sketch time-lapse");
            break;

            case 'meilinvhai':
                appendTitle("美丽女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/Final 美丽女孩素描步骤  (5).png");
                appendDescription("《美丽女孩》60x45cm 2019 sketch");
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (1).png");
                appendDescription("《美丽女孩》sketch step 1");
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (2).png");
                appendDescription("《美丽女孩》sketch step 2")
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (3).png");
                appendDescription("《美丽女孩》sketch step 3");
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (4).png");
                appendDescription("《美丽女孩》sketch step 4");
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/Final 美丽女孩素描步骤  (5).png");
                appendDescription("《美丽女孩》sketch step 5");
                appendImg("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩素描步骤  (6).png");
                appendDescription("《美丽女孩》sketch step 6");
                appendVid("images/sketch/美丽女孩60x45cm 2019年 纸本素描王文华/美丽女孩加片头 2K.mp4")
                appendDescription("《美丽女孩》sketch time-lapse");
            break;

            case 'beitounan':
                appendTitle("背头男");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (8).png");
                appendDescription("《背头男》60x45cm 2018 sketch");
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (1).png");
                appendDescription("《背头男》sketch step 1");
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (2).png");
                appendDescription("《背头男》sketch step 2");
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (3).png");
                appendDescription("《背头男》sketch step 3");
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (6).png");
                appendDescription("《背头男》sketch step 4");
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (7).png");
                appendDescription("《背头男》sketch step 5");
                appendImg("images/sketch/背头男60x45cm 2018年 纸本素描王文华/背头男素描步骤 (8).png");
                appendDescription("《背头男》sketch step 6");
                appendVid("images/sketch/背头男60x45cm 2018年 纸本素描王文华/男肖像步骤录像.mp4")
                appendDescription("《背头男》sketch time-lapse");
            break;

            case 'lanyanjingshuaige':
                appendTitle("蓝眼睛帅哥");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (3).png");
                appendDescription("《蓝眼睛帅哥》60x45cm 2020 sketch");
                appendImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (1).png");
                appendDescription("《蓝眼睛帅哥》sketch step 1");
                appendImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (2).png");
                appendDescription("《蓝眼睛帅哥》sketch step 2");
                appendImg("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 素描 步骤图 (3).png");
                appendDescription("《蓝眼睛帅哥》sketch step 3");
                appendVid("images/sketch/蓝眼睛帅哥 60x45cm2020年纸本素描王文华)/蓝眼睛帅哥 5分钟加音乐.mp4")
                appendDescription("《蓝眼睛帅哥》sketch time-lapse");
            break;

            case 'lanyinvhai':
                appendTitle("蓝衣女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (3).png");
                appendDescription("《蓝衣女孩》60x45cm 2019 sketch");
                appendImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (1).png");
                appendDescription("《蓝衣女孩》sketch step 1");
                appendImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (2).png");
                appendDescription("《蓝衣女孩》sketch step 2");
                appendImg("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩 (3).png");
                appendDescription("《蓝衣女孩》sketch step 3");
                appendVid("images/sketch/蓝衣女孩60x45cm 2019年 纸本素描王文华/19年 素描 蓝衣女孩5分钟加音乐.mp4")
                appendDescription("《蓝衣女孩》sketch time-lapse");
            break;

            case 'hudiejienvhai':
                appendTitle("蝴蝶结女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (4).png");
                appendDescription("《蝴蝶结女孩》60x45cm 2020 sketch");
                appendImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (1).png");
                appendDescription("《蝴蝶结女孩》sketch step 1");
                appendImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (2).png");
                appendDescription("《蝴蝶结女孩》sketch step 2");
                appendImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (3).png");
                appendDescription("《蝴蝶结女孩》sketch step 3");
                appendImg("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩步骤图 (4).png");
                appendDescription("《蝴蝶结女孩》sketch step 4");
                appendVid("images/sketch/蝴蝶结女孩60x45cm2020年纸本素描王文华/蝴蝶结女孩 5分钟 加音乐.mp4")
                appendDescription("《蝴蝶结女孩》sketch time-lapse");
            break;

            case 'jinsehuanian':
                appendTitle("锦瑟华年");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/Final 锦瑟华年 步骤图 (8).png");
                appendDescription("《锦瑟华年》80x60cm 2020 sketch");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (1).png");
                appendDescription("《锦瑟华年》sketch step 1");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (2).png");
                appendDescription("《锦瑟华年》sketch step 2");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (3).png");
                appendDescription("《锦瑟华年》sketch step 3");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (4).png");
                appendDescription("《锦瑟华年》sketch step 4");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (5).png");
                appendDescription("《锦瑟华年》sketch step 5");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (6).png");
                appendDescription("《锦瑟华年》sketch step 6");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 步骤图 (7).png");
                appendDescription("《锦瑟华年》sketch step 7");
                appendImg("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/Final 锦瑟华年 步骤图 (8).png");
                appendDescription("《锦瑟华年》sketch step 8");
                appendVid("images/sketch/锦瑟华年80x60cm2020年纸本素描王文华/锦瑟华年 6分钟.mp4")
                appendDescription("《锦瑟华年》sketch time-lapse");
            break;

            case 'heibeijingnanzi':
                appendTitle("黑背景男子");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (4).png");
                appendDescription("《黑背景男子》60x45cm 2019 sketch");
                appendImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子(1).png");
                appendDescription("《黑背景男子》sketch step 1");
                appendImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (2).png");
                appendDescription("《黑背景男子》sketch step 2");
                appendImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (3).png");
                appendDescription("《黑背景男子》sketch step 3");
                appendImg("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/19年黑背景男子 (4).png");
                appendDescription("《黑背景男子》sketch step 4");
                appendVid("images/sketch/黑背景男子60x45cm 2019年纸本素描 王文华/黑背景男肖像素描步骤1080p加音乐.mp4")
                appendDescription("《黑背景男子》sketch time-lapse");
            break;

            case 'shoushangderen':
                appendTitle("受伤的人");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/受伤的人60x45cm 2019年纸本素描 王文华 .png");
                appendDescription("《受伤的人》60x45cm 2019 sketch");
            break;

            case 'yangdage':
                appendTitle("杨大哥");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/杨大哥60x45cm2017年纸本素描王文华.png");
                appendDescription("《杨大哥》60x45cm 2017 sketch");
            break;

            case 'liuxuesheng':
                appendTitle("留学生");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/留学生60x45cm2017年纸本素描王文华.png");
                appendDescription("《留学生》60x45cm 2017 sketch");
            break;

            case 'liuxueshengfeiji':
                appendTitle("留学生非籍");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/留学生非籍60x45cm2017年纸本素描王文华.png");
                appendDescription("《留学生非籍》60x45cm 2017 sketch");
            break;

            case 'hongfaxiaonvhai':
                appendTitle("红发小女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/红发小女孩80x4560cm2019年纸本素描王文华.png");
                appendDescription("《红发小女孩》80x4560cm 2019 sketch");
            break;

            case 'wudaonvhai':
                appendTitle("舞蹈女孩");
                setInfocontentMargin();
                appendZoom();
                showLoading();
                appendImg("images/sketch/舞蹈女孩80x60cm 2020年 纸本素描王文华 .png");
                appendDescription("《舞蹈女孩》80x60cm 2020 sketch");
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
    image.setAttribute("class", "normalImage");            //new ID for image to get width below

    $(".infoContent").append(image);                   //appendchild to specific zoom ID
}

function appendImg(imgName){
    zoomNum+=1;
    var zoomNumString = zoomNum.toString();          //create id name for new zoom class
    var zoomID = "zoomId" + zoomNumString;

    var newZoomClass = document.createElement("div");         //create new zoom class for each image
    newZoomClass.setAttribute("id", zoomID);            //new ID for zoom container (since I may use this function multiple times to add multiple images)

    $(".infoContent").append(newZoomClass);

    var image = document.createElement("img");                  //create img element
    image.src = imgName;
    image.alt = "image";
    var imgID = "imgID" + zoomNumString;
    image.setAttribute("id", imgID);            //new ID for image to get width below (again, because I want multiple images)

    zoomID = "#"+zoomID;
    imgID = "#"+imgID;

    $(zoomID).append(image);                   //appendchild image to specific zoom ID

    $(imgID).css('height',"65vh");
    $(imgID).css('object-fit',"contain");
    $(imgID).css('display',"block");
    $(imgID).css('width',"auto");
    $(imgID).css('margin-left',"auto");
    $(imgID).css('margin-right',"auto");
    $(zoomID).css('height',"65vh");
    var imgWidth = $(imgID).css('width');
    $(zoomID).css('width',imgWidth);

    $(zoomID).css('position',"relative");
    $(zoomID).css('overflow',"hidden");
    $(zoomID).css('display',"block");
    $(zoomID).css('margin-left',"auto");
    $(zoomID).css('margin-right',"auto");

    $(document).ready(function(){                                //jquery plugin zoom function for zooming in on picture
        $(zoomID).zoom({on:'click', magnify:1,url:false, touch:true});
    });

    $(imgID).ready(function(){                                    
        $("#loader").remove();
    });

    $(zoomID).hover(function(){   
        $(zoomID).css('cursor',"zoom-in");                             
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
    var descriptionTextNode = document.createTextNode("Click painting to zoom in");
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
