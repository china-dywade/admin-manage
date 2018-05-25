(function(){
  //   var menu=[
  //     {
  //         icon: 'el-icon-setting',
  //         index: 'dashboard',
  //         title: '系统首页'
  //     },
  //     {
  //         icon: 'el-icon-tickets',
  //         index: 'table',
  //         title: '基础表格'
  //     },
  //     {
  //         icon: 'el-icon-message',
  //         index: 'tabs',
  //         title: 'tab选项卡'
  //     },
  //     {
  //         icon: 'el-icon-date',
  //         index: '3',
  //         title: '表单相关',
  //         subs: [
  //             {
  //                 index: 'form',
  //                 title: '基本表单'
  //             },
  //             {
  //                 index: 'editor',
  //                 title: '富文本编辑器'
  //             },
  //             {
  //                 index: 'markdown',
  //                 title: 'markdown编辑器'
  //             },
  //             {
  //                 index: 'upload',
  //                 title: '文件上传'
  //             }
  //         ]
  //     },
  //     {
  //         icon: 'el-icon-star-on',
  //         index: 'charts',
  //         title: 'schart图表'
  //     },
  //     {
  //         icon: 'el-icon-rank',
  //         index: 'drag',
  //         title: '拖拽列表'
  //     },
  //     {
  //         icon: 'el-icon-warning',
  //         index: 'permission',
  //         title: '权限测试'
  //     },
  //     {
  //         icon: 'el-icon-error',
  //         index: '404',
  //         title: '404页面'
  //     }
  // ]
  var home={
    tabIndex:null
  }
  $(".orderList>li").on('click',function(){
    $(this).toggleClass('active').siblings().removeClass('active').find('.menu').slideUp(300);
    $(this).find('.menu').slideToggle(300);
  })
  $(".menu>li").on('click',function(e){
    e.stopPropagation(); 
  })
  $(".tabslist>li a").on('click',function(e){
    e.stopPropagation(); 
    var  index=$(this).parent().index();
    var text=$(this).text();
         home.tabIndex=index;
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(".ifamecontainer>div").eq(index).show().siblings().hide();
    $('.content h6').text(text);

  })
  $(".iconClose").on('click',function(e){
    e.stopPropagation();
    var li=$(this).parent('li');
    li.prev().addClass('active').siblings().removeClass('active');
    li.remove();
    $(".ifamecontainer>div").eq(home.tabIndex).remove();
    $(".ifamecontainer>div").eq((home.tabIndex-1)).show().siblings().hide();
  })

})()