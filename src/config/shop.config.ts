import type { ShopConfig } from '../types';

/* ============================================
   SHOP CONFIGURATION — 蜀九香老火锅
   ============================================ */

const shopConfig: ShopConfig = {
  industry: 'hotpot',
  name: '蜀九香老火锅',
  nameEn: 'Shu Jiu Xiang Hotpot',
  tagline: '一锅沸腾人间烟火 · 九香飘散百年传承',
  foundedYear: '2015',

  story: '在成都锦江边的一条老巷子里，创始人张师傅用祖传三代的火锅底料配方，开了第一家只有八张桌子的小店。\n\n从凌晨四点去市场挑拣最好的牛油和花椒，到深夜研究每一味香料的配比，他用最笨的方法，熬出了最真的味道。\n\n十年后，蜀九香从巷子深处走到了全国。但每一锅红汤里，依然熬着当初那颗不将就的心。',
  founderName: '张师傅',
  founderQuote: '做火锅和做人一样，火候到了，味道自然就对了。',

  timeline: [
    {
      year: '2015',
      title: '第一家店 · 八张桌子',
      description: '在成都锦江区老巷子里开业，只有8张桌子，每天现熬锅底。开业第一个月，排队的人从巷头排到巷尾。',
    },
    {
      year: '2017',
      title: '口碑爆发 · 全城皆知',
      description: '被本地美食博主发现，一条视频播放破百万。同年获得「成都最好吃的火锅」民间评选第一名。',
    },
    {
      year: '2019',
      title: '走出四川 · 全国布局',
      description: '在北京、上海、深圳三城同步开店。坚持所有底料从成都总部统一炒制，空运到店。',
    },
    {
      year: '2021',
      title: '传承创新 · 数字化探索',
      description: '建立中央厨房和底料研发中心，在保留传统风味基础上，率先开启餐饮数字化体验升级。',
    },
    {
      year: '2024',
      title: 'AI 数字空间 · 全新启程',
      description: '携手 AI 技术打造品牌数字体验空间，让每一家店、每一桌客人都能感受科技与传统的完美融合。',
    },
  ],

  products: [
    {
      id: 'p1',
      name: '九香经典红油锅底',
      description: '三代传承配方，七小时慢火熬制',
      story: '选用优质牛油、汉源花椒、二荆条辣椒，配以十八味秘制香料，文火慢熬七小时。每一口都是时间的味道。',
      price: '¥68',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80',
      category: '锅底',
      featured: true,
    },
    {
      id: 'p2',
      name: '极品鲜切牛肉',
      description: '每日新鲜到店，现切现吃',
      story: '选用优质黄牛后腿肉，由师傅现场手切。薄如蝉翼，入锅三秒即熟，入口鲜嫩多汁。',
      price: '¥88',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      category: '涮品',
      featured: true,
    },
    {
      id: 'p3',
      name: '手打鲜虾滑',
      description: '纯虾肉手工捶打，Q弹鲜甜',
      story: '精选鲜活的深海青虾，去壳后纯手工捶打上千次，保留虾肉颗粒感。每一颗都弹牙鲜甜。',
      price: '¥58',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80',
      category: '涮品',
    },
    {
      id: 'p4',
      name: '九香毛肚',
      description: '巴掌大毛肚，七上八下刚好',
      story: '选用优质水牛毛肚，片片巴掌大小。在滚烫的红油中七上八下，脆嫩爽口，是每桌必点的经典。',
      price: '¥78',
      image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=80',
      category: '涮品',
      featured: true,
    },
    {
      id: 'p5',
      name: '九宫格特色拼盘',
      description: '一次尝遍九种经典',
      story: '精选九种招牌食材，盛放在传统九宫格木盒中。一次点单，尝遍蜀九香的精髓。',
      price: '¥128',
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80',
      category: '特色',
      featured: true,
    },
    {
      id: 'p6',
      name: '冰镇酸梅汤',
      description: '古法熬制，解辣神器',
      story: '用乌梅、山楂、桂花、冰糖古法熬制八小时，冰镇后饮用。酸甜可口，是火锅的最佳伴侣。',
      price: '¥18',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
      category: '饮品',
    },
  ],

  environment: [
    {
      id: 'e1',
      src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1200&q=80',
      alt: '店面外观',
      caption: '传统川西建筑与现代设计的融合',
      type: 'image',
    },
    {
      id: 'e2',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
      alt: '大厅',
      caption: '温暖灯火下的烟火人间',
      type: 'image',
    },
    {
      id: 'e3',
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
      alt: '包间',
      caption: '私密雅致的用餐空间',
      type: 'image',
    },
    {
      id: 'e4',
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      alt: '后厨',
      caption: '明档厨房 · 看得见的新鲜与安心',
      type: 'image',
    },
    {
      id: 'e5',
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
      alt: '外摆区',
      caption: '街边的烟火气最抚凡人心',
      type: 'image',
    },
    {
      id: 'e6',
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80',
      alt: '调料台',
      caption: '二十余种秘制蘸料，调出你的专属味道',
      type: 'image',
    },
  ],

  reviews: [
    {
      id: 'r1',
      name: '李明',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Li',
      content: '在成都吃了二十多年火锅，蜀九香是少数让我愿意排队两小时的店。锅底是真的香，不是那种工业化的味道。',
      story: '从小在成都长大的本地人，对火锅有着近乎挑剔的要求。每周至少来一次，已经成了雷打不动的习惯。',
      rating: 5,
      date: '2024-12-15',
      tag: '本地老饕',
    },
    {
      id: 'r2',
      name: 'Sarah Chen',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah',
      content: '从上海专程飞来成都就为了这一口！朋友推荐说这是成都最好吃的火锅，吃完我只想说——名不虚传。',
      story: '美食爱好者，为了打卡各地美食经常说走就走。在社交媒体上分享的蜀九香探店视频获得了50万+点赞。',
      rating: 5,
      date: '2024-11-20',
      tag: '美食博主',
    },
    {
      id: 'r3',
      name: '王建国',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Wang',
      content: '带孩子来的，本来还担心太辣，结果有鸳鸯锅和儿童套餐，服务很周到。毛肚和虾滑孩子特别爱吃。',
      story: '一家三口住在北京，周末带孩子来体验正宗川味火锅。最满意的是服务和卫生，说下次还要来。',
      rating: 5,
      date: '2024-10-08',
      tag: '家庭顾客',
    },
    {
      id: 'r4',
      name: '小林',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lin',
      content: '毕业聚会选在这里，老板送了特色小吃，还帮我们拍了合影。味道好，氛围更好，会成为我们校友会的定点。',
      story: '大学刚毕业，和室友们在这里吃了散伙饭。说好每年聚会都来蜀九香，已经成了他们的传统。',
      rating: 5,
      date: '2024-09-25',
      tag: '聚会首选',
    },
    {
      id: 'r5',
      name: 'Alex Wang',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alex',
      content: '带外国同事来体验中国火锅文化，他们被震撼到了！特别是九宫格拼盘，又好看又好吃。环境也很有中国特色。',
      story: '在外企工作的成都人，经常带国外客户来体验正宗中国美食。蜀九香已经成了他的"招待必选"。',
      rating: 5,
      date: '2024-08-12',
      tag: '商务宴请',
    },
  ],

  address: '成都市锦江区宽窄巷子88号 蜀九香大厦',
  phone: '028-8888-6666',
  hours: '周一至周日 11:00 - 03:00（凌晨）',
  wechat: 'shujiuxiang888',
  coordinates: [104.065, 30.657],

  heroImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=85',
  heroVideo: '',
  qrCode: 'https://fenton-ai.github.io/laowang-digital-space/',
};

export default shopConfig;
