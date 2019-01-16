// color constant
global.INPUTCOLOR = '#dbdbdb';
global.BASECOLOR = '#D52F2E';
global.LINKCOLOR = BASECOLOR;
global.GRADIENT_START = BASECOLOR;
global.GRADIENT_END = BASECOLOR;

// app info
global.APP_NAME = 'bazi';
global.APP_TOKEN = APP_NAME + '_token';
global.APP_ACCOUNT_INFO = APP_NAME + '_account_info';
global.APP_CESUAN_DATA = APP_NAME + '_cesuan_data';
global.APP_BAZI_DATA = APP_CESUAN_DATA;
global.APP_PEACH_DATA = APP_CESUAN_DATA;
global.APP_BAZI_DATA_MAX = 5;
global.APP_DOMIAN = 'https://mingli.szmonster.com'
global.APP_DOWNLOAD_URL = 'http://www.szmonster.com'
global.APP_BAZI_SHARE = APP_NAME + '_bazi_share';

// plugins option
global.DATETIME_OPTION = {
    cancelText: '取消',
    confirmText: '确定',
    format: 'YYYY-M-D-H-m',
    yearRow : '{value}年',
    monthRow : '{value}月',
    dayRow : '{value}日',
    hourRow : '{value}点',
    minuteRow : '{value}分',
    minYear: '1900'
}

// tip message
global.CHECK_TIP = '请同意用户协议'
global.CHECK_ACCOUNT = '账号格式不正确'
global.CHECK_PASSWORD = '请输入6~20位的数字与字母的集合'
global.CHECK_CAPTCHA = '验证码格式不正确'
global.CHECK_PHONE = '手机号码格式不正确'
global.CHECK_NAME = '请输入中文姓名'
global.REPEAT_CAPTCHA = '请勿重复获取验证码'
global.CHECK_QQ = '请输入正确的QQ号码'

// login page
global.TIME_COUNT = 60

// weather data
const WEATHER_STR = 'weather';
global.WEATHER = {
    '100' : WEATHER_STR + '-100',
    '100-n' : WEATHER_STR + '-100-n',
    '101' : WEATHER_STR + '-101',
    '101-n' : WEATHER_STR + '-101-n',
    '102' : WEATHER_STR + '-101',
    '103' : WEATHER_STR + '-103',
    '104' : WEATHER_STR + '-101',
    '200' : WEATHER_STR + '-200',
    '201' : WEATHER_STR + '-200',
    '202' : WEATHER_STR + '-200',
    '203' : WEATHER_STR + '-200',
    '204' : WEATHER_STR + '-200',
    '205' : WEATHER_STR + '-205',
    '206' : WEATHER_STR + '-205',
    '207' : WEATHER_STR + '-205',
    '208' : WEATHER_STR + '-205',
    '209' : WEATHER_STR + '-209',
    '210' : WEATHER_STR + '-209',
    '211' : WEATHER_STR + '-209',
    '212' : WEATHER_STR + '-209',
    '213' : WEATHER_STR + '-209',
    '300' : WEATHER_STR + '-300',
    '301' : WEATHER_STR + '-300',
    '302' : WEATHER_STR + '-300',
    '303' : WEATHER_STR + '-300',
    '304' : WEATHER_STR + '-304',
    '305' : WEATHER_STR + '-305',
    '306' : WEATHER_STR + '-305',
    '307' : WEATHER_STR + '-307',
    '308' : WEATHER_STR + '-307',
    '309' : WEATHER_STR + '-305',
    '310' : WEATHER_STR + '-307',
    '311' : WEATHER_STR + '-307',
    '312' : WEATHER_STR + '-307',
    '313' : WEATHER_STR + '-300',
    '314' : WEATHER_STR + '-305',
    '315' : WEATHER_STR + '-307',
    '316' : WEATHER_STR + '-307',
    '317' : WEATHER_STR + '-307',
    '318' : WEATHER_STR + '-307',
    '399' : WEATHER_STR + '-305',
    '400' : WEATHER_STR + '-400',
    '401' : WEATHER_STR + '-400',
    '402' : WEATHER_STR + '-400',
    '403' : WEATHER_STR + '-400',
    '404' : WEATHER_STR + '-404',
    '405' : WEATHER_STR + '-404',
    '406' : WEATHER_STR + '-404',
    '407' : WEATHER_STR + '-404',
    '408' : WEATHER_STR + '-408',
    '409' : WEATHER_STR + '-408',
    '410' : WEATHER_STR + '-408',
    '499' : WEATHER_STR + '-400',
    '500' : WEATHER_STR + '-500',
    '501' : WEATHER_STR + '-500',
    '502' : WEATHER_STR + '-502',
    '503' : WEATHER_STR + '-503',
    '504' : WEATHER_STR + '-503',
    '507' : WEATHER_STR + '-503',
    '508' : WEATHER_STR + '-503',
    '509' : WEATHER_STR + '-500',
    '510' : WEATHER_STR + '-500',
    '511' : WEATHER_STR + '-502',
    '512' : WEATHER_STR + '-502',
    '513' : WEATHER_STR + '-502',
    '514' : WEATHER_STR + '-500',
    '515' : WEATHER_STR + '-500',
    '900' : WEATHER_STR + '-900',
    '901' : WEATHER_STR + '-901',
    '999' : WEATHER_STR + '-999',
}

