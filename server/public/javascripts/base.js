"use static"
//用户退出
function logout(){
    window.sessionStorage.clear();
    window.location.href = '/logout';
}
//展现右上角用户操作列表
var showuserlist = document.getElementById('showuserlist');
var liuser = document.getElementById('liuser');
var menuStatus=   window.sessionStorage.getItem("menuStatus");
liuser.onmouseover = function(){
    showuserlist.style.display = "block"  ;
}
liuser.onmouseout = function(){
    showuserlist.style.display = "none"  ;
}
//显示回到顶部按钮操作
var showBackToTop=document.getElementById('showBackToTop');
showBackToTop.style.display = "none";
window.onscroll = function(e){
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrolltop> 300){
        showBackToTop.style.display = "block"  ;
    }else{
        if(scrolltop< 228){
            showBackToTop.style.display = "none"  ;
        }
    }
}
function  scrollToTop(){
    var scrollDuration = 200;
    var scrollStep = -window.pageYOffset  / (scrollDuration / 20);
    var scrollInterval = setInterval(()=>{
        if(window.pageYOffset != 0){
            window.scrollBy(0, scrollStep);
        }
        else{
            clearInterval(scrollInterval);
        }
    },10);
    if(window.innerWidth <= 768){
        setTimeout(() => { window.scrollTo(0,0) });
    }
}
var resizeTimer = null;
changeSwiper();
window.onresize=function(){
    resizeTimer = resizeTimer ? null : setTimeout(changeSwiper,0);
}
window.onload=function(){
    if(menuStatus=='false'){
        document.getElementsByClassName('qloud-al-content')[0].style.width=window.innerWidth-200+'px';
    }else{
        document.getElementsByClassName('qloud-al-content')[0].style.width=window.innerWidth-54+'px'
    }
    tabStatus();
}
function tabStatus(){
    if(document.getElementById('tabcontnent')){
        function js(id)
        {
            return document.getElementById(id).getElementsByTagName("div");
        }
        var tabcontnent=js("tabcontnent");
        for(var i=0;i<tabcontnent.length;i++)
        {
            if((window.location.href).includes(tabcontnent[i].getElementsByTagName('a')[0].href)){
                tabcontnent[i].classList.add('tabSelect');
            }
            tabcontnent[i].onclick=function(){
                delBackgroundColor();
                this.classList.add('tabSelect');
            }
        }
        function delBackgroundColor()
        {
            for(var i=0;i<js("tabcontnent").length;i++)
            {
                tabcontnent[i].classList.remove('tabSelect')
            }
        }
    }else{
        // document.getElementsByTagName('aside')[0].style.top='66px'
    }
}

function changeSwiper(){
    if(document.getElementById('tabcontnent')){
        var windowWidth=document.documentElement.offsetWidth;
        if(windowWidth<450){
            swiper(1,1);
        }else if(windowWidth<900&&windowWidth>=450){
            swiper(3,3);
        }else{
            swiper(12,12);
        }
    }
}
var sw=null
function swiper(slidesPerView,slidesPerGroup){
    if(sw){
        sw.destroy()
    }
    sw = new Swiper('.swiper-container', {
        noSwiping : true,
        slidesPerView: slidesPerView,
        spaceBetween: 5,
        slidesPerGroup: slidesPerGroup,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
var socketSchem=window.location.protocol=='http:'?'ws':'wss';
var socket = io(socketSchem+"://"+window.location.host); //通过ip和端口建立一个socket client
socket.on('connect', function(){
    console.log('connect a socket client');
});
// beforebegin：在 element 元素的前面。

// afterbegin：在 element 元素的第一个子节点前面。

// beforeend：在 element 元素的最后一个子节点后面。

// afterend：在 element 元素的后面。
socket.on('buildPlugin',function(msg){
   window.location.reload()
})
socket.on('unbuildPlugin',function(msg){
    var ulDoc=document.getElementById('al-sidebar-list');
    var ulChilLs=ulDoc.children;

    for(var i=0;i<ulChilLs.length;i++){
        var ahref=decodeURIComponent(ulChilLs[i].getElementsByTagName('a')[0].id);
        if(ahref.includes(msg)){
            ulDoc.removeChild(ulDoc.children[i])
            if((decodeURIComponent(window.location.href)).includes(ahref)){
                window.location.href='/';
            }
        }
    }
})
socket.on('userlogout',function(msg){
    if(msg==window.sessionStorage.getItem('userName')){
        logout();
    }
})
//菜单收缩功能
function menuToggle(){
    var doc=document.getElementById('menuCollapsed');
    if(menuStatus=='false'){
        document.getElementsByClassName('qloud-al-content')[0].style.width=window.innerWidth-54+'px';
        if(document.getElementsByClassName('page-top-tab').length>0){
            document.getElementsByClassName('page-top-tab')[0].style['padding-left']='54px';
        }
        document.getElementsByClassName('qloud-al-main')[0].style['margin-left']='54px';
        document.getElementsByTagName('aside')[0].style.width='54px';
        doc.classList.remove('fa-chevron-circle-left');
        doc.classList.add('fa-chevron-circle-right');
        menuStatus='true';
        window.sessionStorage.setItem("menuStatus",menuStatus);
    }else{
        document.getElementsByClassName('qloud-al-content')[0].style.width=window.innerWidth-200+'px'
        if(document.getElementsByClassName('page-top-tab').length>0){
            document.getElementsByClassName('page-top-tab')[0].style['padding-left']='200px';
        }
        document.getElementsByClassName('qloud-al-main')[0].style['margin-left']='200px';
        document.getElementsByTagName('aside')[0].style.width='200px';
        doc.classList.add('fa-chevron-circle-left');
        doc.classList.remove('fa-chevron-circle-right');
        menuStatus='false';
        window.sessionStorage.setItem("menuStatus",menuStatus);
    }
}
//切换菜单
function changeMenu(url){
    var newUrl="";
    if(url.includes("?")){
        newUrl=url+"&status="+menuStatus
    }else{
        newUrl=url+"?status="+menuStatus
    }
    window.location.href=newUrl;
}

