import type { ShopConfig } from '../types';

/* ============================================
   SHOP CONFIGURATION — 老王炒饭
   修改这里的值即可生成新的数字门店
   ============================================ */

const shopConfig: ShopConfig = {
  // ========== 基本信息 ==========
  industry: 'restaurant',
  name: '老王炒饭',
  nameEn: 'Wang\'s Fried Rice',
  tagline: '深夜巷子里 · 一碗有锅气的炒饭',
  foundedYear: '2018',

  // ========== 品牌故事 ==========
  story: '老王，本名王建国，做了十五年酒店大厨。\n\n2018年，他辞去了星级酒店行政总厨的职位，在杭州一条老巷子里开了这家只有十二平米的小店。\n\n"酒店里的菜太远了，我想做的是——普通人每天都能吃到的，有锅气的饭。"\n\n从第一天起，老王坚持每一份炒饭都单锅现炒。锅要烧到冒烟，油要刚好挂壁，米饭要用隔夜的，鸡蛋要现打。\n\n八年了，锅铲换了十几把，但那份锅气，从来没变过。',
  founderName: '老王（王建国）',
  founderQuote: '我做的不是什么高级菜，就是想让每一个加班到深夜的人，能吃上一口热乎的、踏实的饭。',
  timeline: [
    {
      year: '2018',
      title: '十二平米 · 一个灶台',
      description: '在杭州文三路的老巷子里租下一个十二平米的小铺面，只有四张桌子。开业第一天，只卖了七份炒饭。',
    },
    {
      year: '2019',
      title: '口口相传 · 排队开始',
      description: '周边的程序员和夜班族发现了这家小店。一碗蛋炒饭卖出了"妈妈的味道"，口碑在深夜群里传开了。',
    },
    {
      year: '2021',
      title: '疫情中的坚守',
      description: '外卖订单暴增，老王坚持每一份都是现炒。他说"外卖盒可以冷，锅气不能冷"。那条街倒了一半店，老王炒饭撑下来了。',
    },
    {
      year: '2023',
      title: '老客带新客 · 成了地标',
      description: '被本地生活号报道，视频播放破两百万。有人从城东开车半小时来，就为了吃一碗老干妈炒饭。',
    },
    {
      year: '2025',
      title: '数字空间 · 迎接下一个八年',
      description: '老王说"我不会做营销，但我会炒饭"。AI 数字空间帮他记录下这八年的锅气故事，让更多人扫码就能看见。',
    },
  ],

  // ========== 菜单 ==========
  products: [
    {
      id: 'p1',
      name: '老干妈炒饭',
      description: '招牌必点 · 辣中带香',
      story: '选用陶华碧老干妈豆豉辣椒酱，配上老王自熬的猪油，每一粒米都裹着红油。是店里卖了八年的冠军单品，老客进门不用看菜单直接喊"老规矩"。',
      price: '¥22',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
      category: '炒饭',
      featured: true,
    },
    {
      id: 'p2',
      name: '牛肉炒饭',
      description: '大片牛肉 · 锅气十足',
      story: '牛里脊肉切大片，用料酒、生抽、淀粉腌透，猛火爆炒至断生。米饭粒粒分明，牛肉嫩而不柴。配上一勺老王秘制辣酱，是深夜加班族的治愈套餐。',
      price: '¥28',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80',
      category: '炒饭',
      featured: true,
    },
    {
      id: 'p3',
      name: '黄金蛋炒饭',
      description: '最简单的 · 最见功夫',
      story: '酒店大厨的基本功。鸡蛋要提前打散，米饭要粒粒分开。老王的标准：每一粒米都要裹上蛋液，炒出来金黄油亮，粒粒分明。吃起来不油不腻，只有蛋香和米香。',
      price: '¥15',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
      category: '炒饭',
      featured: true,
    },
    {
      id: 'p4',
      name: '酸辣土豆丝',
      description: '经典小炒 · 下饭神器',
      story: '土豆切细丝，泡水去淀粉，大火快炒。醋要沿锅边淋才有锅气，辣椒要炒出香味不能炒糊。八块钱一份，是老客们凑单必备。',
      price: '¥8',
      image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?w=800&q=80',
      category: '小炒',
    },
    {
      id: 'p5',
      name: '紫菜蛋花汤',
      description: '免费续碗 · 家的味道',
      story: '每天用筒骨熬底汤，紫菜撕碎、蛋花打散，出锅前撒一把葱花和虾皮。点炒饭都送一碗，不够免费加。有人开玩笑说"为了这碗汤点了一碗饭"。',
      price: '免费',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
      category: '汤品',
    },
    {
      id: 'p6',
      name: '老王秘制辣酱',
      description: '可以带走的招牌',
      story: '老顾客强烈要求下推出的衍生产品。用二荆条、小米辣、蒜蓉、豆豉、芝麻，按老王的配方熬制两小时。装在小玻璃瓶里，¥15一瓶，经常断货。',
      price: '¥15',
      image: 'https://images.unsplash.com/photo-1583255444383-38e562461eb8?w=800&q=80',
      category: '特产',
    },
  ],

  // ========== 环境照片 ==========
  environment: [
    {
      id: 'e1',
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
      alt: '门店外观 - 老巷子里的小店',
      caption: '文三路老巷子里，亮着暖黄灯光的那个地方就是',
      type: 'image',
    },
    {
      id: 'e2',
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
      alt: '店内 - 四张桌子',
      caption: '四张桌子，一个灶台，就是全部',
      type: 'image',
    },
    {
      id: 'e3',
      src: 'https://images.unsplash.com/photo-1504714146340-959ca07e1f38?w=1200&q=80',
      alt: '老王的灶台',
      caption: '这口锅跟了老王六年，锅气都在里面',
      type: 'image',
    },
    {
      id: 'e4',
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      alt: '后厨 - 明档操作',
      caption: '明档操作，每一份炒饭都看得见',
      type: 'image',
    },
    {
      id: 'e5',
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
      alt: '深夜的店铺',
      caption: '深夜十一点，外卖订单最旺的时候',
      type: 'image',
    },
    {
      id: 'e6',
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
      alt: '巷子里的烟火气',
      caption: '巷子里的烟火气，最抚凡人心',
      type: 'image',
    },
  ],

  // ========== 顾客评价 ==========
  reviews: [
    {
      id: 'r1',
      name: '小张',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Zhang1',
      content: '吃了三年了，加班再晚都来。老王的炒饭比外卖平台上的那些预制菜强一万倍。',
      story: '在附近互联网公司上班的程序员，每周至少来四次。他给自己定了个规矩：加班到九点之后，就去老王炒饭犒劳自己。',
      rating: 5,
      date: '2025-06-15',
      tag: '三年老客',
    },
    {
      id: 'r2',
      name: '李姐',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Li2',
      content: '我儿子在杭州上大学，第一次带他来吃了之后，每次回学校都要先来打包一份。说这是"杭州最好吃的炒饭"。',
      story: '儿子在浙大读书，每次来杭州看他，李姐都要带他来老王这里吃一顿。她说"这里不像饭店，像家"。',
      rating: 5,
      date: '2025-05-20',
      tag: '家长推荐',
    },
    {
      id: 'r3',
      name: '阿杰',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jie',
      content: '从城东开车半小时来吃，值！老干妈炒饭配一碗紫菜汤，绝了。关键才二十多块钱。',
      story: '美食爱好者，在抖音上刷到老王炒饭的视频后专程来打卡。现在每个月至少来一次，已经安利给了十几个朋友。',
      rating: 5,
      date: '2025-04-08',
      tag: '慕名而来',
    },
    {
      id: 'r4',
      name: '王姐',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Wang4',
      content: '老王人实在，用料也实在。牛肉炒饭里的牛肉比我老公切的还厚。价格这么多年也没怎么涨。',
      story: '在附近开了十年理发店的王姐，是老王的"邻居"。两家店挨着，经常互相照应。她说"这条街换了多少店，老王一直在这"。',
      rating: 5,
      date: '2025-03-25',
      tag: '隔壁邻居',
    },
    {
      id: 'r5',
      name: '小林',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lin5',
      content: '毕业离开杭州两年了，最想念的就是老王那碗蛋炒饭。15块钱，却是整个青春的味道。',
      story: '曾在杭州工作两年，老王炒饭是她加班深夜的慰藉。离开杭州后，还特意让朋友帮忙寄过两瓶老王的辣酱。',
      rating: 5,
      date: '2025-02-12',
      tag: '离开杭州最想念',
    },
  ],

  // ========== 到店信息 ==========
  address: '杭州市西湖区文三路88号 · 老巷子里',
  phone: '0571-88881234',
  hours: '周一至周日 10:00 - 02:00（凌晨）',
  wechat: 'laowangchaofan888',
  coordinates: [120.131, 30.276],

  // ========== 媒体 ==========
  heroImage: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1920&q=85',
  heroVideo: '',
  qrCode: '',
};

export default shopConfig;
