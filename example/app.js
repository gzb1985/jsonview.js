jQuery(function($) {
    'use strict';

    var exampleJson = {"user":{"bi_followers_count":558,"domain":"mafengwovip","avatar_large":"http://tp3.sinaimg.cn/1730714982/180/5605513415/0","id":1730714982,"city":"1000","verified":true,"follow_me":false,"verified_reason":"旅游网站蚂蜂窝www.mafengwo.cn官方微博","followers_count":766046,"location":"北京","profile_url":"mafengwovip","province":"11","statuses_count":8594,"description":"北京：http://t.cn/h9Hkin\n上海：http://t.cn/h4XUiZ\n台湾：http://t.cn/h4X7BS\n天津...","friends_count":793,"online_status":0,"idstr":"1730714982","profile_image_url":"http://tp3.sinaimg.cn/1730714982/50/5605513415/0","allow_all_act_msg":true,"allow_all_comment":true,"geo_enabled":false,"screen_name":"蚂蜂窝旅游攻略","lang":"zh-cn","weihao":"","remark":"","favourites_count":9,"name":"蚂蜂窝旅游攻略","url":"http://www.mafengwo.cn","gender":"f","created_at":"Fri May 07 14:07:08 +0800 2010","verified_type":2,"following":true},"reposts_count":0,"favorited":false,"retweeted_status":{"user":{"bi_followers_count":558,"domain":"mafengwovip","avatar_large":"http://tp3.sinaimg.cn/1730714982/180/5605513415/0","id":1730714982,"city":"1000","verified":true,"follow_me":false,"verified_reason":"旅游网站蚂蜂窝www.mafengwo.cn官方微博","followers_count":766046,"location":"北京","profile_url":"mafengwovip","province":"11","statuses_count":8594,"description":"北京：http://t.cn/h9Hkin\n上海：http://t.cn/h4XUiZ\n台湾：http://t.cn/h4X7BS\n天津...","friends_count":793,"online_status":0,"idstr":"1730714982","profile_image_url":"http://tp3.sinaimg.cn/1730714982/50/5605513415/0","allow_all_act_msg":true,"allow_all_comment":true,"geo_enabled":false,"screen_name":"蚂蜂窝旅游攻略","lang":"zh-cn","weihao":"","remark":"","favourites_count":9,"name":"蚂蜂窝旅游攻略","url":"http://www.mafengwo.cn","gender":"f","created_at":"Fri May 07 14:07:08 +0800 2010","verified_type":2,"following":true},"reposts_count":151,"original_pic":"http://ww3.sinaimg.cn/large/67289d66jw1dwzn9tms97j.jpg","favorited":false,"truncated":false,"thumbnail_pic":"http://ww3.sinaimg.cn/thumbnail/67289d66jw1dwzn9tms97j.jpg","text":"#行程攻略#  《中隐隐于长白山》不喜欢城市，不喜欢喧哗，不喜欢拥挤人群！[馋嘴]  我们三个人，要了一大锅，一条鲶鱼，一条鲫鱼，排骨，豆腐，以及茄子，大东北，不吃炖锅，等于白来>>>http://t.cn/zlvLBA7  @蚂蜂窝旅游攻略   ","created_at":"Mon Sep 17 17:27:09 +0800 2012","mlevel":0,"idstr":"3491299086918823","mid":"3491299086918823","visible":{"type":0,"list_id":0},"attitudes_count":0,"in_reply_to_screen_name":"","source":"<a href=\"http://weibo.pp.cc/time/\" rel=\"nofollow\">皮皮时光机</a>","bmiddle_pic":"http://ww3.sinaimg.cn/bmiddle/67289d66jw1dwzn9tms97j.jpg","in_reply_to_status_id":"","comments_count":48,"geo":null,"id":3491299086918823,"in_reply_to_user_id":""},"truncated":false,"text":"#蜂周刊#空气的温度在降低，奔向北方的念头却越来越强烈。大铁锅乱炖[鼓掌] 绝对是一个必去的理由。","created_at":"Sat Sep 22 13:27:05 +0800 2012","mlevel":0,"idstr":"3493050607247291","mid":"3493050607247291","visible":{"type":0,"list_id":0},"attitudes_count":0,"in_reply_to_screen_name":"","source":"<a href=\"http://weibo.pp.cc/time/\" rel=\"nofollow\">皮皮时光机</a>","in_reply_to_status_id":"","comments_count":0,"geo":null,"id":3493050607247291,"in_reply_to_user_id":""};  

    var element = jsonToHTML(exampleJson);
    $('#jsonview').empty();
    $('#jsonview').append(element);
    $(element).ready(function() {
        element.addEventListener('click', ontoggle, false);
        element.addEventListener('mouseover', onmouseMove, false);
    });
});