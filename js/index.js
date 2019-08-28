
/*
新闻洞察动态
 */
var showNewsList = function (index) {
    var  list = document.getElementsByClassName('news');
    var btns = document.getElementsByClassName('news-bottom-li-margin');
    for(var i =0 ;i < list.length ; i++){
        if(i != index){
            list[i].classList.remove("news-show");
            btns[i].classList.remove('show');
        }
        else{
            btns[i].classList.add('show');
            list[i].classList.add("news-show");
        }

    }
}
/*
logo动态
 */
var showLogoList = function (index) {
    var  list = document.getElementsByClassName('partner-groups');
    var btns = document.getElementsByClassName('partner-bottom-li-margin');
    for(var i =0 ;i < list.length ; i++){
        if(i != index){
            list[i].classList.remove("news-show");
            btns[i].classList.remove('show');
        }
        else{
            btns[i].classList.add('show');
            list[i].classList.add("news-show");
        }

    }
}
/*
Case动态
 */
var showCaseList = function (index) {
    var  list = document.getElementsByClassName('case-groups');
    var btns = document.getElementsByClassName('case-bottom-li-margin');
    for(var i =0 ;i < list.length ; i++){
        if(i != index){
            list[i].classList.remove("news-show");
            btns[i].classList.remove('show');
        }
        else{
            btns[i].classList.add('show');
            list[i].classList.add("news-show");
        }

    }
}

/**
 * 模态窗
 */
var showModel=function (index, videoCode) {
    //修改窗口大小
    document.body.classList.add("show-window");
    var model = document.getElementsByClassName("model")[index];
    if(videoCode && videoRul[videoCode].type == 1){
        document.querySelector("." + videoCode).src = videoRul[videoCode].url;
    }
    model.classList.add("model-show");
}

var closeModel=function (index, videoCode) {
    //修改窗口大小
    document.body.classList.remove("show-window");
    var model = document.getElementsByClassName("model")[index];
    model.classList.remove("model-show");
    if(videoCode && videoRul[videoCode].type == 1){
        document.querySelector("." + videoCode).src = null;
    }
}

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    observer:true,
    observeParents:true,
    slidesPerView : 5,
    slidesPerGroup : 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
var bannerSwiper = new Swiper('.swiper-container-banner', {
    autoplay: true,
    loop: true, 
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
})

var videoRul= {
    VRView: {
        url: "https://jimi.ews.m.jaeapp.com/krpano2.html?xml=examples_house/videopano/videopano3.xml&_wvUseWKWebView=YES",
        type: 1,
        name: "VR全景购"
    },
    YQSodaWater: {
        url: "https://v.qq.com/iframe/player.html?vid=o0525f6bsvo&tiny=0&auto=0",
        type: 1,
        name: "怡泉苏打水"
    },
    KMDRadiator: {
        url: "https://v.qq.com/iframe/player.html?vid=m0544ts1jfk&tiny=0&auto=0",
        type: 1,
        name: "空美的电暖气"
    },
    HMXS: {
        url: "http://v.jimicn.com/detail.html?type=%E7%97%85%E6%AF%92%E8%A7%86%E9%A2%91&id=158",
        type: 1,
        name: "盒马鲜生"
    },
    BMW: {
        url: "",
        type: 2,
        name: "BMW"
    },
    Pampers: {
        url: "",
        type: 2,
        name: "Pampers"
    },
    MNTinmail: {
        url: "",
        type: 1,
        name: "蒙牛x天猫超市"
    },
    cocaCola: {
        url: "",
        type: 2,
        name: "可口可乐"
    },
    YLMilk: {
        url: "",
        type: 2,
        name: "伊利"
    }
}

