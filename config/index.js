export const config = {
  //公众号配置
  // 公众号APP_ID
  APP_ID: "wx669a6cf1f932c979",
  // 公众号APP_SECRET
  APP_SECRET: "a26568d7e0e4939146ef3feffeceff11",
  //接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
 user: [jiajiaxnadd]
   //信息配置
   // 所在省份
    province: "重庆",
      // 所在城市
      city: "垫江",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '07-16',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "老婆", "year": "1996", "date": "07-16"