// weather city data
global.WEATHER_CITY = [
    {"city":"拉萨市","code":"100"},
    {"city":"那曲地区","code":"101"},
    {"city":"日喀则地区","code":"102"},
    {"city":"阿里地区","code":"103"},
    {"city":"昆明市","code":"104"},
    {"city":"楚雄","code":"105"},
    {"city":"玉溪市","code":"106"},
    {"city":"红河","code":"107"},
    {"city":"普洱市","code":"108"},
    {"city":"西双版纳","code":"109"},
    {"city":"临沧市","code":"110"},
    {"city":"大理","code":"111"},
    {"city":"保山市","code":"112"},
    {"city":"怒江","code":"113"},
    {"city":"丽江市","code":"114"},
    {"city":"迪庆","code":"115"},
    {"city":"德宏","code":"116"},
    {"city":"张掖市","code":"117"},
    {"city":"武威市","code":"118"},
    {"city":"东莞市","code":"119"},
    {"city":"三亚市","code":"121"},
    {"city":"鄂州市","code":"122"},
    {"city":"乌海市","code":"123"},
    {"city":"莱芜市","code":"124"},
    {"city":"海口市","code":"125"},
    {"city":"蚌埠市","code":"126"},
    {"city":"河南","code":"1277"},
    {"city":"济源市","code":"1277"},
    {"city":"合肥市","code":"127"},
    {"city":"阜阳市","code":"128"},
    {"city":"芜湖市","code":"129"},
    {"city":"安庆市","code":"130"},
    {"city":"北京市","code":"131"},
    {"city":"重庆市","code":"132"},
    {"city":"南平市","code":"133"},
    {"city":"泉州市","code":"134"},
    {"city":"庆阳市","code":"135"},
    {"city":"定西市","code":"136"},
    {"city":"韶关市","code":"137"},
    {"city":"佛山市","code":"138"},
    {"city":"茂名市","code":"139"},
    {"city":"珠海市","code":"140"},
    {"city":"梅州市","code":"141"},
    {"city":"桂林市","code":"142"},
    {"city":"河池市","code":"143"},
    {"city":"崇左市","code":"144"},
    {"city":"钦州市","code":"145"},
    {"city":"贵阳市","code":"146"},
    {"city":"六盘水市","code":"147"},
    {"city":"秦皇岛市","code":"148"},
    {"city":"沧州市","code":"149"},
    {"city":"石家庄市","code":"150"},
    {"city":"邯郸市","code":"151"},
    {"city":"新乡市","code":"152"},
    {"city":"洛阳市","code":"153"},
    {"city":"商丘市","code":"154"},
    {"city":"许昌市","code":"155"},
    {"city":"荆州市","code":"157"},
    {"city":"长沙市","code":"158"},
    {"city":"衡阳市","code":"159"},
    {"city":"镇江市","code":"160"},
    {"city":"南通市","code":"161"},
    {"city":"淮安市","code":"162"},
    {"city":"南昌市","code":"163"},
    {"city":"新余市","code":"164"},
    {"city":"通化市","code":"165"},
    {"city":"锦州市","code":"166"},
    {"city":"大连市","code":"167"},
    {"city":"乌兰察布市","code":"168"},
    {"city":"巴彦淖尔市","code":"169"},
    {"city":"渭南市","code":"170"},
    {"city":"宝鸡市","code":"171"},
    {"city":"枣庄市","code":"172"},
    {"city":"日照市","code":"173"},
    {"city":"东营市","code":"174"},
    {"city":"威海市","code":"175"},
    {"city":"太原市","code":"176"},
    {"city":"文山","code":"177"},
    {"city":"温州市","code":"178"},
    {"city":"杭州市","code":"179"},
    {"city":"宁波市","code":"180"},
    {"city":"中卫市","code":"181"},
    {"city":"临夏","code":"182"},
    {"city":"辽源市","code":"183"},
    {"city":"抚顺市","code":"184"},
    {"city":"阿坝","code":"185"},
    {"city":"宜宾市","code":"186"},
    {"city":"中山市","code":"187"},
    {"city":"亳州市","code":"188"},
    {"city":"滁州市","code":"189"},
    {"city":"宣城市","code":"190"},
    {"city":"廊坊市","code":"191"},
    {"city":"宁德市","code":"192"},
    {"city":"龙岩市","code":"193"},
    {"city":"厦门市","code":"194"},
    {"city":"莆田市","code":"195"},
    {"city":"天水市","code":"196"},
    {"city":"清远市","code":"197"},
    {"city":"湛江市","code":"198"},
    {"city":"阳江市","code":"199"},
    {"city":"河源市","code":"200"},
    {"city":"潮州市","code":"201"},
    {"city":"来宾市","code":"202"},
    {"city":"百色市","code":"203"},
    {"city":"防城港市","code":"204"},
    {"city":"铜仁地区","code":"205"},
    {"city":"毕节地区","code":"206"},
    {"city":"承德市","code":"207"},
    {"city":"衡水市","code":"208"},
    {"city":"濮阳市","code":"209"},
    {"city":"开封市","code":"210"},
    {"city":"焦作市","code":"211"},
    {"city":"三门峡市","code":"212"},
    {"city":"平顶山市","code":"213"},
    {"city":"信阳市","code":"214"},
    {"city":"鹤壁市","code":"215"},
    {"city":"十堰市","code":"216"},
    {"city":"荆门市","code":"217"},
    {"city":"武汉市","code":"218"},
    {"city":"常德市","code":"219"},
    {"city":"岳阳市","code":"220"},
    {"city":"娄底市","code":"221"},
    {"city":"株洲市","code":"222"},
    {"city":"盐城市","code":"223"},
    {"city":"苏州市","code":"224"},
    {"city":"景德镇市","code":"225"},
    {"city":"抚州市","code":"226"},
    {"city":"本溪市","code":"227"},
    {"city":"盘锦市","code":"228"},
    {"city":"包头市","code":"229"},
    {"city":"阿拉善盟","code":"230"},
    {"city":"榆林市","code":"231"},
    {"city":"铜川市","code":"232"},
    {"city":"西安市","code":"233"},
    {"city":"临沂市","code":"234"},
    {"city":"滨州市","code":"235"},
    {"city":"青岛市","code":"236"},
    {"city":"朔州市","code":"237"},
    {"city":"晋中市","code":"238"},
    {"city":"巴中市","code":"239"},
    {"city":"绵阳市","code":"240"},
    {"city":"广安市","code":"241"},
    {"city":"资阳市","code":"242"},
    {"city":"衢州市","code":"243"},
    {"city":"台州市","code":"244"},
    {"city":"舟山市","code":"245"},
    {"city":"固原市","code":"246"},
    {"city":"甘南","code":"247"},
    {"city":"内江市","code":"248"},
    {"city":"曲靖市","code":"249"},
    {"city":"淮南市","code":"250"},
    {"city":"巢湖市","code":"251"},
    {"city":"黄山市","code":"252"},
    {"city":"淮北市","code":"253"},
    {"city":"三明市","code":"254"},
    {"city":"漳州市","code":"255"},
    {"city":"陇南市","code":"256"},
    {"city":"广州市","code":"257"},
    {"city":"云浮市","code":"258"},
    {"city":"揭阳市","code":"259"},
    {"city":"贺州市","code":"260"},
    {"city":"南宁市","code":"261"},
    {"city":"遵义市","code":"262"},
    {"city":"安顺市","code":"263"},
    {"city":"张家口市","code":"264"},
    {"city":"唐山市","code":"265"},
    {"city":"邢台市","code":"266"},
    {"city":"安阳市","code":"267"},
    {"city":"郑州市","code":"268"},
    {"city":"驻马店市","code":"269"},
    {"city":"宜昌市","code":"270"},
    {"city":"黄冈市","code":"271"},
    {"city":"益阳市","code":"272"},
    {"city":"邵阳市","code":"273"},
    {"city":"湘西","code":"274"},
    {"city":"郴州市","code":"275"},
    {"city":"泰州市","code":"276"},
    {"city":"宿迁市","code":"277"},
    {"city":"宜春市","code":"278"},
    {"city":"鹰潭市","code":"279"},
    {"city":"朝阳市","code":"280"},
    {"city":"营口市","code":"281"},
    {"city":"丹东市","code":"282"},
    {"city":"鄂尔多斯市","code":"283"},
    {"city":"延安市","code":"284"},
    {"city":"商洛市","code":"285"},
    {"city":"济宁市","code":"286"},
    {"city":"潍坊市","code":"287"},
    {"city":"济南市","code":"288"},
    {"city":"上海市","code":"289"},
    {"city":"晋城市","code":"290"},
    {"city":"澳门特别行政区","code":"2911"},
    {"city":"香港特别行政区","code":"2912"},
    {"city":"南充市","code":"291"},
    {"city":"丽水市","code":"292"},
    {"city":"绍兴市","code":"293"},
    {"city":"湖州市","code":"294"},
    {"city":"北海市","code":"295"},
    {"city":"赤峰市","code":"297"},
    {"city":"六安市","code":"298"},
    {"city":"池州市","code":"299"},
    {"city":"福州市","code":"300"},
    {"city":"惠州市","code":"301"},
    {"city":"江门市","code":"302"},
    {"city":"汕头市","code":"303"},
    {"city":"梧州市","code":"304"},
    {"city":"柳州市","code":"305"},
    {"city":"黔南","code":"306"},
    {"city":"保定市","code":"307"},
    {"city":"周口市","code":"308"},
    {"city":"南阳市","code":"309"},
    {"city":"孝感市","code":"310"},
    {"city":"黄石市","code":"311"},
    {"city":"张家界市","code":"312"},
    {"city":"湘潭市","code":"313"},
    {"city":"永州市","code":"314"},
    {"city":"南京市","code":"315"},
    {"city":"徐州市","code":"316"},
    {"city":"无锡市","code":"317"},
    {"city":"吉安市","code":"318"},
    {"city":"葫芦岛市","code":"319"},
    {"city":"鞍山市","code":"320"},
    {"city":"呼和浩特市","code":"321"},
    {"city":"吴忠市","code":"322"},
    {"city":"咸阳市","code":"323"},
    {"city":"安康市","code":"324"},
    {"city":"泰安市","code":"325"},
    {"city":"烟台市","code":"326"},
    {"city":"吕梁市","code":"327"},
    {"city":"运城市","code":"328"},
    {"city":"广元市","code":"329"},
    {"city":"遂宁市","code":"330"},
    {"city":"泸州市","code":"331"},
    {"city":"天津市","code":"332"},
    {"city":"金华市","code":"333"},
    {"city":"嘉兴市","code":"334"},
    {"city":"石嘴山市","code":"335"},
    {"city":"昭通市","code":"336"},
    {"city":"铜陵市","code":"337"},
    {"city":"肇庆市","code":"338"},
    {"city":"汕尾市","code":"339"},
    {"city":"嘉峪关市","code":"33"},
    {"city":"深圳市","code":"340"},
    {"city":"贵港市","code":"341"},
    {"city":"黔东南","code":"342"},
    {"city":"黔西南","code":"343"},
    {"city":"漯河市","code":"344"},
    {"city":"扬州市","code":"346"},
    {"city":"连云港市","code":"347"},
    {"city":"常州市","code":"348"},
    {"city":"九江市","code":"349"},
    {"city":"金昌市","code":"34"},
    {"city":"萍乡市","code":"350"},
    {"city":"辽阳市","code":"351"},
    {"city":"汉中市","code":"352"},
    {"city":"菏泽市","code":"353"},
    {"city":"淄博市","code":"354"},
    {"city":"大同市","code":"355"},
    {"city":"长治市","code":"356"},
    {"city":"阳泉市","code":"357"},
    {"city":"马鞍山市","code":"358"},
    {"city":"平凉市","code":"359"},
    {"city":"白银市","code":"35"},
    {"city":"银川市","code":"360"},
    {"city":"玉林市","code":"361"},
    {"city":"咸宁市","code":"362"},
    {"city":"怀化市","code":"363"},
    {"city":"上饶市","code":"364"},
    {"city":"赣州市","code":"365"},
    {"city":"聊城市","code":"366"},
    {"city":"忻州市","code":"367"},
    {"city":"临汾市","code":"368"},
    {"city":"达州市","code":"369"},
    {"city":"兰州市","code":"36"},
    {"city":"宿州市","code":"370"},
    {"city":"随州市","code":"371"},
    {"city":"德州市","code":"372"},
    {"city":"恩施","code":"373"},
    {"city":"酒泉市","code":"37"},
    {"city":"大兴安岭地区","code":"38"},
    {"city":"黑河市","code":"39"},
    {"city":"伊春市","code":"40"},
    {"city":"齐齐哈尔市","code":"41"},
    {"city":"佳木斯市","code":"42"},
    {"city":"鹤岗市","code":"43"},
    {"city":"绥化市","code":"44"},
    {"city":"双鸭山市","code":"45"},
    {"city":"鸡西市","code":"46"},
    {"city":"七台河市","code":"47"},
    {"city":"哈尔滨市","code":"48"},
    {"city":"牡丹江市","code":"49"},
    {"city":"大庆市","code":"50"},
    {"city":"白城市","code":"51"},
    {"city":"松原市","code":"52"},
    {"city":"长春市","code":"53"},
    {"city":"延边","code":"54"},
    {"city":"吉林市","code":"55"},
    {"city":"四平市","code":"56"},
    {"city":"白山市","code":"57"},
    {"city":"沈阳市","code":"58"},
    {"city":"阜新市","code":"59"},
    {"city":"铁岭市","code":"60"},
    {"city":"呼伦贝尔市","code":"61"},
    {"city":"兴安盟","code":"62"},
    {"city":"锡林郭勒","code":"63"},
    {"city":"通辽市","code":"64"},
    {"city":"海西","code":"65"},
    {"city":"西宁市","code":"66"},
    {"city":"海北","code":"67"},
    {"city":"海南","code":"68"},
    {"city":"海东地区","code":"69"},
    {"city":"黄南","code":"70"},
    {"city":"玉树","code":"71"},
    {"city":"果洛","code":"72"},
    {"city":"甘孜","code":"73"},
    {"city":"德阳市","code":"74"},
    {"city":"成都市","code":"75"},
    {"city":"雅安市","code":"76"},
    {"city":"眉山市","code":"77"},
    {"city":"自贡市","code":"78"},
    {"city":"乐山市","code":"79"},
    {"city":"凉山","code":"80"},
    {"city":"攀枝花市","code":"81"},
    {"city":"和田地区","code":"82"},
    {"city":"喀什地区","code":"83"},
    {"city":"阿克苏地区","code":"85"},
    {"city":"巴音郭楞","code":"86"},
    {"city":"博尔塔拉","code":"88"},
    {"city":"吐鲁番地区","code":"89"},
    {"city":"伊犁","code":"90"},
    {"city":"哈密地区","code":"91"},
    {"city":"乌鲁木齐市","code":"92"},
    {"city":"昌吉","code":"93"},
    {"city":"塔城地区","code":"94"},
    {"city":"克拉玛依市","code":"95"},
    {"city":"阿勒泰地区","code":"96"},
    {"city":"山南地区","code":"97"},
    {"city":"林芝地区","code":"98"},
    {"city":"昌都地区","code":"99"}
]

