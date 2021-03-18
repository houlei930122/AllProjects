var dealersArr = [
{"shopname":"北京福瑞林肯中心","code":"18010","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"北京奥吉通林肯中心","code":"18020","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"北京中庆林达林肯中心","code":"18030","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"北京中庆之林林肯中心","code":"18040","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"北京奥吉通盛霖林肯中心","code":"18050","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"北京运通林肯旗舰店 ","code":"18060","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"北京福瑞北苑林肯中心","code":"18070","province":"北京市","province_code":"900010","city":"北京市","city_code":"9001"},
{"shopname":"淄博嘉骋林肯中心","code":"18100","province":"山东省","province_code":"900120","city":"淄博市","city_code":"9179"},
{"shopname":"济宁嘉骋林肯中心","code":"18101","province":"山东省","province_code":"900120","city":"济宁市","city_code":"9184"},
{"shopname":"威海星耀林肯中心","code":"18102","province":"山东省","province_code":"900120","city":"威海市","city_code":"9185"},
{"shopname":"青岛富星林肯中心","code":"18110","province":"山东省","province_code":"900120","city":"青岛市","city_code":"9178"},
{"shopname":"潍坊顺骋林肯中心","code":"18120","province":"山东省","province_code":"900120","city":"潍坊市","city_code":"9181"},
{"shopname":"山东嘉骋林肯中心","code":"18130","province":"山东省","province_code":"900120","city":"济南市","city_code":"9177"},
{"shopname":"临沂富星林肯中心","code":"18140","province":"山东省","province_code":"900120","city":"临沂市","city_code":"9190"},
{"shopname":"烟台君通富星林肯中心","code":"18150","province":"山东省","province_code":"900120","city":"烟台市","city_code":"9183"},
{"shopname":"青岛星越林肯中心","code":"18160","province":"山东省","province_code":"900120","city":"青岛市","city_code":"9178"},
{"shopname":"山东世纪嘉骋林肯中心 ","code":"18170","province":"山东省","province_code":"900120","city":"济南市","city_code":"9177"},
{"shopname":"石家庄奥吉通林肯中心","code":"18210","province":"河北省","province_code":"900060","city":"石家庄市","city_code":"9025"},
{"shopname":"保定轩宇林肯中心","code":"18220","province":"河北省","province_code":"900060","city":"保定市","city_code":"9028"},
{"shopname":"唐山中庆林达林肯中心","code":"18230","province":"河北省","province_code":"900060","city":"唐山市","city_code":"9031"},
{"shopname":"邯郸太岳林肯中心","code":"18240","province":"河北省","province_code":"900060","city":"邯郸市","city_code":"9026"},
{"shopname":"沈阳金廊林肯中心","code":"18310","province":"辽宁省","province_code":"900070","city":"沈阳市","city_code":"9071"},
{"shopname":"大连金廊林肯中心","code":"18320","province":"辽宁省","province_code":"900070","city":"大连市","city_code":"9072"},
{"shopname":"沈阳沈东金廊林肯中心","code":"18330","province":"辽宁省","province_code":"900070","city":"沈阳市","city_code":"9071"},
{"shopname":"天津德润林肯中心","code":"18410","province":"天津市","province_code":"900030","city":"天津市","city_code":"9004"},
{"shopname":"天津德力林肯中心","code":"18420","province":"天津市","province_code":"900030","city":"天津市","city_code":"9004"},
{"shopname":"南阳奥吉通林肯中心","code":"18500","province":"河南省","province_code":"900180","city":"南阳市","city_code":"9206"},
{"shopname":"郑州奥吉通林肯中心","code":"18510","province":"河南省","province_code":"900180","city":"郑州市","city_code":"9194"},
{"shopname":"洛阳奥吉通林肯中心","code":"18520","province":"河南省","province_code":"900180","city":"洛阳市","city_code":"9196"},
{"shopname":"郑州奥吉通盛霖林肯中心","code":"18530","province":"河南省","province_code":"900180","city":"郑州市","city_code":"9194"},
{"shopname":"商丘和谐铭骏林肯中心","code":"18540","province":"河南省","province_code":"900180","city":"商丘市","city_code":"9207"},
{"shopname":"新乡和谐新骏林肯中心","code":"18550","province":"河南省","province_code":"900180","city":"新乡市","city_code":"9200"},
{"shopname":"太原华瑞富星林肯中心","code":"18610","province":"山西省","province_code":"900050","city":"太原市","city_code":"9036"},
{"shopname":"延吉陆驰林肯中心","code":"18700","province":"吉林省","province_code":"900080","city":"延吉市","city_code":"9093"},
{"shopname":"吉林陆驰林肯中心","code":"18710","province":"吉林省","province_code":"900080","city":"吉林市","city_code":"9086"},
{"shopname":"长春奥吉通林肯中心","code":"18720","province":"吉林省","province_code":"900080","city":"长春市","city_code":"9085"},
{"shopname":"大庆龙林林肯中心","code":"18800","province":"黑龙江省","province_code":"900090","city":"大庆市","city_code":"9099"},
{"shopname":"哈尔滨天拓林肯中心","code":"18810","province":"黑龙江省","province_code":"900090","city":"哈尔滨市","city_code":"9094"},
{"shopname":"呼和浩特中庆林达林肯中心","code":"18910","province":"内蒙古自治区","province_code":"900040","city":"呼和浩特市","city_code":"9053"},
{"shopname":"上海永达林肯中心","code":"28010","province":"上海市","province_code":"900020","city":"上海市","city_code":"9002"},
{"shopname":"上海永达德之林林肯中心","code":"28020","province":"上海市","province_code":"900020","city":"上海市","city_code":"9002"},
{"shopname":"上海宝利德松江林肯中心","code":"28030","province":"上海市","province_code":"900020","city":"上海市","city_code":"9002"},
{"shopname":"上海永达浦西林肯中心","code":"28040","province":"上海市","province_code":"900020","city":"上海市","city_code":"9002"},
{"shopname":"上海绿地林肯中心","code":"28050","province":"上海市","province_code":"900020","city":"上海市","city_code":"9002"},
{"shopname":"上海永达林肯旗舰店","code":"28060","province":"上海市","province_code":"900020","city":"上海市","city_code":"9002"},
{"shopname":"慈溪永达林肯中心","code":"28102","province":"浙江省","province_code":"900130","city":"慈溪市","city_code":"9121"},
{"shopname":"杭州元通林肯中心","code":"28110","province":"浙江省","province_code":"900130","city":"杭州市","city_code":"9120"},
{"shopname":"台州绿地林肯中心","code":"28111","province":"浙江省","province_code":"900130","city":"台州市","city_code":"9129"},
{"shopname":"衢州林通林肯中心","code":"28112","province":"浙江省","province_code":"900130","city":"衢州市","city_code":"9127"},
{"shopname":"宁波粤宝林肯中心","code":"28113","province":"浙江省","province_code":"900130","city":"宁波市","city_code":"9121"},
{"shopname":"浙江万恒林肯中心","code":"28120","province":"浙江省","province_code":"900130","city":"杭州市","city_code":"9120"},
{"shopname":"嘉兴万林林肯中心","code":"28130","province":"浙江省","province_code":"900130","city":"嘉兴市","city_code":"9123"},
{"shopname":"宁波永达林肯中心","code":"28140","province":"浙江省","province_code":"900130","city":"宁波市","city_code":"9121"},
{"shopname":"绍兴宝利德林肯中心","code":"28150","province":"浙江省","province_code":"900130","city":"绍兴市","city_code":"9125"},
{"shopname":"湖州万林林肯中心","code":"28160","province":"浙江省","province_code":"900130","city":"湖州市","city_code":"9124"},
{"shopname":"浙江万友林肯中心","code":"28170","province":"浙江省","province_code":"900130","city":"杭州市","city_code":"9120"},
{"shopname":"义乌盈通林肯中心","code":"28180","province":"浙江省","province_code":"900130","city":"金华市","city_code":"9126"},
{"shopname":"温州元通美腾林肯中心","code":"28190","province":"浙江省","province_code":"900130","city":"温州市","city_code":"9122"},
{"shopname":"昆山明都林肯中心","code":"28200","province":"江苏省","province_code":"900100","city":"昆山市","city_code":"9117"},
{"shopname":"盐城森风林肯中心","code":"28202","province":"江苏省","province_code":"900100","city":"盐城市","city_code":"9112"},
{"shopname":"江阴永达林肯中心","code":"28203","province":"江苏省","province_code":"900100","city":"江阴市","city_code":"9108"},
{"shopname":"苏州明都林肯中心","code":"28210","province":"江苏省","province_code":"900100","city":"苏州市","city_code":"9117"},
{"shopname":"常熟伟杰林肯中心","code":"28211","province":"江苏省","province_code":"900100","city":"常熟市","city_code":"9117"},
{"shopname":"苏州华成林肯中心","code":"28213","province":"江苏省","province_code":"900100","city":"苏州市","city_code":"9117"},
{"shopname":"南通港闸肯特林肯中心","code":"28214","province":"江苏省","province_code":"900100","city":"南通市","city_code":"9110"},
{"shopname":"淮安宏宇天旭达林肯中心","code":"28215","province":"江苏省","province_code":"900100","city":"淮安市","city_code":"9114"},
{"shopname":"苏州运通林肯中心","code":"28216","province":"江苏省","province_code":"900100","city":"苏州市","city_code":"9117"},
{"shopname":"常州钟楼林肯中心","code":"28217","province":"江苏省","province_code":"900100","city":"常州市","city_code":"9116"},
{"shopname":"徐州德诚林肯中心","code":"28218","province":"江苏省","province_code":"900100","city":"徐州市","city_code":"9113"},
{"shopname":"南京冠松林肯中心","code":"28219","province":"江苏省","province_code":"900100","city":"南京市","city_code":"9107"},
{"shopname":"泰州天旭达林肯中心","code":"28220","province":"江苏省","province_code":"900100","city":"泰州市","city_code":"9118"},
{"shopname":"无锡粤宝林肯中心","code":"28221","province":"江苏省","province_code":"900100","city":"无锡市","city_code":"9108"},
{"shopname":"苏州华得林肯中心","code":"28222","province":"江苏省","province_code":"900100","city":"苏州市","city_code":"9117"},
{"shopname":"南京森风林肯中心","code":"28230","province":"江苏省","province_code":"900100","city":"南京市","city_code":"9107"},
{"shopname":"南通明都林肯中心","code":"28240","province":"江苏省","province_code":"900100","city":"南通市","city_code":"9110"},
{"shopname":"无锡永达林肯中心","code":"28250","province":"江苏省","province_code":"900100","city":"无锡市","city_code":"9108"},
{"shopname":"常州明都林肯中心","code":"28260","province":"江苏省","province_code":"900100","city":"常州市","city_code":"9116"},
{"shopname":"镇江金福联林肯中心","code":"28270","province":"江苏省","province_code":"900100","city":"镇江市","city_code":"9109"},
{"shopname":"南京金福联林肯中心","code":"28280","province":"江苏省","province_code":"900100","city":"南京市","city_code":"9107"},
{"shopname":"扬州天旭达林肯中心","code":"28290","province":"江苏省","province_code":"900100","city":"扬州市","city_code":"9111"},
{"shopname":"阜阳海康达林肯中心","code":"28300","province":"安徽省","province_code":"900110","city":"阜阳市","city_code":"9142"},
{"shopname":"六安建银林肯中心","code":"28301","province":"安徽省","province_code":"900110","city":"六安市","city_code":"9146"},
{"shopname":"合肥海康达林肯中心","code":"28310","province":"安徽省","province_code":"900110","city":"合肥市","city_code":"9132"},
{"shopname":"芜湖宝利德林肯中心","code":"28320","province":"安徽省","province_code":"900110","city":"芜湖市","city_code":"9135"},
{"shopname":"合肥建银林肯中心","code":"28330","province":"安徽省","province_code":"900110","city":"合肥市","city_code":"9132"},
{"shopname":"广东鸿粤林肯中心","code":"38010","province":"广东省","province_code":"900190","city":"广州市","city_code":"9246"},
{"shopname":"江门粤宝林肯中心","code":"38011","province":"广东省","province_code":"900190","city":"江门市","city_code":"9258"},
{"shopname":"惠州标特林肯中心","code":"38012","province":"广东省","province_code":"900190","city":"惠州市","city_code":"9254"},
{"shopname":"珠海力天林肯中心","code":"38013","province":"广东省","province_code":"900190","city":"珠海市","city_code":"9248"},
{"shopname":"佛山鸿粤林肯中心","code":"38020","province":"广东省","province_code":"900190","city":"佛山市","city_code":"9259"},
{"shopname":"深圳标特林肯中心","code":"38030","province":"广东省","province_code":"900190","city":"深圳市","city_code":"9247"},
{"shopname":"东莞鸿粤林肯中心","code":"38050","province":"广东省","province_code":"900190","city":"东莞市","city_code":"9256"},
{"shopname":"中山力天林肯中心","code":"38060","province":"广东省","province_code":"900190","city":"中山市","city_code":"9257"},
{"shopname":"汕头中合林达林肯中心","code":"38070","province":"广东省","province_code":"900190","city":"汕头市","city_code":"9250"},
{"shopname":"广州鸿粤林肯中心","code":"38080","province":"广东省","province_code":"900190","city":"广州市","city_code":"9246"},
{"shopname":"深圳标鸿林肯中心","code":"38090","province":"广东省","province_code":"900190","city":"深圳市","city_code":"9247"},
{"shopname":"宜昌建银林肯中心","code":"38100","province":"湖北省","province_code":"900170","city":"宜昌市","city_code":"9218"},
{"shopname":"武汉建银林肯中心","code":"38110","province":"湖北省","province_code":"900170","city":"武汉市","city_code":"9213"},
{"shopname":"襄阳建银林肯中心","code":"38120","province":"湖北省","province_code":"900170","city":"襄阳市","city_code":"9215"},
{"shopname":"武汉建银天翔林肯中心","code":"38130","province":"湖北省","province_code":"900170","city":"武汉市","city_code":"9213"},
{"shopname":"武汉和谐和骏林肯中心","code":"38140","province":"湖北省","province_code":"900170","city":"武汉市","city_code":"9213"},
{"shopname":"衡阳力天林肯中心","code":"38200","province":"湖南省","province_code":"900160","city":"衡阳市","city_code":"9233"},
{"shopname":"常德力天林肯中心","code":"38201","province":"湖南省","province_code":"900160","city":"常德市","city_code":"9236"},
{"shopname":"湖南力天林肯中心","code":"38210","province":"湖南省","province_code":"900160","city":"长沙市","city_code":"9230"},
{"shopname":"湖南力天中南林肯中心","code":"38220","province":"湖南省","province_code":"900160","city":"长沙市","city_code":"9230"},
{"shopname":"莆田福瑞宝林肯中心","code":"38300","province":"福建省","province_code":"900150","city":"莆田市","city_code":"9153"},
{"shopname":"龙岩瑞星福瑞林肯中心","code":"38301","province":"福建省","province_code":"900150","city":"龙岩市","city_code":"9157"},
{"shopname":"厦门建发林肯中心","code":"38310","province":"福建省","province_code":"900150","city":"厦门市","city_code":"9151"},
{"shopname":"泉州建发林肯中心","code":"38320","province":"福建省","province_code":"900150","city":"泉州市","city_code":"9154"},
{"shopname":"福州福瑞林肯中心","code":"38330","province":"福建省","province_code":"900150","city":"福州市","city_code":"9150"},
{"shopname":"桂林锦联林肯中心","code":"38400","province":"广西壮族自治区","province_code":"900210","city":"桂林市","city_code":"9270"},
{"shopname":"广西白马恒骓林肯中心","code":"38410","province":"广西壮族自治区","province_code":"900210","city":"南宁市","city_code":"9268"},
{"shopname":"赣州儒林林肯中心","code":"38500","province":"江西省","province_code":"900140","city":"赣州市","city_code":"9165"},
{"shopname":"上饶儒林林肯中心","code":"38501","province":"江西省","province_code":"900140","city":"上饶市","city_code":"9167"},
{"shopname":"南昌儒林林肯中心","code":"38510","province":"江西省","province_code":"900140","city":"南昌市","city_code":"9159"},
{"shopname":"海南力天林肯中心","code":"38610","province":"海南省","province_code":"900200","city":"海口市","city_code":"9006"},
{"shopname":"南充瑞星川物林肯中心","code":"58000","province":"四川省","province_code":"900230","city":"南充市","city_code":"9292"},
{"shopname":"乐山川物林肯中心","code":"58001","province":"四川省","province_code":"900230","city":"乐山市","city_code":"9291"},
{"shopname":"绵阳瑞星林肯中心","code":"58002","province":"四川省","province_code":"900230","city":"绵阳市","city_code":"9287"},
{"shopname":"德阳瑞星林肯中心","code":"58003","province":"四川省","province_code":"900230","city":"德阳市","city_code":"9286"},
{"shopname":"成都川物美林林肯中心","code":"58010","province":"四川省","province_code":"900230","city":"成都市","city_code":"9282"},
{"shopname":"成都瑞星林肯中心","code":"58020","province":"四川省","province_code":"900230","city":"成都市","city_code":"9282"},
{"shopname":"重庆中庆之林林肯中心","code":"58030","province":"重庆市","province_code":"900320","city":"重庆市","city_code":"9005"},
{"shopname":"泸州环塔新元素林肯中心","code":"58040","province":"四川省","province_code":"900230","city":"泸州市","city_code":"9285"},
{"shopname":"西安豪林林肯中心","code":"58110","province":"陕西省","province_code":"900250","city":"西安市","city_code":"9337"},
{"shopname":"榆林星悦汇林肯中心","code":"58120","province":"陕西省","province_code":"900250","city":"榆林市","city_code":"9344"},
{"shopname":"西安福林林肯中心","code":"58130","province":"陕西省","province_code":"900250","city":"西安市","city_code":"9337"},
{"shopname":"贵州瀚羿睿程林肯中心","code":"58210","province":"贵州省","province_code":"900220","city":"贵阳市","city_code":"9305"},
{"shopname":"遵义龙星林肯中心","code":"58230","province":"贵州省","province_code":"900220","city":"遵义市","city_code":"9307"},
{"shopname":"乌鲁木齐华昌林肯中心","code":"58310","province":"新疆维吾尔自治区","province_code":"900290","city":"乌鲁木齐市","city_code":"9375"},
{"shopname":"昆明奥吉通林肯中心","code":"58410","province":"云南省","province_code":"900240","city":"昆明市","city_code":"9314"},
{"shopname":"昆明奥通盛霖林肯中心","code":"58420","province":"云南省","province_code":"900240","city":"昆明市","city_code":"9314"},
{"shopname":"重庆德佳林林肯中心","code":"58510","province":"重庆市","province_code":"900320","city":"重庆市","city_code":"9005"},
{"shopname":"宁夏天汇林肯中心","code":"58610","province":"宁夏回族自治区","province_code":"900270","city":"银川市","city_code":"9369"},
{"shopname":"兰州佳和美悦林肯中心","code":"58710","province":"甘肃省","province_code":"900260","city":"兰州市","city_code":"9347"},
{"shopname":"西宁天汇翼林林肯中心","code":"58810","province":"青海省","province_code":"900280","city":"西宁市","city_code":"9361"},
{"shopname":"广州粤宝林肯中心","code":"38014","province":"广东省","province_code":"900190","city":"广州市","city_code":"9246"},
{"shopname":"郑州和谐郑骏林肯中心","code":"18560","province":"河南省","province_code":"900180","city":"郑州市","city_code":"9194"},
{"shopname":"成都奥吉通林肯中心","code":"58060","province":"四川省","province_code":"900230","city":"成都市","city_code":"9282"},
{"shopname":"南宁粤宝林肯中心","code":"38420","province":"广西壮族自治区","province_code":"900210","city":"南宁市","city_code":"9268"}
]
var provinceSelect = $('.province'),
	citySelect = $('.city'),
	dealerSelect = $('.dealer');