// province data
global.PROVINCE_LIST = [{
    "name" : "忽略",
    "id" : "0"
}, {
    "name": "北京市",
    "id": "110000"
}, {
    "name": "天津市",
    "id": "120000"
}, {
    "name": "河北省",
    "id": "130000"
}, {
    "name": "山西省",
    "id": "140000"
}, {
    "name": "内蒙古自治区", 
    "id": "150000"
}, {
    "name": "辽宁省",
    "id": "210000"
}, {
    "name": "吉林省",
    "id": "220000"
}, {
    "name": "黑龙江省",
    "id": "230000"
}, {
    "name": "上海市",
    "id": "310000"
}, {
    "name": "江苏省",
    "id": "320000"
}, {
    "name": "浙江省",
    "id": "330000"
}, {
    "name": "安徽省",
    "id": "340000"
}, {
    "name": "福建省",
    "id": "350000"
}, {
    "name": "江西省",
    "id": "360000"
}, {
    "name": "山东省",
    "id": "370000"
}, {
    "name": "河南省",
    "id": "410000"
}, {
    "name": "湖北省",
    "id": "420000"
}, {
    "name": "湖南省",
    "id": "430000"
}, {
    "name": "广东省",
    "id": "440000"
}, {
    "name": "广西壮族自治区",
    "id": "450000"
}, {
    "name": "海南省",
    "id": "460000"
}, {
    "name": "重庆市",
    "id": "500000"
}, {
    "name": "四川省",
    "id": "510000"
}, {
    "name": "贵州省",
    "id": "520000"
}, {
    "name": "云南省",
    "id": "530000"
}, {
    "name": "西藏自治区",  
    "id": "540000"
}, {
    "name": "陕西省",
    "id": "610000"
}, {
    "name": "甘肃省",
    "id": "620000"
}, {
    "name": "青海省",
    "id": "630000"
}, {
    "name": "宁夏回族自治区",
    "id": "640000"
}, {
    "name": "新疆维吾尔自治区",
    "id": "650000"
}, {
    "name": "台湾省",
    "id": "710000"
}, {
    "name": "香港特别行政区",
    "id": "810000"
}, {
    "name": "澳门特别行政区",
    "id": "820000"
}]

// city data
global.CITY_LIST = {
    "0" : [
        {
            "name" : "忽略",
            "id" : "0"
        }
    ],
    "110000": [
        {
            "province": "北京市", 
            "name": "北京市", 
            "id": "110100"
        }
    ], 
    "120000": [
        {
            "province": "天津市", 
            "name": "天津市", 
            "id": "120100"
        }
    ], 
    "130000": [
        {
            "province": "河北省", 
            "name": "石家庄市", 
            "id": "130100"
        }, 
        {
            "province": "河北省", 
            "name": "唐山市", 
            "id": "130200"
        }, 
        {
            "province": "河北省", 
            "name": "秦皇岛市", 
            "id": "130300"
        }, 
        {
            "province": "河北省", 
            "name": "邯郸市", 
            "id": "130400"
        }, 
        {
            "province": "河北省", 
            "name": "邢台市", 
            "id": "130500"
        }, 
        {
            "province": "河北省", 
            "name": "保定市", 
            "id": "130600"
        }, 
        {
            "province": "河北省", 
            "name": "张家口市", 
            "id": "130700"
        }, 
        {
            "province": "河北省", 
            "name": "承德市", 
            "id": "130800"
        }, 
        {
            "province": "河北省", 
            "name": "沧州市", 
            "id": "130900"
        }, 
        {
            "province": "河北省", 
            "name": "廊坊市", 
            "id": "131000"
        }, 
        {
            "province": "河北省", 
            "name": "衡水市", 
            "id": "131100"
        }, 
        {
            "province": "河北省", 
            "name": "省直辖县级行政区划", 
            "id": "139000"
        }
    ], 
    "140000": [
        {
            "province": "山西省", 
            "name": "太原市", 
            "id": "140100"
        }, 
        {
            "province": "山西省", 
            "name": "大同市", 
            "id": "140200"
        }, 
        {
            "province": "山西省", 
            "name": "阳泉市", 
            "id": "140300"
        }, 
        {
            "province": "山西省", 
            "name": "长治市", 
            "id": "140400"
        }, 
        {
            "province": "山西省", 
            "name": "晋城市", 
            "id": "140500"
        }, 
        {
            "province": "山西省", 
            "name": "朔州市", 
            "id": "140600"
        }, 
        {
            "province": "山西省", 
            "name": "晋中市", 
            "id": "140700"
        }, 
        {
            "province": "山西省", 
            "name": "运城市", 
            "id": "140800"
        }, 
        {
            "province": "山西省", 
            "name": "忻州市", 
            "id": "140900"
        }, 
        {
            "province": "山西省", 
            "name": "临汾市", 
            "id": "141000"
        }, 
        {
            "province": "山西省", 
            "name": "吕梁市", 
            "id": "141100"
        }
    ], 
    "150000": [
        {
            "province": "内蒙古自治区", 
            "name": "呼和浩特市", 
            "id": "150100"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "包头市", 
            "id": "150200"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "乌海市", 
            "id": "150300"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "赤峰市", 
            "id": "150400"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "通辽市", 
            "id": "150500"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "鄂尔多斯市", 
            "id": "150600"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "呼伦贝尔市", 
            "id": "150700"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "巴彦淖尔市", 
            "id": "150800"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "乌兰察布市", 
            "id": "150900"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "兴安盟", 
            "id": "152200"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "锡林郭勒盟", 
            "id": "152500"
        }, 
        {
            "province": "内蒙古自治区", 
            "name": "阿拉善盟", 
            "id": "152900"
        }
    ], 
    "210000": [
        {
            "province": "辽宁省", 
            "name": "沈阳市", 
            "id": "210100"
        }, 
        {
            "province": "辽宁省", 
            "name": "大连市", 
            "id": "210200"
        }, 
        {
            "province": "辽宁省", 
            "name": "鞍山市", 
            "id": "210300"
        }, 
        {
            "province": "辽宁省", 
            "name": "抚顺市", 
            "id": "210400"
        }, 
        {
            "province": "辽宁省", 
            "name": "本溪市", 
            "id": "210500"
        }, 
        {
            "province": "辽宁省", 
            "name": "丹东市", 
            "id": "210600"
        }, 
        {
            "province": "辽宁省", 
            "name": "锦州市", 
            "id": "210700"
        }, 
        {
            "province": "辽宁省", 
            "name": "营口市", 
            "id": "210800"
        }, 
        {
            "province": "辽宁省", 
            "name": "阜新市", 
            "id": "210900"
        }, 
        {
            "province": "辽宁省", 
            "name": "辽阳市", 
            "id": "211000"
        }, 
        {
            "province": "辽宁省", 
            "name": "盘锦市", 
            "id": "211100"
        }, 
        {
            "province": "辽宁省", 
            "name": "铁岭市", 
            "id": "211200"
        }, 
        {
            "province": "辽宁省", 
            "name": "朝阳市", 
            "id": "211300"
        }, 
        {
            "province": "辽宁省", 
            "name": "葫芦岛市", 
            "id": "211400"
        }
    ], 
    "220000": [
        {
            "province": "吉林省", 
            "name": "长春市", 
            "id": "220100"
        }, 
        {
            "province": "吉林省", 
            "name": "吉林市", 
            "id": "220200"
        }, 
        {
            "province": "吉林省", 
            "name": "四平市", 
            "id": "220300"
        }, 
        {
            "province": "吉林省", 
            "name": "辽源市", 
            "id": "220400"
        }, 
        {
            "province": "吉林省", 
            "name": "通化市", 
            "id": "220500"
        }, 
        {
            "province": "吉林省", 
            "name": "白山市", 
            "id": "220600"
        }, 
        {
            "province": "吉林省", 
            "name": "松原市", 
            "id": "220700"
        }, 
        {
            "province": "吉林省", 
            "name": "白城市", 
            "id": "220800"
        }, 
        {
            "province": "吉林省", 
            "name": "延边朝鲜族自治州", 
            "id": "222400"
        }
    ], 
    "230000": [
        {
            "province": "黑龙江省", 
            "name": "哈尔滨市", 
            "id": "230100"
        }, 
        {
            "province": "黑龙江省", 
            "name": "齐齐哈尔市", 
            "id": "230200"
        }, 
        {
            "province": "黑龙江省", 
            "name": "鸡西市", 
            "id": "230300"
        }, 
        {
            "province": "黑龙江省", 
            "name": "鹤岗市", 
            "id": "230400"
        }, 
        {
            "province": "黑龙江省", 
            "name": "双鸭山市", 
            "id": "230500"
        }, 
        {
            "province": "黑龙江省", 
            "name": "大庆市", 
            "id": "230600"
        }, 
        {
            "province": "黑龙江省", 
            "name": "伊春市", 
            "id": "230700"
        }, 
        {
            "province": "黑龙江省", 
            "name": "佳木斯市", 
            "id": "230800"
        }, 
        {
            "province": "黑龙江省", 
            "name": "七台河市", 
            "id": "230900"
        }, 
        {
            "province": "黑龙江省", 
            "name": "牡丹江市", 
            "id": "231000"
        }, 
        {
            "province": "黑龙江省", 
            "name": "黑河市", 
            "id": "231100"
        }, 
        {
            "province": "黑龙江省", 
            "name": "绥化市", 
            "id": "231200"
        }, 
        {
            "province": "黑龙江省", 
            "name": "大兴安岭地区", 
            "id": "232700"
        }
    ], 
    "310000": [
        {
            "province": "上海市", 
            "name": "上海市", 
            "id": "310100"
        }
    ], 
    "320000": [
        {
            "province": "江苏省", 
            "name": "南京市", 
            "id": "320100"
        }, 
        {
            "province": "江苏省", 
            "name": "无锡市", 
            "id": "320200"
        }, 
        {
            "province": "江苏省", 
            "name": "徐州市", 
            "id": "320300"
        }, 
        {
            "province": "江苏省", 
            "name": "常州市", 
            "id": "320400"
        }, 
        {
            "province": "江苏省", 
            "name": "苏州市", 
            "id": "320500"
        }, 
        {
            "province": "江苏省", 
            "name": "南通市", 
            "id": "320600"
        }, 
        {
            "province": "江苏省", 
            "name": "连云港市", 
            "id": "320700"
        }, 
        {
            "province": "江苏省", 
            "name": "淮安市", 
            "id": "320800"
        }, 
        {
            "province": "江苏省", 
            "name": "盐城市", 
            "id": "320900"
        }, 
        {
            "province": "江苏省", 
            "name": "扬州市", 
            "id": "321000"
        }, 
        {
            "province": "江苏省", 
            "name": "镇江市", 
            "id": "321100"
        }, 
        {
            "province": "江苏省", 
            "name": "泰州市", 
            "id": "321200"
        }, 
        {
            "province": "江苏省", 
            "name": "宿迁市", 
            "id": "321300"
        }
    ], 
    "330000": [
        {
            "province": "浙江省", 
            "name": "杭州市", 
            "id": "330100"
        }, 
        {
            "province": "浙江省", 
            "name": "宁波市", 
            "id": "330200"
        }, 
        {
            "province": "浙江省", 
            "name": "温州市", 
            "id": "330300"
        }, 
        {
            "province": "浙江省", 
            "name": "嘉兴市", 
            "id": "330400"
        }, 
        {
            "province": "浙江省", 
            "name": "湖州市", 
            "id": "330500"
        }, 
        {
            "province": "浙江省", 
            "name": "绍兴市", 
            "id": "330600"
        }, 
        {
            "province": "浙江省", 
            "name": "金华市", 
            "id": "330700"
        }, 
        {
            "province": "浙江省", 
            "name": "衢州市", 
            "id": "330800"
        }, 
        {
            "province": "浙江省", 
            "name": "舟山市", 
            "id": "330900"
        }, 
        {
            "province": "浙江省", 
            "name": "台州市", 
            "id": "331000"
        }, 
        {
            "province": "浙江省", 
            "name": "丽水市", 
            "id": "331100"
        }
    ], 
    "340000": [
        {
            "province": "安徽省", 
            "name": "合肥市", 
            "id": "340100"
        }, 
        {
            "province": "安徽省", 
            "name": "芜湖市", 
            "id": "340200"
        }, 
        {
            "province": "安徽省", 
            "name": "蚌埠市", 
            "id": "340300"
        }, 
        {
            "province": "安徽省", 
            "name": "淮南市", 
            "id": "340400"
        }, 
        {
            "province": "安徽省", 
            "name": "马鞍山市", 
            "id": "340500"
        }, 
        {
            "province": "安徽省", 
            "name": "淮北市", 
            "id": "340600"
        }, 
        {
            "province": "安徽省", 
            "name": "铜陵市", 
            "id": "340700"
        }, 
        {
            "province": "安徽省", 
            "name": "安庆市", 
            "id": "340800"
        }, 
        {
            "province": "安徽省", 
            "name": "黄山市", 
            "id": "341000"
        }, 
        {
            "province": "安徽省", 
            "name": "滁州市", 
            "id": "341100"
        }, 
        {
            "province": "安徽省", 
            "name": "阜阳市", 
            "id": "341200"
        }, 
        {
            "province": "安徽省", 
            "name": "宿州市", 
            "id": "341300"
        }, 
        {
            "province": "安徽省", 
            "name": "六安市", 
            "id": "341500"
        }, 
        {
            "province": "安徽省", 
            "name": "亳州市", 
            "id": "341600"
        }, 
        {
            "province": "安徽省", 
            "name": "池州市", 
            "id": "341700"
        }, 
        {
            "province": "安徽省", 
            "name": "宣城市", 
            "id": "341800"
        }
    ], 
    "350000": [
        {
            "province": "福建省", 
            "name": "福州市", 
            "id": "350100"
        }, 
        {
            "province": "福建省", 
            "name": "厦门市", 
            "id": "350200"
        }, 
        {
            "province": "福建省", 
            "name": "莆田市", 
            "id": "350300"
        }, 
        {
            "province": "福建省", 
            "name": "三明市", 
            "id": "350400"
        }, 
        {
            "province": "福建省", 
            "name": "泉州市", 
            "id": "350500"
        }, 
        {
            "province": "福建省", 
            "name": "漳州市", 
            "id": "350600"
        }, 
        {
            "province": "福建省", 
            "name": "南平市", 
            "id": "350700"
        }, 
        {
            "province": "福建省", 
            "name": "龙岩市", 
            "id": "350800"
        }, 
        {
            "province": "福建省", 
            "name": "宁德市", 
            "id": "350900"
        }
    ], 
    "360000": [
        {
            "province": "江西省", 
            "name": "南昌市", 
            "id": "360100"
        }, 
        {
            "province": "江西省", 
            "name": "景德镇市", 
            "id": "360200"
        }, 
        {
            "province": "江西省", 
            "name": "萍乡市", 
            "id": "360300"
        }, 
        {
            "province": "江西省", 
            "name": "九江市", 
            "id": "360400"
        }, 
        {
            "province": "江西省", 
            "name": "新余市", 
            "id": "360500"
        }, 
        {
            "province": "江西省", 
            "name": "鹰潭市", 
            "id": "360600"
        }, 
        {
            "province": "江西省", 
            "name": "赣州市", 
            "id": "360700"
        }, 
        {
            "province": "江西省", 
            "name": "吉安市", 
            "id": "360800"
        }, 
        {
            "province": "江西省", 
            "name": "宜春市", 
            "id": "360900"
        }, 
        {
            "province": "江西省", 
            "name": "抚州市", 
            "id": "361000"
        }, 
        {
            "province": "江西省", 
            "name": "上饶市", 
            "id": "361100"
        }
    ], 
    "370000": [
        {
            "province": "山东省", 
            "name": "济南市", 
            "id": "370100"
        }, 
        {
            "province": "山东省", 
            "name": "青岛市", 
            "id": "370200"
        }, 
        {
            "province": "山东省", 
            "name": "淄博市", 
            "id": "370300"
        }, 
        {
            "province": "山东省", 
            "name": "枣庄市", 
            "id": "370400"
        }, 
        {
            "province": "山东省", 
            "name": "东营市", 
            "id": "370500"
        }, 
        {
            "province": "山东省", 
            "name": "烟台市", 
            "id": "370600"
        }, 
        {
            "province": "山东省", 
            "name": "潍坊市", 
            "id": "370700"
        }, 
        {
            "province": "山东省", 
            "name": "济宁市", 
            "id": "370800"
        }, 
        {
            "province": "山东省", 
            "name": "泰安市", 
            "id": "370900"
        }, 
        {
            "province": "山东省", 
            "name": "威海市", 
            "id": "371000"
        }, 
        {
            "province": "山东省", 
            "name": "日照市", 
            "id": "371100"
        }, 
        {
            "province": "山东省", 
            "name": "莱芜市", 
            "id": "371200"
        }, 
        {
            "province": "山东省", 
            "name": "临沂市", 
            "id": "371300"
        }, 
        {
            "province": "山东省", 
            "name": "德州市", 
            "id": "371400"
        }, 
        {
            "province": "山东省", 
            "name": "聊城市", 
            "id": "371500"
        }, 
        {
            "province": "山东省", 
            "name": "滨州市", 
            "id": "371600"
        }, 
        {
            "province": "山东省", 
            "name": "菏泽市", 
            "id": "371700"
        }
    ], 
    "410000": [
        {
            "province": "河南省", 
            "name": "郑州市", 
            "id": "410100"
        }, 
        {
            "province": "河南省", 
            "name": "开封市", 
            "id": "410200"
        }, 
        {
            "province": "河南省", 
            "name": "洛阳市", 
            "id": "410300"
        }, 
        {
            "province": "河南省", 
            "name": "平顶山市", 
            "id": "410400"
        }, 
        {
            "province": "河南省", 
            "name": "安阳市", 
            "id": "410500"
        }, 
        {
            "province": "河南省", 
            "name": "鹤壁市", 
            "id": "410600"
        }, 
        {
            "province": "河南省", 
            "name": "新乡市", 
            "id": "410700"
        }, 
        {
            "province": "河南省", 
            "name": "焦作市", 
            "id": "410800"
        }, 
        {
            "province": "河南省", 
            "name": "濮阳市", 
            "id": "410900"
        }, 
        {
            "province": "河南省", 
            "name": "许昌市", 
            "id": "411000"
        }, 
        {
            "province": "河南省", 
            "name": "漯河市", 
            "id": "411100"
        }, 
        {
            "province": "河南省", 
            "name": "三门峡市", 
            "id": "411200"
        }, 
        {
            "province": "河南省", 
            "name": "南阳市", 
            "id": "411300"
        }, 
        {
            "province": "河南省", 
            "name": "商丘市", 
            "id": "411400"
        }, 
        {
            "province": "河南省", 
            "name": "信阳市", 
            "id": "411500"
        }, 
        {
            "province": "河南省", 
            "name": "周口市", 
            "id": "411600"
        }, 
        {
            "province": "河南省", 
            "name": "驻马店市", 
            "id": "411700"
        }, 
        {
            "province": "河南省", 
            "name": "省直辖县级行政区划", 
            "id": "419000"
        }
    ], 
    "420000": [
        {
            "province": "湖北省", 
            "name": "武汉市", 
            "id": "420100"
        }, 
        {
            "province": "湖北省", 
            "name": "黄石市", 
            "id": "420200"
        }, 
        {
            "province": "湖北省", 
            "name": "十堰市", 
            "id": "420300"
        }, 
        {
            "province": "湖北省", 
            "name": "宜昌市", 
            "id": "420500"
        }, 
        {
            "province": "湖北省", 
            "name": "襄阳市", 
            "id": "420600"
        }, 
        {
            "province": "湖北省", 
            "name": "鄂州市", 
            "id": "420700"
        }, 
        {
            "province": "湖北省", 
            "name": "荆门市", 
            "id": "420800"
        }, 
        {
            "province": "湖北省", 
            "name": "孝感市", 
            "id": "420900"
        }, 
        {
            "province": "湖北省", 
            "name": "荆州市", 
            "id": "421000"
        }, 
        {
            "province": "湖北省", 
            "name": "黄冈市", 
            "id": "421100"
        }, 
        {
            "province": "湖北省", 
            "name": "咸宁市", 
            "id": "421200"
        }, 
        {
            "province": "湖北省", 
            "name": "随州市", 
            "id": "421300"
        }, 
        {
            "province": "湖北省", 
            "name": "恩施土家族苗族自治州", 
            "id": "422800"
        }, 
        {
            "province": "湖北省", 
            "name": "省直辖县级行政区划", 
            "id": "429000"
        }
    ], 
    "430000": [
        {
            "province": "湖南省", 
            "name": "长沙市", 
            "id": "430100"
        }, 
        {
            "province": "湖南省", 
            "name": "株洲市", 
            "id": "430200"
        }, 
        {
            "province": "湖南省", 
            "name": "湘潭市", 
            "id": "430300"
        }, 
        {
            "province": "湖南省", 
            "name": "衡阳市", 
            "id": "430400"
        }, 
        {
            "province": "湖南省", 
            "name": "邵阳市", 
            "id": "430500"
        }, 
        {
            "province": "湖南省", 
            "name": "岳阳市", 
            "id": "430600"
        }, 
        {
            "province": "湖南省", 
            "name": "常德市", 
            "id": "430700"
        }, 
        {
            "province": "湖南省", 
            "name": "张家界市", 
            "id": "430800"
        }, 
        {
            "province": "湖南省", 
            "name": "益阳市", 
            "id": "430900"
        }, 
        {
            "province": "湖南省", 
            "name": "郴州市", 
            "id": "431000"
        }, 
        {
            "province": "湖南省", 
            "name": "永州市", 
            "id": "431100"
        }, 
        {
            "province": "湖南省", 
            "name": "怀化市", 
            "id": "431200"
        }, 
        {
            "province": "湖南省", 
            "name": "娄底市", 
            "id": "431300"
        }, 
        {
            "province": "湖南省", 
            "name": "湘西土家族苗族自治州", 
            "id": "433100"
        }
    ], 
    "440000": [
        {
            "province": "广东省", 
            "name": "广州市", 
            "id": "440100"
        }, 
        {
            "province": "广东省", 
            "name": "韶关市", 
            "id": "440200"
        }, 
        {
            "province": "广东省", 
            "name": "深圳市", 
            "id": "440300"
        }, 
        {
            "province": "广东省", 
            "name": "珠海市", 
            "id": "440400"
        }, 
        {
            "province": "广东省", 
            "name": "汕头市", 
            "id": "440500"
        }, 
        {
            "province": "广东省", 
            "name": "佛山市", 
            "id": "440600"
        }, 
        {
            "province": "广东省", 
            "name": "江门市", 
            "id": "440700"
        }, 
        {
            "province": "广东省", 
            "name": "湛江市", 
            "id": "440800"
        }, 
        {
            "province": "广东省", 
            "name": "茂名市", 
            "id": "440900"
        }, 
        {
            "province": "广东省", 
            "name": "肇庆市", 
            "id": "441200"
        }, 
        {
            "province": "广东省", 
            "name": "惠州市", 
            "id": "441300"
        }, 
        {
            "province": "广东省", 
            "name": "梅州市", 
            "id": "441400"
        }, 
        {
            "province": "广东省", 
            "name": "汕尾市", 
            "id": "441500"
        }, 
        {
            "province": "广东省", 
            "name": "河源市", 
            "id": "441600"
        }, 
        {
            "province": "广东省", 
            "name": "阳江市", 
            "id": "441700"
        }, 
        {
            "province": "广东省", 
            "name": "清远市", 
            "id": "441800"
        }, 
        {
            "province": "广东省", 
            "name": "东莞市", 
            "id": "441900"
        }, 
        {
            "province": "广东省", 
            "name": "中山市", 
            "id": "442000"
        }, 
        {
            "province": "广东省", 
            "name": "潮州市", 
            "id": "445100"
        }, 
        {
            "province": "广东省", 
            "name": "揭阳市", 
            "id": "445200"
        }, 
        {
            "province": "广东省", 
            "name": "云浮市", 
            "id": "445300"
        }
    ], 
    "450000": [
        {
            "province": "广西壮族自治区", 
            "name": "南宁市", 
            "id": "450100"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "柳州市", 
            "id": "450200"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "桂林市", 
            "id": "450300"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "梧州市", 
            "id": "450400"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "北海市", 
            "id": "450500"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "防城港市", 
            "id": "450600"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "钦州市", 
            "id": "450700"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "贵港市", 
            "id": "450800"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "玉林市", 
            "id": "450900"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "百色市", 
            "id": "451000"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "贺州市", 
            "id": "451100"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "河池市", 
            "id": "451200"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "来宾市", 
            "id": "451300"
        }, 
        {
            "province": "广西壮族自治区", 
            "name": "崇左市", 
            "id": "451400"
        }
    ], 
    "460000": [
        {
            "province": "海南省", 
            "name": "海口市", 
            "id": "460100"
        }, 
        {
            "province": "海南省", 
            "name": "三亚市", 
            "id": "460200"
        }, 
        {
            "province": "海南省", 
            "name": "三沙市", 
            "id": "460300"
        }, 
        {
            "province": "海南省", 
            "name": "儋州市", 
            "id": "460400"
        }, 
        {
            "province": "海南省", 
            "name": "省直辖县级行政区划", 
            "id": "469000"
        }
    ], 
    "500000": [
        {
            "province": "重庆市", 
            "name": "重庆市", 
            "id": "500100"
        }
    ], 
    "510000": [
        {
            "province": "四川省", 
            "name": "成都市", 
            "id": "510100"
        }, 
        {
            "province": "四川省", 
            "name": "自贡市", 
            "id": "510300"
        }, 
        {
            "province": "四川省", 
            "name": "攀枝花市", 
            "id": "510400"
        }, 
        {
            "province": "四川省", 
            "name": "泸州市", 
            "id": "510500"
        }, 
        {
            "province": "四川省", 
            "name": "德阳市", 
            "id": "510600"
        }, 
        {
            "province": "四川省", 
            "name": "绵阳市", 
            "id": "510700"
        }, 
        {
            "province": "四川省", 
            "name": "广元市", 
            "id": "510800"
        }, 
        {
            "province": "四川省", 
            "name": "遂宁市", 
            "id": "510900"
        }, 
        {
            "province": "四川省", 
            "name": "内江市", 
            "id": "511000"
        }, 
        {
            "province": "四川省", 
            "name": "乐山市", 
            "id": "511100"
        }, 
        {
            "province": "四川省", 
            "name": "南充市", 
            "id": "511300"
        }, 
        {
            "province": "四川省", 
            "name": "眉山市", 
            "id": "511400"
        }, 
        {
            "province": "四川省", 
            "name": "宜宾市", 
            "id": "511500"
        }, 
        {
            "province": "四川省", 
            "name": "广安市", 
            "id": "511600"
        }, 
        {
            "province": "四川省", 
            "name": "达州市", 
            "id": "511700"
        }, 
        {
            "province": "四川省", 
            "name": "雅安市", 
            "id": "511800"
        }, 
        {
            "province": "四川省", 
            "name": "巴中市", 
            "id": "511900"
        }, 
        {
            "province": "四川省", 
            "name": "资阳市", 
            "id": "512000"
        }, 
        {
            "province": "四川省", 
            "name": "阿坝藏族羌族自治州", 
            "id": "513200"
        }, 
        {
            "province": "四川省", 
            "name": "甘孜藏族自治州", 
            "id": "513300"
        }, 
        {
            "province": "四川省", 
            "name": "凉山彝族自治州", 
            "id": "513400"
        }
    ], 
    "520000": [
        {
            "province": "贵州省", 
            "name": "贵阳市", 
            "id": "520100"
        }, 
        {
            "province": "贵州省", 
            "name": "六盘水市", 
            "id": "520200"
        }, 
        {
            "province": "贵州省", 
            "name": "遵义市", 
            "id": "520300"
        }, 
        {
            "province": "贵州省", 
            "name": "安顺市", 
            "id": "520400"
        }, 
        {
            "province": "贵州省", 
            "name": "毕节市", 
            "id": "520500"
        }, 
        {
            "province": "贵州省", 
            "name": "铜仁市", 
            "id": "520600"
        }, 
        {
            "province": "贵州省", 
            "name": "黔西南布依族苗族自治州", 
            "id": "522300"
        }, 
        {
            "province": "贵州省", 
            "name": "黔东南苗族侗族自治州", 
            "id": "522600"
        }, 
        {
            "province": "贵州省", 
            "name": "黔南布依族苗族自治州", 
            "id": "522700"
        }
    ], 
    "530000": [
        {
            "province": "云南省", 
            "name": "昆明市", 
            "id": "530100"
        }, 
        {
            "province": "云南省", 
            "name": "曲靖市", 
            "id": "530300"
        }, 
        {
            "province": "云南省", 
            "name": "玉溪市", 
            "id": "530400"
        }, 
        {
            "province": "云南省", 
            "name": "保山市", 
            "id": "530500"
        }, 
        {
            "province": "云南省", 
            "name": "昭通市", 
            "id": "530600"
        }, 
        {
            "province": "云南省", 
            "name": "丽江市", 
            "id": "530700"
        }, 
        {
            "province": "云南省", 
            "name": "普洱市", 
            "id": "530800"
        }, 
        {
            "province": "云南省", 
            "name": "临沧市", 
            "id": "530900"
        }, 
        {
            "province": "云南省", 
            "name": "楚雄彝族自治州", 
            "id": "532300"
        }, 
        {
            "province": "云南省", 
            "name": "红河哈尼族彝族自治州", 
            "id": "532500"
        }, 
        {
            "province": "云南省", 
            "name": "文山壮族苗族自治州", 
            "id": "532600"
        }, 
        {
            "province": "云南省", 
            "name": "西双版纳傣族自治州", 
            "id": "532800"
        }, 
        {
            "province": "云南省", 
            "name": "大理白族自治州", 
            "id": "532900"
        }, 
        {
            "province": "云南省", 
            "name": "德宏傣族景颇族自治州", 
            "id": "533100"
        }, 
        {
            "province": "云南省", 
            "name": "怒江傈僳族自治州", 
            "id": "533300"
        }, 
        {
            "province": "云南省", 
            "name": "迪庆藏族自治州", 
            "id": "533400"
        }
    ], 
    "540000": [
        {
            "province": "西藏自治区", 
            "name": "拉萨市", 
            "id": "540100"
        }, 
        {
            "province": "西藏自治区", 
            "name": "日喀则市", 
            "id": "540200"
        }, 
        {
            "province": "西藏自治区", 
            "name": "昌都市", 
            "id": "540300"
        }, 
        {
            "province": "西藏自治区", 
            "name": "林芝市", 
            "id": "540400"
        }, 
        {
            "province": "西藏自治区", 
            "name": "山南市", 
            "id": "540500"
        }, 
        {
            "province": "西藏自治区", 
            "name": "那曲地区", 
            "id": "542400"
        }, 
        {
            "province": "西藏自治区", 
            "name": "阿里地区", 
            "id": "542500"
        }
    ], 
    "610000": [
        {
            "province": "陕西省", 
            "name": "西安市", 
            "id": "610100"
        }, 
        {
            "province": "陕西省", 
            "name": "铜川市", 
            "id": "610200"
        }, 
        {
            "province": "陕西省", 
            "name": "宝鸡市", 
            "id": "610300"
        }, 
        {
            "province": "陕西省", 
            "name": "咸阳市", 
            "id": "610400"
        }, 
        {
            "province": "陕西省", 
            "name": "渭南市", 
            "id": "610500"
        }, 
        {
            "province": "陕西省", 
            "name": "延安市", 
            "id": "610600"
        }, 
        {
            "province": "陕西省", 
            "name": "汉中市", 
            "id": "610700"
        }, 
        {
            "province": "陕西省", 
            "name": "榆林市", 
            "id": "610800"
        }, 
        {
            "province": "陕西省", 
            "name": "安康市", 
            "id": "610900"
        }, 
        {
            "province": "陕西省", 
            "name": "商洛市", 
            "id": "611000"
        }
    ], 
    "620000": [
        {
            "province": "甘肃省", 
            "name": "兰州市", 
            "id": "620100"
        }, 
        {
            "province": "甘肃省", 
            "name": "嘉峪关市", 
            "id": "620200"
        }, 
        {
            "province": "甘肃省", 
            "name": "金昌市", 
            "id": "620300"
        }, 
        {
            "province": "甘肃省", 
            "name": "白银市", 
            "id": "620400"
        }, 
        {
            "province": "甘肃省", 
            "name": "天水市", 
            "id": "620500"
        }, 
        {
            "province": "甘肃省", 
            "name": "武威市", 
            "id": "620600"
        }, 
        {
            "province": "甘肃省", 
            "name": "张掖市", 
            "id": "620700"
        }, 
        {
            "province": "甘肃省", 
            "name": "平凉市", 
            "id": "620800"
        }, 
        {
            "province": "甘肃省", 
            "name": "酒泉市", 
            "id": "620900"
        }, 
        {
            "province": "甘肃省", 
            "name": "庆阳市", 
            "id": "621000"
        }, 
        {
            "province": "甘肃省", 
            "name": "定西市", 
            "id": "621100"
        }, 
        {
            "province": "甘肃省", 
            "name": "陇南市", 
            "id": "621200"
        }, 
        {
            "province": "甘肃省", 
            "name": "临夏回族自治州", 
            "id": "622900"
        }, 
        {
            "province": "甘肃省", 
            "name": "甘南藏族自治州", 
            "id": "623000"
        }
    ], 
    "630000": [
        {
            "province": "青海省", 
            "name": "西宁市", 
            "id": "630100"
        }, 
        {
            "province": "青海省", 
            "name": "海东市", 
            "id": "630200"
        }, 
        {
            "province": "青海省", 
            "name": "海北藏族自治州", 
            "id": "632200"
        }, 
        {
            "province": "青海省", 
            "name": "黄南藏族自治州", 
            "id": "632300"
        }, 
        {
            "province": "青海省", 
            "name": "海南藏族自治州", 
            "id": "632500"
        }, 
        {
            "province": "青海省", 
            "name": "果洛藏族自治州", 
            "id": "632600"
        }, 
        {
            "province": "青海省", 
            "name": "玉树藏族自治州", 
            "id": "632700"
        }, 
        {
            "province": "青海省", 
            "name": "海西蒙古族藏族自治州", 
            "id": "632800"
        }
    ], 
    "640000": [
        {
            "province": "宁夏回族自治区", 
            "name": "银川市", 
            "id": "640100"
        }, 
        {
            "province": "宁夏回族自治区", 
            "name": "石嘴山市", 
            "id": "640200"
        }, 
        {
            "province": "宁夏回族自治区", 
            "name": "吴忠市", 
            "id": "640300"
        }, 
        {
            "province": "宁夏回族自治区", 
            "name": "固原市", 
            "id": "640400"
        }, 
        {
            "province": "宁夏回族自治区", 
            "name": "中卫市", 
            "id": "640500"
        }
    ], 
    "650000": [
        {
            "province": "新疆维吾尔自治区", 
            "name": "乌鲁木齐市", 
            "id": "650100"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "克拉玛依市", 
            "id": "650200"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "吐鲁番市", 
            "id": "650400"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "哈密市", 
            "id": "650500"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "昌吉回族自治州", 
            "id": "652300"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "博尔塔拉蒙古自治州", 
            "id": "652700"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "巴音郭楞蒙古自治州", 
            "id": "652800"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "阿克苏地区", 
            "id": "652900"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "克孜勒苏柯尔克孜自治州", 
            "id": "653000"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "喀什地区", 
            "id": "653100"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "和田地区", 
            "id": "653200"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "伊犁哈萨克自治州", 
            "id": "654000"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "塔城地区", 
            "id": "654200"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "阿勒泰地区", 
            "id": "654300"
        }, 
        {
            "province": "新疆维吾尔自治区", 
            "name": "自治区直辖县级行政区划", 
            "id": "659000"
        }
    ]
}