function unique5(array) {
	var r = [];
	for(var i = 0, l = array.length; i < l; i++) {
		for(var j = i + 1; j < l; j++) {
			if(array[i] === array[j]) {
				j = ++i;
			}
		}
		r.push(array[i]);
	}
	return r;
}

var provinceArr = [],
	cityArr = [],
	dealerArr = [];
for(var i = dealersArr.length - 1; i >= 0; i--) {
	provinceArr.push(dealersArr[i].province);
};

var provinceFinal = unique5(provinceArr);

for(var i = provinceFinal.length - 1; i >= 0; i--) {
	provinceSelect.append('<option>' + provinceFinal[i] + '</option>')
};

provinceSelect.on('change', function() {
	var $this = $(this);
	var pVal = $this.val();
	cityArr = [];
	dealerArr = [];
	citySelect.empty().append('<option selected="selected" disabled="disabled" value="">请选择市/区</option>');
	dealerSelect.empty().append('<option selected="selected" disabled="disabled" value="">请选择经销商</option>');
	for(var i = dealersArr.length - 1; i >= 0; i--) {
		if(dealersArr[i].province == pVal) {
			cityArr.push(dealersArr[i].city);
		}
	};
	var cityFinal = unique5(cityArr);
	for(var i = cityFinal.length - 1; i >= 0; i--) {
		citySelect.append('<option>' + cityFinal[i] + '</option>');
	};
})
citySelect.on('change', function() {
	var $this = $(this);
	var cVal = $this.val();
	dealerArr = [];
	dealerSelect.empty().append('<option selected="selected" disabled="disabled" value="">请选择经销商</option>');
	for(var i = dealersArr.length - 1; i >= 0; i--) {
		if(dealersArr[i].city == cVal) {
			dealerArr.push(dealersArr[i].shopname);
		}
	};
	for(var i = dealerArr.length - 1; i >= 0; i--) {
		dealerSelect.append('<option>' + dealerArr[i] + '</option>')
	};
})












