
// date test
// var data4Table = JSON.parse('[{"date":"08/10/2018","type":"INVOICE","amount":"Rs 404.00","balance":"Rs 717,000.00","payment_method":" "},{"date":"08/11/2018","type":"INVOICE","amount":"Rs 327.00","balance":"Rs 1,044,000.00","payment_method":" "},{"date":"14/01/2019","type":"INVOICE","amount":"Rs 0.00","balance":"Rs 1,402,000.00","payment_method":" "},{"date":"14/12/2018","type":"INVOICE","amount":"Rs 58.00","balance":"Rs 1,402,000.00","payment_method":" "},{"date":"08/02/2019","type":"INVOICE","amount":"Rs 0.00","balance":"Rs 1,402,000.00","payment_method":" "},{"date":"08/09/2018","type":"INVOICE","amount":"Rs 170.00","balance":"Rs 313,000.00","payment_method":" "},{"date":"26/08/2018","type":"INVOICE","amount":"Rs 143.00","balance":"Rs 143,000.00","payment_method":" "},{"date":"08/12/2018","type":"INVOICE","amount":"Rs 300.00","balance":"Rs 1,344,000.00","payment_method":" "}]');

var data4Table = JSON.parse('[{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051326","msisdn":"03080051326","outstanding_amount":"Rs. 0","credit_limit":"1000","date":"08/10/2018","package":"Tracker Service","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051355","msisdn":"03080051355","outstanding_amount":"Rs. 250","credit_limit":"1500","date":"08/10/2018","package":"ES Standard","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051325","msisdn":"03080051325","outstanding_amount":"Rs. 0","credit_limit":"1500","date":"08/11/2014","package":"Control - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03080051332","msisdn":"03080051332","outstanding_amount":"Rs. 578","credit_limit":"1000","date":"14/01/2019","package":"M-100","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051323","msisdn":"03080051323","outstanding_amount":"Rs. 0","credit_limit":"1000","date":"14/12/2013","package":"Pro - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"BLOCKED_Blocked By User","user_info":"BSD-MARKETING . 03080051358","msisdn":"03080051358","outstanding_amount":"Rs. 300","credit_limit":"1500","date":"08/02/2019","package":"Executive RED","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051356","msisdn":"03080051356","outstanding_amount":"Rs. 0","credit_limit":"1500","date":"08/09/2018","package":"ES Standard","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051327","msisdn":"03080051327","outstanding_amount":"Rs. 0","credit_limit":"1502","date":"26/08/2011","package":"Tracker Service","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051324","msisdn":"03080051324","outstanding_amount":"Rs. -5","credit_limit":"1000","date":"08/12/2018","package":"Control - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"ACTIVE","user_info":"SAMI ULLAH KHAN . 03080051322","msisdn":"03080051322","outstanding_amount":"Rs. 96","credit_limit":"1000","date":"08/10/2010","package":"Pro - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"SAMI ULLAH KHAN .","groupName":"Credit Note (-37)"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051354","msisdn":"03080051354","outstanding_amount":"Rs. 573","credit_limit":"1000","date":"08/11/2018","package":"M-400","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03080051328","msisdn":"03080051328","outstanding_amount":"Rs. 1402","credit_limit":"1000","date":"14/01/2019","package":"J-300","credit_status":"Credit Limit Exceeded","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051357","msisdn":"03080051357","outstanding_amount":"Rs. 3500","credit_limit":"1500","date":"14/12/2015","package":"ES Standard","credit_status":"Credit Limit Exceeded","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03070981976","msisdn":"03070981976","outstanding_amount":"Rs. 0","credit_limit":"1000","date":"08/02/2019","package":"Pro - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03080051359","msisdn":"03080051359","outstanding_amount":"Rs. 40","credit_limit":"1500","date":"08/09/2016","package":"BIZ 400","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"}]');

var data4Table2 = JSON.parse('[{"Sr":121,"Name":"Tiger Nixon ( ! ? 123 .[", "Position":"System Architect", "Status":"ACTIVE_this is comment", "Groups":"Technical Department", "Office":"Edinburgh", "Age":60,"Start date":"25/04/2011", "Date Time":"25/04/2012 16:28:49", "Salary":"$320800"}, {"Sr":2,"Name":"Garrett Winters", "Position":"Accountant", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"Tokyo", "Age":63,"Start date":"25/07/2011", "Date Time":"25/04/2012 08:52:36", "Salary":"$170750"}, {"Sr":3,"Name":"Ashton Cox", "Position":"Junior Technical Author", "Status":"Pending", "Groups":"Technical Department", "Office":"San Francisco", "Age":66,"Start date":"12/01/2009", "Date Time":"25/04/2012 08:03:38", "Salary":"$86000"}, {"Sr":4,"Name":"Cedric Kelly", "Position":"Senior Javascript Developer", "Status":"SUSPENDED_Rejected By Manager", "Groups":"All Managers of ISB Office", "Office":"Edinburgh", "Age":22,"Start date":"29/03/2012", "Date Time":"25/04/2012 23:09:38", "Salary":"$433060"}, {"Sr":5,"Name":"Airi Satou", "Position":"Accountant", "Status":"Before-pending_this is msg", "Groups":"Technical Department", "Office":"Tokyo", "Age":33,"Start date":"28/11/2008", "Date Time":"25/04/2012 04:15:09", "Salary":"$162700"}, {"Sr":6,"Name":"Brielle Williamson", "Position":"Integration Specialist", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"New York", "Age":60,"Start date":"02/12/2012", "Date Time":"02/12/2017 10:30:11", "Salary":"$372000"}, {"Sr":7,"Name":"Herrod Chandler", "Position":"Sales Assistant", "Status":"Pending", "Groups":"Technical Department", "Office":"San Francisco", "Age":59,"Start date":"06/08/2012", "Date Time":"06/08/2017 14:42:30", "Salary":"$137500"}, {"Sr":8,"Name":"Rhona Davidson", "Position":"Integration Specialist", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"Tokyo", "Age":55,"Start date":"14/10/2010", "Date Time":"14/10/2015 18:03:10", "Salary":"$327900"}, {"Sr":9,"Name":"Colleen Hurst", "Position":"Javascript Developer", "Status":"Pending", "Groups":"Technical Department", "Office":"San Francisco", "Age":39,"Start date":"15/09/2009", "Date Time":"15/09/2014 20:04:36", "Salary":"$205500"}, {"Sr":10,"Name":"Sonya Frost", "Position":"Software Engineer", "Status":"Pending", "Groups":"Technical Department", "Office":"Edinburgh", "Age":23,"Start date":"13/12/2008", "Date Time":"13/12/2013 16:48:16", "Salary":"$103600"}, {"Sr":11,"Name":"Jena Gaines", "Position":"Office Manager", "Status":"Blocked", "Groups":"Technical Department", "Office":"London", "Age":30,"Start date":"19/12/2008", "Date Time":"19/12/2013 07:28:35", "Salary":"$90560"}, {"Sr":12,"Name":"Quinn Flynn", "Position":"Support Lead", "Status":"Blocked", "Groups":"Admin Workers", "Office":"Edinburgh", "Age":22,"Start date":"03/03/2013", "Date Time":"03/03/2018 12:58:47", "Salary":"$342000"}, {"Sr":13,"Name":"Charde Marshall", "Position":"Regional Director", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":36,"Start date":"16/10/2008", "Date Time":"16/10/2013 02:24:55", "Salary":"$470600"}, {"Sr":14,"Name":"Haley Kennedy", "Position":"Senior Marketing Designer", "Status":"Active", "Groups":"Admin Workers", "Office":"London", "Age":43,"Start date":"18/12/2012", "Date Time":"18/12/2017 09:15:12", "Salary":"$313500"}, {"Sr":15,"Name":"Tatyana Fitzpatrick", "Position":"Regional Director", "Status":"Active", "Groups":"Technical Department", "Office":"London", "Age":19,"Start date":"17/03/2010", "Date Time":"17/03/2015 09:32:58", "Salary":"$385750"}, {"Sr":16,"Name":"Michael Silva", "Position":"Marketing Designer", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"London", "Age":66,"Start date":"27/11/2012", "Date Time":"27/11/2017 23:20:18", "Salary":"$198500"}, {"Sr":17,"Name":"Paul Byrd", "Position":"Chief Financial Officer (CFO)", "Status":"Active", "Groups":"Technical Department", "Office":"New York", "Age":64,"Start date":"09/06/2010", "Date Time":"09/06/2015 01:47:10", "Salary":"$725000"}, {"Sr":18,"Name":"Gloria Little", "Position":"Systems Administrator", "Status":"Blocked", "Groups":"Technical Department", "Office":"New York", "Age":59,"Start date":"10/04/2009", "Date Time":"10/04/2014 22:15:09", "Salary":"$237500"}, {"Sr":19,"Name":"Bradley Greer", "Position":"Software Engineer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"London", "Age":41,"Start date":"13/10/2012", "Date Time":"13/10/2017 05:39:09", "Salary":"$132000"}, {"Sr":20,"Name":"Dai Rios", "Position":"Personnel Lead", "Status":"Blocked", "Groups":"Technical Department", "Office":"Edinburgh", "Age":35,"Start date":"26/09/2012", "Date Time":"26/09/2017 06:45:52", "Salary":"$217500"}, {"Sr":21,"Name":"Jenette Caldwell", "Position":"Development Lead", "Status":"Pending", "Groups":"Technical Department", "Office":"New York", "Age":30,"Start date":"03/09/2011", "Date Time":"03/09/2016 08:52:37", "Salary":"$345000"}, {"Sr":22,"Name":"Yuri Berry", "Position":"Chief Marketing Officer (CMO)", "Status":"Pending", "Groups":"Technical Department", "Office":"New York", "Age":40,"Start date":"25/06/2009", "Date Time":"25/06/2014 08:40:59", "Salary":"$675000"}, {"Sr":23,"Name":"Caesar Vance", "Position":"Pre-Sales Support", "Status":"Active", "Groups":"Admin Workers", "Office":"New York", "Age":21,"Start date":"12/12/2011", "Date Time":"12/12/2016 20:47:39", "Salary":"$106450"}, {"Sr":24,"Name":"Doris Wilder", "Position":"Sales Assistant", "Status":"Active", "Groups":"Admin Workers", "Office":"Sidney", "Age":23,"Start date":"20/09/2010", "Date Time":"20/09/2015 07:38:40", "Salary":"$85600"}, {"Sr":25,"Name":"Angelica Ramos", "Position":"Chief Executive Officer (CEO)", "Status":"Blocked", "Groups":"Admin Workers", "Office":"London", "Age":47,"Start date":"09/10/2009", "Date Time":"09/10/2014 13:18:58", "Salary":"$1200000"}, {"Sr":26,"Name":"Gavin Joyce", "Position":"Developer", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"Edinburgh", "Age":42,"Start date":"22/12/2010", "Date Time":"22/12/2015 09:02:50", "Salary":"$92575"}, {"Sr":27,"Name":"Jennifer Chang", "Position":"Regional Director", "Status":"Active", "Groups":"Technical Department", "Office":"Singapore", "Age":28,"Start date":"14/11/2010", "Date Time":"14/11/2015 02:45:42", "Salary":"$357650"}, {"Sr":28,"Name":"Brenden Wagner", "Position":"Software Engineer", "Status":"Active", "Groups":"Marketing Department", "Office":"San Francisco", "Age":28,"Start date":"07/06/2011", "Date Time":"07/06/2016 10:40:34", "Salary":"$206850"}, {"Sr":29,"Name":"Fiona Green", "Position":"Chief Operating Officer (COO)", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":48,"Start date":"11/03/2010", "Date Time":"11/03/2015 17:59:52", "Salary":"$850000"}, {"Sr":30,"Name":"Shou Itou", "Position":"Regional Marketing", "Status":"Pending", "Groups":"Marketing Department", "Office":"Tokyo", "Age":20,"Start date":"14/08/2011", "Date Time":"14/08/2016 16:14:33", "Salary":"$163000"}, {"Sr":31,"Name":"Michelle House", "Position":"Integration Specialist", "Status":"Blocked", "Groups":"Admin Workers", "Office":"Sidney", "Age":37,"Start date":"02/06/2011", "Date Time":"02/06/2016 16:51:45", "Salary":"$95400"}, {"Sr":32,"Name":"Suki Burks", "Position":"Developer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"London", "Age":53,"Start date":"22/10/2009", "Date Time":"22/10/2014 03:06:32", "Salary":"$114500"}, {"Sr":33,"Name":"Prescott Bartlett", "Position":"Technical Author", "Status":"Pending", "Groups":"Marketing Department", "Office":"London", "Age":27,"Start date":"07/05/2011", "Date Time":"07/05/2016 20:47:26", "Salary":"$145000"}, {"Sr":34,"Name":"Gavin Cortez", "Position":"Team Leader", "Status":"Active", "Groups":"Admin Workers", "Office":"San Francisco", "Age":22,"Start date":"26/10/2008", "Date Time":"26/10/2013 08:38:43", "Salary":"$235500"}, {"Sr":35,"Name":"Martena Mccray", "Position":"Post-Sales support", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Edinburgh", "Age":46,"Start date":"09/03/2011", "Date Time":"09/03/2016 06:14:02", "Salary":"$324050"}, {"Sr":36,"Name":"Unity Butler", "Position":"Marketing Designer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"San Francisco", "Age":47,"Start date":"09/12/2009", "Date Time":"09/12/2014 08:50:02", "Salary":"$85675"}, {"Sr":37,"Name":"Howard Hatfield", "Position":"Office Manager", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":51,"Start date":"16/12/2008", "Date Time":"16/12/2013 04:35:09", "Salary":"$164500"}, {"Sr":38,"Name":"Hope Fuentes", "Position":"Secretary", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":41,"Start date":"12/02/2010", "Date Time":"12/02/2015 20:04:18", "Salary":"$109850"}, {"Sr":39,"Name":"Vivian Harrell", "Position":"Financial Controller", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"San Francisco", "Age":62,"Start date":"14/02/2009", "Date Time":"14/02/2014 19:19:03", "Salary":"$452500"}, {"Sr":40,"Name":"Timothy Mooney", "Position":"Office Manager", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"London", "Age":37,"Start date":"11/12/2008", "Date Time":"11/12/2013 03:19:56", "Salary":"$136200"}, {"Sr":41,"Name":"Jackson Bradshaw", "Position":"Director", "Status":"Active", "Groups":"Marketing Department", "Office":"New York", "Age":65,"Start date":"26/09/2008", "Date Time":"26/09/2013 20:40:51", "Salary":"$645750"}, {"Sr":42,"Name":"Olivia Liang", "Position":"Support Engineer", "Status":"Pending", "Groups":"Marketing Department", "Office":"Singapore", "Age":64,"Start date":"03/02/2011", "Date Time":"03/02/2016 06:32:28", "Salary":"$234500"}, {"Sr":43,"Name":"Bruno Nash", "Position":"Software Engineer", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"London", "Age":38,"Start date":"03/05/2011", "Date Time":"03/05/2016 06:52:46", "Salary":"$163500"}, {"Sr":44,"Name":"Sakura Yamamoto", "Position":"Support Engineer", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Tokyo", "Age":37,"Start date":"19/08/2009", "Date Time":"19/08/2014 14:59:50", "Salary":"$139575"}, {"Sr":45,"Name":"Thor Walton", "Position":"Developer", "Status":"Pending", "Groups":"Marketing Department", "Office":"New York", "Age":61,"Start date":"11/08/2013", "Date Time":"11/08/2018 07:42:44", "Salary":"$98540"}, {"Sr":46,"Name":"Finn Camacho", "Position":"Support Engineer", "Status":"Pending", "Groups":"Marketing Department", "Office":"San Francisco", "Age":47,"Start date":"07/07/2009", "Date Time":"07/07/2014 08:45:13", "Salary":"$87500"}, {"Sr":47,"Name":"Serge Baldwin", "Position":"Data Coordinator", "Status":"Active", "Groups":"Admin Workers", "Office":"Singapore", "Age":64,"Start date":"09/04/2012", "Date Time":"09/04/2017 06:46:57", "Salary":"$138575"}, {"Sr":48,"Name":"Zenaida Frank", "Position":"Software Engineer", "Status":"Active", "Groups":"Admin Workers", "Office":"New York", "Age":63,"Start date":"04/01/2010", "Date Time":"04/01/2015 12:10:07", "Salary":"$125250"}, {"Sr":49,"Name":"Zorita Serrano", "Position":"Software Engineer", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":56,"Start date":"01/06/2012", "Date Time":"01/06/2017 16:39:03", "Salary":"$115000"}, {"Sr":50,"Name":"Jennifer Acosta", "Position":"Junior Javascript Developer", "Status":"Pending", "Groups":"Marketing Department", "Office":"Edinburgh", "Age":43,"Start date":"01/02/2013", "Date Time":"01/02/2018 10:33:50", "Salary":"$75650"}, {"Sr":51,"Name":"Cara Stevens", "Position":"Sales Assistant", "Status":"Blocked", "Groups":"Admin Workers", "Office":"New York", "Age":46,"Start date":"06/12/2011", "Date Time":"06/12/2016 07:20:13", "Salary":"$145600"}, {"Sr":52,"Name":"Hermione Butler", "Position":"Regional Director", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"London", "Age":47,"Start date":"21/03/2011", "Date Time":"21/03/2016 09:56:15", "Salary":"$356250"}, {"Sr":53,"Name":"Lael Greer", "Position":"Systems Administrator", "Status":"Pending", "Groups":"Marketing Department", "Office":"London", "Age":21,"Start date":"27/02/2009", "Date Time":"27/02/2014 02:55:54", "Salary":"$103500"}, {"Sr":54,"Name":"Jonas Alexander", "Position":"Developer", "Status":"Pending", "Groups":"All Managers of ISB Office", "Office":"San Francisco", "Age":30,"Start date":"14/07/2010", "Date Time":"14/07/2015 21:16:44", "Salary":"$86500"}, {"Sr":55,"Name":"Shad Decker", "Position":"Regional Director", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Edinburgh", "Age":51,"Start date":"13/11/2008", "Date Time":"13/11/2013 21:08:07", "Salary":"$183000"}, {"Sr":56,"Name":"Michael Bruce", "Position":"Javascript Developer", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Singapore", "Age":29,"Start date":"27/06/2011", "Date Time":"27/06/2016 14:04:40", "Salary":"$183000"}, {"Sr":57,"Name":"Donna Snider", "Position":"Customer Support", "Status":"Active", "Groups":"Marketing Department", "Office":"New York", "Age":27,"Start date":"25/01/2011", "Date Time":"25/01/2016 15:03:42", "Salary":"$112000"}]');

var emptyData = JSON.parse('[]');

// var tblConfigs = {"checkbox":true,"status":false,"identifier":"Sr","filters":true,"searchable":true,"language":"en","outerFilter":"Office","hideColumns":"","customFilters":[{"collumnName":"outstangings","type":"select"},{"collumnName":"flags","type":"checkbox"},{"collumnName":"price","type":"range"}],"addColumn":[{"headerText":"Action","addButtons":[{"buttonText":"","class":"actionEdit"},{"buttonText":"","class":"actionDelete"},{"buttonText":"","class":"actionView"}]},{"headerText":"More Action","addButtons":[{"buttonText":"Pay Bill","class":"btn-primary"}]},{"headerText":"More Action","addButtons":[{"buttonText":"Ledger","class":"btn-secondary"}]}]};

var tblConfigs;
var brk = 0;

var elm1='.tbl2nd';
var elm2='#tbl3rd'; 





// TableGenerator code starting from here.

// OuterFilter Check
jQuery(document).on('click', '.outerFilterBox', function(e) {
	e.stopPropagation();
	var currentElement = jQuery(this).next('.outerFilterContainer');
	if (currentElement.is(":visible")) {
		jQuery('.outerFilterContainer').hide();
	} else {
		jQuery('.outerFilterContainer').hide();
		currentElement.show();
	}
});
jQuery(document).on('click', '.outerFilterContainer * , .outerFilterBox', function(e) {
	e.stopPropagation();
});
jQuery(document).on('click', 'html,body', function() {
	jQuery(".outerFilter .outerFilterContainer").hide();
}); // OuterFilter Check End

function getLastVisibleColumn(){
	jQuery('table.dataTable tr td').removeClass('resVisible');
	jQuery('table.dataTable tr').each(function(){
		jQuery(this).find('td:visible:last').addClass('resVisible');
	});
}getLastVisibleColumn();

function capitalCase(z){
	z = z.toLowerCase();
	return z.charAt(0).toUpperCase() + z.slice(1);
}
function convertIntoNumber(s){
	var string2Num = s.replace(/[^0-9.]/g, ""); // converting string into numbers
	// removing extra dots
	var aftrDecimal = string2Num.lastIndexOf('.');
	var beforeDecimals = string2Num.substring(0, aftrDecimal).replace(/\./g, '');
	string2Num = beforeDecimals + string2Num.substring(aftrDecimal);
	string2Num = parseInt( string2Num );
	return string2Num;
}
function filterPopupHeight(elm){
	var screenHeight = jQuery(window).height();
	var popupH = elm.find('.fPopupHeader').outerHeight();
	var popupF = elm.find('.fPopupFooter').outerHeight();
	elm.find('.fPopupBody').css('max-height','none').css('max-height',screenHeight-(popupH+popupF));
}
function showFilterPopup(elm) {
	elm.fadeIn('fast');
	elm.find('.fPopupBody').mCustomScrollbar({
		axis:"y",
		snapOffset: 2,
		scrollInertia: 150,
		mouseWheelPixels: 80
	});
}
function filterPopupUpdate(elm){
	elm.find('.fPopupBody').mCustomScrollbar('update');
}
function randChars(lnth) {
	var rndChars = '';
	var allChars = 'abcdefghijklmnopqrstuvwxyz';
	var charsLength = allChars.length;
	for ( var c = 0; c < lnth; c++ ) {
		rndChars += allChars.charAt(Math.floor(Math.random() * charsLength));
	}
	return rndChars;
}
var fDataTable = {};
function generateDataTable(tableData, tableConfig, tableElm){
	if(jQuery('.mainDataTable').length<1){
		return false; // if Div not found then stop execution 
	}

	var onElement = tableElm || "";
	if(onElement && jQuery(onElement).length < 1 && jQuery(onElement +' .mainDataTable').length<1){
		console.log("Provided element not found");
		return false; // if Div not found then stop execution 
	}
	else {
		onElement = onElement + ' ';
	}

	// Create Random String on Datatable
	var tableName = randChars(8);
	var uniqueTxt = tableName;
	var tableHtml = '',
	language='en',
	sorting = true,
	pagination = true,
	hideColumns = [],
	identifierCol = 0,
	searchableColumns = [],
	identifierFound = false,
	totalRows = 0,
	rowsLength = 10, // show Records per page
	pageInfo = true, // page Info "Showing 1 to 10 of 57"
	lengthChange = false, // Change Records per Page Dropdown
	recordsInfo = ['Showing ', ' of '];

	var lengthMenu = [[rowsLength, 25, 50, 100,-1],[rowsLength, 25, 50, 100, 'All']];

	if(tableData.length > 0){ totalRows = tableData.length; }

	tableHtml += '<table class="fDataTable">';
	for(var i=0; i<tableData.length; i++){
		if(i==0){
			tableHtml += '<thead><tr>';
			for(var th_KeyName in tableData[i]){
				tableHtml += '<th>'+th_KeyName.replace(/_/g," ");+'</th>';
			}
			tableHtml += '</tr></thead><tbody>';
		}
		tableHtml += '<tr>';
		for(var td_KeyName in tableData[i]){
			tableHtml += '<td>'+tableData[i][td_KeyName]+'</td>';
		}
		tableHtml += '</tr>';
	}
	tableHtml += '</tbody></table>';
	jQuery(onElement + '.mainDataTable').append(tableHtml);
	jQuery(onElement + '.mainDataTable').attr('data-name', tableName);

	function allChecks(){
		var allChecks = true, thisRow;
		jQuery(onElement+'.fDataTable tbody tr td:first-child input:checkbox').each(function(){
			thisRow = jQuery(this).attr('id');
			if(jQuery(this).prop("checked") == false){
				allChecks = false;
				jQuery('#selectedRows_'+uniqueTxt).find('tr[data-rowid="'+thisRow+'"]').remove();
			}
			else {
				if(jQuery('#selectedRows_'+uniqueTxt).find('tr[data-rowid="'+thisRow+'"]').length<1){
					jQuery('#selectedRows_'+uniqueTxt).append(jQuery(this).closest('tr').prop('outerHTML'));
				}
			}
		});
		if(jQuery(onElement+'.fDataTable tbody tr td:first-child input:checkbox').length){
			if(allChecks){ jQuery(onElement+'#jSelectAllRows_'+uniqueTxt).prop('checked', true); }
			else { jQuery(onElement+'#jSelectAllRows_'+uniqueTxt).prop('checked', false); }
		}

		// Activating Button
		if(jQuery('#selectedRows_'+uniqueTxt+' tr').length){
			jQuery(onElement+'.mainDataTable').closest('.row').find('.btn-table-action').removeAttr('disabled');
		}
		else {
			jQuery(onElement+'.mainDataTable').closest('.row').find('.btn-table-action').attr('disabled','disabled');
		}
	}
	function identifierCheck(){
		if(tableConfig != undefined && totalRows > 0){
			if(tableConfig.identifier != undefined && tableConfig.identifier.length > 0){
				jQuery(onElement + '.mainDataTable .fDataTable thead tr th').each(function(e){
					if(jQuery(this).text().toLowerCase() == tableConfig.identifier.toLowerCase()){
						identifierCol = e+1; // making index from 0 to 1...
						identifierFound = true;
					}
				});
				if(identifierFound){
					jQuery(onElement + '.mainDataTable .fDataTable tbody tr').each(function(){
						var rowid = jQuery(this).find('td:nth-child('+identifierCol+')').text();
						jQuery(this).attr('data-rowid',rowid.toString().replace(/[^A-Za-z0-9_-]/g,""));
					});
				}
			}
		}
	}identifierCheck();

	if(tableConfig != undefined && totalRows > 0){			
		if( tableConfig.changeLength != undefined && tableConfig.changeLength == true ){
			lengthChange = true;
		}
		if( tableConfig.recordInfo == undefined || tableConfig.recordInfo == false ){
			pageInfo = false;
		}
		if( tableConfig.sorting != undefined && tableConfig.sorting == false ){
			sorting = false;
		}
		if( tableConfig.pagination != undefined && tableConfig.pagination == false ){
			pagination = false;
		}
		// Create Checkboxes
		if((tableConfig.selectable != undefined) && (tableConfig.selectable == true)){
			if(identifierFound){
				jQuery(onElement + '.mainDataTable .fDataTable').addClass('hasActions');
				jQuery(onElement + '.mainDataTable .fDataTable thead tr').prepend('<th data-orderable="false" class="noExport"><div class="defaultCheckBox"><input type="checkbox" id="jSelectAllRows_'+uniqueTxt+'" /><label class="hideText" for="jSelectAllRows_'+uniqueTxt+'">Select All</label></div></th>'); // making Header Checkbox
				jQuery(onElement + '.mainDataTable .fDataTable tbody tr').each(function(){
					var val = jQuery(this).find('td:nth-child('+identifierCol+')').text();
					jQuery(this).prepend('<td class="noSelect"><div class="defaultCheckBox"><input type="checkbox" id="'+val.toString().replace(/[^A-Za-z0-9_-]/g,"")+'" /><label for="'+val.toString().replace(/[^A-Za-z0-9_-]/g,"")+'"></label></div></td>');
				}); // making Checkbox on the rows
				// Table for selected Rows
				jQuery(onElement + '.mainDataTable .fDataTable').after('<table id="selectedRows_'+uniqueTxt+'" style="display:none;"></table>');
				allChecks();
				jQuery(document).on('change', onElement+'.fDataTable tbody tr td:first-child input[type="checkbox"]', function(){
					allChecks();
				});
				jQuery(document).on('click', '#jSelectAllRows_'+uniqueTxt, function(){
					jQuery(onElement+'.fDataTable tbody tr td:first-child input:checkbox').prop('checked', this.checked);
					allChecks();
				});
				jQuery(onElement + '.mainDataTable .fDataTable').addClass('selectableRows');
			}
		}

		// Action Buttons
		if(tableConfig.addColumn != undefined && tableConfig.addColumn.length > 0){
			if(identifierFound){
				for(var ac=0; ac<tableConfig.addColumn.length; ac++){
					var headerText = '';
					if(tableConfig.addColumn[ac].headerText != undefined ){
						headerText = tableConfig.addColumn[ac].headerText;
					}
					jQuery(onElement + '.mainDataTable .fDataTable thead tr').append('<th data-orderable="false" class="noExport">'+headerText+'</th>');
					jQuery(onElement + '.mainDataTable .fDataTable tbody tr').each(function(){
						if(tableConfig.addColumn[ac].addButtons != undefined && tableConfig.addColumn[ac].addButtons.length > 0){
							var actionButton = '';
							var identifierTxt = jQuery(this).attr('data-rowid');
							for(var ab=0; ab<tableConfig.addColumn[ac].addButtons.length; ab++){
								var btnText = tableConfig.addColumn[ac].addButtons[ab].buttonText;
								var btnClass = tableConfig.addColumn[ac].addButtons[ab].class;
								var btnId = tableConfig.addColumn[ac].addButtons[ab].preId+identifierTxt;
								actionButton += '<a id="'+btnId+'" class="'+btnClass+'">'+btnText+'</a>';
							}
						}
						jQuery(this).append('<td class="noSelect">'+actionButton+'</td>');
					});
				}
				jQuery(onElement + '.mainDataTable .fDataTable').addClass('actionBtns hasActions');
			}
		}

		// Status Check
		if(tableConfig.status != undefined && tableConfig.status.length > 0){
			var statusCol = 1;
			var statusColFound = false;
			var statusColName = tableConfig.status.toLowerCase();
			jQuery(onElement + '.mainDataTable .fDataTable thead tr th').each(function(e){
				if(statusColName == jQuery(this).text().toLowerCase()){
					jQuery(this).addClass('hideText');
					statusCol = e+1; // start index from 1 instead of 0
					statusColFound = true;
				}
			});
			if(statusColFound){
				jQuery(onElement + '.mainDataTable .fDataTable tbody tr').each(function(){
					var statusClass = jQuery(this).find('td:nth-child('+statusCol+')').text();
					var statusText = jQuery(this).find('td:nth-child('+statusCol+')').text();
					if(statusText.indexOf('_')>-1){
						var toolTip = '<span class="statusTip">'+statusText.substr(statusText.indexOf('_')+1)+'</span>';
						var status = statusText.substr(0, statusText.indexOf('_'));
						jQuery(this).find('td:nth-child('+statusCol+')').html('<span class="statusIcon '+status.replace(/[^A-Za-z0-9]/g,'').toLowerCase()+'">'+status+toolTip+'</span>');
					}
					else {
						jQuery(this).find('td:nth-child('+statusCol+')').html('<span title="'+capitalCase(statusClass)+'" class="statusIcon '+statusClass.replace(/[^A-Za-z0-9]/g,'').toLowerCase()+'">'+statusClass.replace(/[^A-Za-z0-9]/g,'')+'</span>');
					}
				});
				jQuery(onElement + '.mainDataTable .fDataTable').addClass('hasIcon');
			}
		}

		// Hide Columns
		if(tableConfig.hideColumns != undefined && tableConfig.hideColumns.length > 0){
			jQuery(onElement + '.mainDataTable .fDataTable thead tr th').each(function(c){
				var thisTxt = jQuery(this).text().toLowerCase();
				for(var j=0;j<tableConfig.hideColumns.length;j++){
					if(tableConfig.hideColumns[j].columnName != undefined){
						var textFromConfig = tableConfig.hideColumns[j].columnName.toLowerCase();
						if(textFromConfig==thisTxt){
							if(tableConfig.hideColumns[j].filterable != undefined && tableConfig.hideColumns[j].filterable == true){ searchableColumns.push(c); }
							else {
								hideColumns.push(c);
								jQuery(this).addClass('noExport');
							}
						}
					}
				}
			});
		}

		// Adding Numeric Sorting
		if((tableConfig.numericSorting != undefined) && (tableConfig.numericSorting.length)){
			for(var i=0; i<tableConfig.numericSorting.length; i++){
				var thText = '', colName = tableConfig.numericSorting[i].columnName.toLowerCase();
				jQuery(onElement + '.mainDataTable .fDataTable thead th').each(function(nthChild){
					thText = jQuery(this).text().toLowerCase();
					var nthChild = nthChild + 1; // change array order to number [0 to 1]
					if(thText==colName){
						if((tableConfig.numericSorting[i].sortType != undefined) && (tableConfig.numericSorting[i].sortType == 'date')){
							jQuery(onElement + '.mainDataTable .fDataTable tbody td:nth-child('+nthChild+')').each(function(){
								var thisDate = jQuery(this).text().split("/").reverse().join("").replace('/','');
								jQuery(this).attr('data-order', thisDate);
							});
						}
						else if((tableConfig.numericSorting[i].sortType != undefined) && (tableConfig.numericSorting[i].sortType == 'datetime')){
							jQuery(onElement + '.mainDataTable .fDataTable tbody td:nth-child('+nthChild+')').each(function(){
								var dateTimeText = jQuery(this).text();
								var splitDate = dateTimeText.substr(0, dateTimeText.indexOf(' '));
								splitDate = splitDate.split("/").reverse().join("").replace('/','');
								var splitTime = dateTimeText.substr(dateTimeText.indexOf(' ')+1).replace(/:/g,'');
								jQuery(this).attr('data-order', splitDate+''+splitTime); // '' preventing Addition in date and time
								// jQuery(this).attr('data-search', splitDate+''+splitTime); // '' preventing Addition in date and time
							});
						}
						else {
							jQuery(onElement + '.mainDataTable .fDataTable tbody td:nth-child('+nthChild+')').each(function(){
								jQuery(this).attr('data-order', convertIntoNumber(jQuery(this).text()));
							});
						}
					}
				});
			}
		}
	}

	var fileTitle = '';
	var appendDate = new Date().toLocaleString();
	appendDate = appendDate.replace(/\//g,'-').replace(/:/g,'-').replace(',','');
	if(jQuery('#fileTitle').length){ 
		var valfromInput = jQuery('#fileTitle').val();
		fileTitle = valfromInput.replace(/[^A-Za-z0-9 ]/g,'')+' '+appendDate;
	}
	else { fileTitle = (jQuery('.pageTitle h1').text())+' '+appendDate; }

	// Assigning Column Numbers
	jQuery(onElement + '.mainDataTable .fDataTable thead tr th').each(function(i){
		jQuery(this).attr('data-column', i);
	});

	fDataTable[tableName] = jQuery(onElement + '.fDataTable').DataTable({
		dom: 'rt<"LengthInfo"il>pB',
		aaSorting: [], // disable Default Sorting on first Column
		info: pageInfo,
		// autoWidth: false, // disable width calculations
		responsive: true,
		ordering: sorting,
		paging: pagination,
		pageLength: rowsLength,
		lengthChange: lengthChange,
		lengthMenu: lengthMenu,
		search: { // setting for multi-values Search "Officer|Regional|Chief" 
			"regex": true,
			"smart": false,
		},
		language: {
			"info": "Showing _START_ to _END_ of _TOTAL_",
			"lengthMenu": "Showing entries _MENU_"
		},
		buttons: [
			{
				extend: 'pdf',
				title: fileTitle,
				className: 'btn btn-sm btn-secondary',
				exportOptions: {
					columns: ':not(th.noExport)'
				},
				customize: function(doc) {
					doc.defaultStyle.alignment = 'left';
					doc.styles.tableHeader.alignment = 'left';
					console.log(doc);
				}
			},
			{
				extend: 'csv',
				title: fileTitle,
				className: 'btn btn-sm btn-secondary',
				exportOptions: {
					columns: ':not(th.noExport)'
				},
				customize: function(doc) {
					// doc.defaultStyle.alignment = 'left';
					// doc.styles.tableHeader.alignment = 'left';
				}
			}
		],
		columnDefs: [
			{ 'targets': hideColumns, 'visible': false, 'searchable': false }
		],
		fnDrawCallback: function( oSettings ) {
			var totalPages = this.api().page.info().pages;
			if(totalPages == 1){ jQuery(onElement + '.dataTables_paginate').hide(); }
			else { jQuery(onElement + '.dataTables_paginate').show(); }
			jQuery(onElement + '.fDataTable').attr('data-rows',this.api().page.info().recordsDisplay);
			allChecks();
		}
	});

	if(tableConfig != undefined && totalRows > 0){
		// Downloadable data as PDF || CSV
		if(!(tableConfig.downloadable == undefined || tableConfig.downloadable == false)){
			if( fDataTable[tableName].data().length > 0 ){
				var uniqueDlDataTxt = '.'+uniqueTxt;
				if(jQuery(onElement+'.mainDataTable').closest('.row').find('.dlPopupWrapper').length<1){
					var dlPopup = '<div class="dlPopupWrapper '+uniqueTxt+' thisPopup"><div class="dlPopupOuter"><div class="dlPopupMiddle"><div class="dlPopupContentWrapper"><span class="closePopup popupCross"></span><div class="dlPopupContent"></div></div></div></div></div>';
					jQuery(onElement+'.mainDataTable').closest('.row').append(dlPopup);
				}
				var downloadPopupHtml = '<div class="popupMainIcon download"></div><h3>Download lines data as</h3><div class="buttonsHolder"><div class="downloadAs"><input type="radio" name="downloadData" value="buttons-pdf" checked id="downAsPDF_'+uniqueTxt+'" class="downAsPDF" /><label for="downAsPDF_'+uniqueTxt+'"><span></span></label></div><div class="downloadAs"><input type="radio" name="downloadData" value="buttons-csv" id="downAsCSV_'+uniqueTxt+'" class="downAsCSV" /><label for="downAsCSV_'+uniqueTxt+'"><span></span></label></div></div><div class="bi-btns"><button class="btn btn-sm btn-secondary closePopup">Cancel</button><button class="btn btn-sm btn-download_'+uniqueTxt+'">Download</button></div><div class="mt-10"><p><small><strong>Disclaimer:</strong> The information you downloaded was last updated 2 hours ago.</small></p></div>';

				if(!jQuery(onElement+'.mainDataTable').next('.tableAfter').length){
					jQuery(onElement + '.mainDataTable').after('<div class="col-xs-12 tableAfter"></div>');
				}
				if(!jQuery(onElement+'.mainDataTable').next('.tableAfter').find('.optionalRow').length){
					jQuery(onElement + '.mainDataTable').next('.tableAfter').append('<div class="optionalRow"></div>');
				}
				jQuery(onElement + '.mainDataTable').next('.tableAfter').find('.optionalRow').prepend('<button class="btn btn-sm icon-left btn-secondary downloadTblData_'+uniqueTxt+'">Download <span class="btnIcon download"></span></button>');
				jQuery(document).on('click', '.downloadTblData_'+uniqueTxt, function(){
					jQuery('.dlPopupWrapper'+uniqueDlDataTxt+' .dlPopupContent').html(downloadPopupHtml);
					jQuery('.dlPopupWrapper'+uniqueDlDataTxt).fadeIn('fast');
				});
				jQuery(document).on('click', '.dlPopupWrapper'+uniqueDlDataTxt+' .btn-download_'+uniqueTxt, function(){
					if(jQuery('#downAsPDF_'+uniqueTxt).prop('checked') == true){
						jQuery(onElement+'.dt-buttons .dt-button.buttons-pdf').click();
					}
					if(jQuery('#downAsCSV_'+uniqueTxt).prop('checked') == true){
						jQuery(onElement+'.dt-buttons .dt-button.buttons-csv').click();
					}
				});
			}
		}

		// Add Searchbar Function
		if(tableConfig.searchable == true){
			var searchboxString = '';
			if(!jQuery(onElement+'.mainDataTable').closest('.row').find('.filterArea').length){
				jQuery(onElement + '.mainDataTable').before('<div class="col-xs-12 filterArea"></div>');
			}
			var uniqueSrchTxt = '.'+uniqueTxt;
			var searchHtml = '<div class="searchInTable"><form>';
			searchHtml += '<input type="text" id="dtSearch_'+uniqueTxt+'" placeholder="Search..." />';
			searchHtml += '<button type="submit" class="btn searchData_'+uniqueTxt+'">Search</button><button type="reset" class="btn resetSearch resetSearch_'+uniqueTxt+'">Reset</button>';
			searchHtml += '</form></div>';

			jQuery(onElement + '.mainDataTable').closest('.row').find('.filterArea').prepend(searchHtml);

			jQuery(document).on('click', '.searchData_'+uniqueTxt, function(e){
				e.preventDefault();
				if(jQuery(this).prev('input').val().length>0){
					var btn_escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
					searchboxString = jQuery(this).prev('input').val().replace( btn_escape_parenthesis, '\\$1' );
					fDataTable[tableName].search(searchboxString, true, false).draw();
				}
			});
			jQuery(document).on('keyup', '#dtSearch_'+uniqueTxt, function(s){
				var o_escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
				searchboxString = s.target.value.replace( o_escape_parenthesis, '\\$1' );
				fDataTable[tableName].search(searchboxString, true, false).draw();
			});
			jQuery(document).on('click', '.resetSearch_'+uniqueTxt, function(){
				jQuery('.outerAction'+uniqueSrchTxt+' .outerFilterContainer .defaultCheckBox').each(function(){
					jQuery(this).find('input[type=checkbox]').prop('checked', false);
				});
				jQuery('.filterPopupWrapper'+uniqueSrchTxt+' .fPopupBody .filterCell').each(function(){
					jQuery(this).find('input[type=checkbox]').prop('checked', false);
				});
				jQuery('.filterPopupWrapper'+uniqueSrchTxt+' .fPopupBody .filterCell').each(function(){
					jQuery(this).find('input:not([type="checkbox"])').val('');
				});
				jQuery('.filterPopupWrapper'+uniqueSrchTxt+' .fPopupBody .filterCell').each(function(){
					jQuery(this).find('select').val('');
				});
				fDataTable[tableName].search("").draw(); // reset DataTable
			});
		}

		// Add Outer Filter
		if(tableConfig.outerFilter != undefined && tableConfig.outerFilter.length > 0){
			var checkArray = [], thText = '', dataColumn, colName, otflAppendTo, uniqueOtFlTxt = '.'+uniqueTxt;
			for(var otfl=0; otfl<tableConfig.outerFilter.length; otfl++){
				colName = tableConfig.outerFilter[otfl].columnName.toLowerCase();
				if(tableConfig.outerFilter[otfl].appendTo != undefined && tableConfig.outerFilter[otfl].appendTo.length > 0){
					otflAppendTo = tableConfig.outerFilter[otfl].appendTo;
				}
				else {
					jQuery(onElement + '.mainDataTable').closest('.row').prepend('<div class="col-xs-12"><div class="outFilter"></div></div>');
					// prepending DOT for making it jQuery element
					otflAppendTo = '.'+jQuery(onElement + '.mainDataTable').closest('.row').find('.outFilter').attr('class');
				}
				jQuery(onElement + '.mainDataTable .fDataTable thead th').each(function(){
					thText = jQuery(this).text().toLowerCase();
					if(thText==colName){
						jQuery(this).addClass('outerFilterColumn');
						dataColumn = jQuery(this).attr('data-column');
					}
				});
				fDataTable[tableName].columns('.outerFilterColumn').every(function(){
					var column = this;
					var outerFilterHTML = '<div class="outerAction '+uniqueTxt+'">';
					outerFilterHTML += '<div class="outerFilter" data-column="'+dataColumn+'">';
					outerFilterHTML += '<div class="outerFilterBox"><label class="outerFilterText">Select <span></span></label></div>';
					outerFilterHTML += '<div class="outerFilterContainer"></div></div>';
					outerFilterHTML += '</div><input type="hidden" class="outerFilterString" value="" /></div>';
					jQuery(otflAppendTo).prepend(outerFilterHTML);
					jQuery('.outerAction'+uniqueOtFlTxt+' .outerFilterText span').text(colName);

					var checkboxes = '';
					var columnData = this.cache('search');
					var uniqueData = [];
					jQuery.each(columnData, function(i, el){
						if(jQuery.inArray(el, uniqueData) === -1) uniqueData.push(el);
					});
					jQuery.each(uniqueData, function(d, e){
						if(e.length>0){
							checkboxes += '<div class="defaultCheckBox"><input type="checkbox" id="'+uniqueTxt+'otck'+d+'" value="'+e+'" /><label for="'+uniqueTxt+'otck'+d+'">'+e+'</label></div>';
						}
					});
					jQuery('.outerAction'+uniqueOtFlTxt+' .outerFilterContainer').html(checkboxes);
					jQuery('.outerAction'+uniqueOtFlTxt+' .outerFilterText span').text(tableConfig.outerFilter[otfl].columnName.replace(/_/g," "));
					jQuery(document).on('change', otflAppendTo+' .outerAction input', function(){
						checkArray = []; // flushing Array for empty entries
						jQuery(otflAppendTo+' .outerAction input').each(function(){
							if(jQuery(this).prop('checked')){ checkArray.push(jQuery(this).val()); }
						});
						checkArray = checkArray.join('|');
						var o_escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
						checkArray = checkArray.replace( o_escape_parenthesis, '\\$1' );
						fDataTable[tableName].search(checkArray, true, false).draw();
					});
				});
			}
			jQuery('.outerAction'+uniqueOtFlTxt+' .outerFilterContainer').mCustomScrollbar({
				axis:"y",
				snapOffset: 2,
				scrollInertia: 150,
				mouseWheelPixels: 80
				// scrollbarPosition: 'outside'
			});
		}

		// Add Multi Filters
		if((tableConfig.filters != undefined) && (tableConfig.filters.length)){
			
			var uniqueMainFlTxt = '';
			if(uniqueTxt.length>0){ uniqueMainFlTxt = '.'+uniqueTxt; }

			if(jQuery(onElement+'.mainDataTable').closest('.row').find('.filterArea').length<1){
				jQuery(onElement + '.mainDataTable').before('<div class="col-xs-12 filterArea"></div>');
			}
			jQuery(onElement + '.mainDataTable').prev('.filterArea').append('<div class="btn btn-secondary tableFilters '+uniqueTxt+'">Filters</div>');

			if(jQuery(onElement+'.mainDataTable').closest('.row').find('.filterPopupWrapper').length<1){
				var mFilterHTML = '<div class="filterPopupWrapper '+uniqueTxt+' thisPopup"><div class="filterPopupOuter"><div class="filterPopupMiddle"><div class="filterPopupContent"><div class="fPopupHeader"><span class="popupCross closePopup"></span><button class="btn btn-md btn-secondary btn-clearFilter">Clear</button><h1>Filter</h1></div><div class="fPopupBody"><div class="fBodyScroll"></div></div><div class="fPopupFooter"><button class="btn btn-lg btn-secondary closePopup">Cancel</button><button class="btn btn-lg btn-btn-primary btn-applyFilter">Apply</button></div></div></div></div></div>';
				jQuery(onElement+'.mainDataTable').closest('.row').append(mFilterHTML);
			}

			for(var i=0; i<tableConfig.filters.length; i++){
				var thText = '', colName = tableConfig.filters[i].columnName.toLowerCase();
				jQuery(onElement + '.mainDataTable .fDataTable thead th').each(function(){
					thText = jQuery(this).text().toLowerCase();
					if(thText==colName){ jQuery(this).addClass('jfilter_'+tableConfig.filters[i].filterType); }
				});
			}

			function checkboxOfCol(){
				fDataTable[tableName].columns('.jfilter_checkbox').every(function(i) {
					var that = this;
					var name = this.header().innerHTML.replace(/[^A-Za-z0-9]/g,'');
					var checkbox = '';
					var columnData = this.cache('search');
					var uniqueData = [];
					jQuery.each(columnData, function(i, el){
						if(jQuery.inArray(el, uniqueData) === -1) uniqueData.push(el);
					});
					jQuery.each(uniqueData, function(d, e){
						if(e.length>0){
							checkbox += '<div class="defaultCheckBox"><input type="checkbox" id="'+uniqueTxt+'flCk_'+i+'_'+d+'" value="'+e.toLowerCase()+'" /><label for="'+uniqueTxt+'flCk_'+i+'_'+d+'">'+e+'</label></div>';
						}
					});
					if(checkbox.length>0){
						var filterHTML = '<div data-column="'+i+'" class="filterCell pf_checkbox" id="'+uniqueTxt+'filterCol_'+i+'">';
						filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
						filterHTML += '<div class="filterControls"></div>';
						filterHTML += '</div>';
						jQuery('.filterPopupWrapper'+uniqueMainFlTxt+' .fPopupBody .fBodyScroll').append(filterHTML);
						jQuery('#'+uniqueTxt+'filterCol_'+i+' .filterControls').append(checkbox);
					}
				});
			}checkboxOfCol();

			function selectOfCol(){
				fDataTable[tableName].columns('.jfilter_select').every(function(i) {
					var that = this;
					var name = this.header().innerHTML.replace(/[^A-Za-z0-9]/g,'');
					var select = jQuery('<select class="select select_'+i+'" name="'+name+'"></select>');
					select.append(jQuery('<option value="">All</option>'));
					var columnData = this.cache('search');
					var uniqueData = [];
					jQuery.each(columnData, function(i, el){
						if(jQuery.inArray(el, uniqueData) === -1) uniqueData.push(el);
					});
					jQuery.each(uniqueData, function(d, e){
						if(e.length>0){
							select.append(jQuery('<option value="'+e.toLowerCase()+'">'+e+'</option>'));
						}
					});
					if(select.length>0){
						var filterHTML = '<div data-column="'+i+'" class="filterCell pf_select" id="'+uniqueTxt+'filterCol_'+i+'">';
						filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
						filterHTML += '<div class="filterControls"></div>';
						filterHTML += '</div>';
						jQuery('.filterPopupWrapper'+uniqueMainFlTxt+' .fPopupBody .fBodyScroll').append(filterHTML);
						jQuery('#'+uniqueTxt+'filterCol_'+i+' .filterControls').append(select);
					}
				});
			}selectOfCol();

			function rangeOfCol(){
				fDataTable[tableName].columns('.jfilter_range').every(function(i) {
					var rangeHtml = '<div class="rangeBox '+uniqueTxt+'rangeMin_'+i+'"><input placeholder="Min" type="text" class="numbersOnly" id="'+uniqueTxt+'rangeMin_'+i+'"/></div><div class="rangeBox '+uniqueTxt+'rangeMax_'+i+'"><input placeholder="Max" type="text" class="numbersOnly" id="'+uniqueTxt+'rangeMax_'+i+'"/></div>';
					var filterHTML = '<div data-column="'+i+'" class="filterCell pf_range" id="'+uniqueTxt+'filterCol_'+i+'">';
					filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
					filterHTML += '<div class="filterControls">'+rangeHtml+'</div>';
					filterHTML += '</div>';
					jQuery('.filterPopupWrapper'+uniqueMainFlTxt+' .fPopupBody .fBodyScroll').append(filterHTML);
					jQuery.fn.dataTable.ext.search.push(
						function( settings, data, dataIndex ) {
							var rangeMin = convertIntoNumber(jQuery('#'+uniqueTxt+'rangeMin_'+i).val());
							var rangeMax = convertIntoNumber(jQuery('#'+uniqueTxt+'rangeMax_'+i).val());
							var valInCol = convertIntoNumber(data[i]);
							if ( ( isNaN( rangeMin ) && isNaN( rangeMax ) ) ||
								( isNaN( rangeMin ) && valInCol <= rangeMax ) ||
								( rangeMin <= valInCol && isNaN( rangeMax ) ) ||
								( rangeMin <= valInCol && valInCol <= rangeMax ) ) {
								return true;
							}
							return false;
						}
					);
					jQuery(document).on('keyup change','#'+uniqueTxt+'rangeMin_'+i+', #'+uniqueTxt+'rangeMax_'+i, function(){
						fDataTable[tableName].draw();
					});
				});
			}rangeOfCol();

			function dateRangeOfCol(){
				fDataTable[tableName].columns('.jfilter_date').every(function(i) {
					var dateHtml = '<div class="dateBox '+uniqueTxt+'dateMin_'+i+'"><input placeholder="From" type="text" class="datepicker dateFrom" readonly id="'+uniqueTxt+'dateMin_'+i+'" /><div class="dPopup '+uniqueTxt+'minDatePopup_'+i+'"></div></div><div class="dateBox '+uniqueTxt+'dateMax_'+i+'"><input placeholder="To" type="text" class="datepicker dateTo" readonly id="'+uniqueTxt+'dateMax_'+i+'" /><div class="dPopup '+uniqueTxt+'maxDatePopup_'+i+'"></div></div>';
					var filterHTML = '<div data-column="'+i+'" class="filterCell pf_date" id="'+uniqueTxt+'filterCol_'+i+'">';
					filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
					filterHTML += '<div class="filterControls">'+dateHtml+'</div>';
					filterHTML += '</div>';
					jQuery('.filterPopupWrapper'+uniqueMainFlTxt+' .fPopupBody .fBodyScroll').append(filterHTML);
					jQuery.fn.dataTable.ext.search.push(
						function( settings, data, dataIndex ) {
							var dateMin = parseInt(jQuery('#'+uniqueTxt+'dateMin_'+i).val().replace(/[^0-9]/g, ""));
							var dateMax = parseInt(jQuery('#'+uniqueTxt+'dateMax_'+i).val().replace(/[^0-9]/g, ""));
							var valInCol = data[i].split("/").reverse().join("").replace('/','');
							valInCol = parseInt( valInCol ) || 0;
							if ( ( isNaN( dateMin ) && isNaN( dateMax ) ) ||
								( isNaN( dateMin ) && valInCol <= dateMax ) ||
								( dateMin <= valInCol && isNaN( dateMax ) ) ||
								( dateMin <= valInCol && valInCol <= dateMax ) ) {
								return true;
							}
							return false;
						}
					);
					jQuery('#'+uniqueTxt+'dateMin_'+i).datepicker({
						changeMonth: true,
						changeYear: true,
						showButtonPanel: true,
						dateFormat: "yy/mm/dd",
						onSelect: function() { fDataTable[tableName].draw(); },
						beforeShow:function(){
							jQuery('.'+uniqueTxt+'minDatePopup_'+i).append(jQuery('#ui-datepicker-div'));
						}
					});
					jQuery('#'+uniqueTxt+'dateMax_'+i).datepicker({
						changeMonth: true,
						changeYear: true,
						showButtonPanel: true,
						dateFormat: "yy/mm/dd",
						onSelect: function() { fDataTable[tableName].draw(); },
						beforeShow:function(){
							jQuery('.'+uniqueTxt+'maxDatePopup_'+i).append(jQuery('#ui-datepicker-div'));
						}
					});
				});
			}dateRangeOfCol();

			function datetimeRangeOfCol(){
				fDataTable[tableName].columns('.jfilter_datetime').every(function(i) {
					var datetimeHtml = '<div class="dateBox '+uniqueTxt+'datetimeMin_'+i+'"><input type="hidden" id="'+uniqueTxt+'datetimeMinHidden_'+i+'" /><input placeholder="From" type="text" class="datepicker dateFrom" readonly id="'+uniqueTxt+'datetimeMin_'+i+'" /><div class="dPopup '+uniqueTxt+'minDatePopup_'+i+'"></div></div><div class="dateBox '+uniqueTxt+'datetimeMax_'+i+'"><input type="hidden" id="'+uniqueTxt+'datetimeMaxHidden_'+i+'" /><input placeholder="To" type="text" class="datepicker dateTo" readonly id="'+uniqueTxt+'datetimeMax_'+i+'" /><div class="dPopup '+uniqueTxt+'maxDatePopup_'+i+'"></div></div>';
					var filterHTML = '<div data-column="'+i+'" class="filterCell pf_date" id="'+uniqueTxt+'filterCol_'+i+'">';
					filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
					filterHTML += '<div class="filterControls">'+datetimeHtml+'</div>';
					filterHTML += '</div>';
					jQuery('.filterPopupWrapper'+uniqueMainFlTxt+' .fPopupBody .fBodyScroll').append(filterHTML);

					jQuery.fn.dataTable.ext.search.push(
						function( settings, data, dataIndex ) {
							var datetimeMin = parseInt(jQuery('#'+uniqueTxt+'datetimeMinHidden_'+i).val().replace(/[^0-9]/g, "")); // selected Date + min Time
							var datetimeMax = parseInt(jQuery('#'+uniqueTxt+'datetimeMaxHidden_'+i).val().replace(/[^0-9]/g, "")); // selected Date + max Time
							var dtDatepart = data[i].substr(0, data[i].indexOf(' ')).split("/").reverse().join("").replace('/','');
							var dtTimepart = data[i].substr(data[i].indexOf(' ')+1).replace(/:/g,'');
							var valInDTCol = dtDatepart+dtTimepart;
							valInDTCol = parseInt( valInDTCol ) || 0;
							if ( ( isNaN( datetimeMin ) && isNaN( datetimeMax ) ) ||
								( isNaN( datetimeMin ) && valInDTCol <= datetimeMax ) ||
								( datetimeMin <= valInDTCol && isNaN( datetimeMax ) ) ||
								( datetimeMin <= valInDTCol && valInDTCol <= datetimeMax ) ) {
								return true;
							}
							return false;
						}
					);
					jQuery('#'+uniqueTxt+'datetimeMin_'+i).datepicker({
						changeMonth: true,
						changeYear: true,
						showButtonPanel: true,
						dateFormat: "yy/mm/dd",
						onSelect: function(date) {
							jQuery('#'+uniqueTxt+'datetimeMinHidden_'+i).val(date+'000000');
							fDataTable[tableName].draw();
						},
						beforeShow:function(){
							jQuery('.'+uniqueTxt+'minDatePopup_'+i).append(jQuery('#ui-datepicker-div'));
						}
					});
					jQuery('#'+uniqueTxt+'datetimeMax_'+i).datepicker({
						changeMonth: true,
						changeYear: true,
						showButtonPanel: true,
						dateFormat: "yy/mm/dd",
						onSelect: function(date) {
							jQuery('#'+uniqueTxt+'datetimeMaxHidden_'+i).val(date+'235959');
							fDataTable[tableName].draw();
						},
						beforeShow:function(){
							jQuery('.'+uniqueTxt+'maxDatePopup_'+i).append(jQuery('#ui-datepicker-div'));
						}
					});
				});
			}datetimeRangeOfCol();


			jQuery(document).on('click', '.filterArea .tableFilters'+uniqueMainFlTxt, function() {
				showFilterPopup(jQuery('.filterPopupWrapper'+uniqueMainFlTxt));
				filterPopupHeight(jQuery('.filterPopupWrapper'+uniqueMainFlTxt));
			});

			jQuery(window).resize(function(){
				filterPopupHeight(jQuery('.filterPopupWrapper'+uniqueMainFlTxt));
				filterPopupUpdate(jQuery('.filterPopupWrapper'+uniqueMainFlTxt));
			});

			jQuery(document).on('click', '.filterPopupWrapper'+uniqueMainFlTxt+' .btn-applyFilter', function(){
				var searchString = [];
				jQuery(this).closest('.filterPopupWrapper').find('.fPopupBody .pf_checkbox').each(function(){
					jQuery(this).find('input:checked').each(function(){
						searchString.push(jQuery(this).val());
					});
				});
				jQuery(this).closest('.filterPopupWrapper').find('.fPopupBody .pf_select').each(function(){
					if (jQuery(this).find('select').val().length > 0) {
						searchString.push(jQuery(this).find('select').val());
					}
				});
				// Searching in Array [] to avoid Bracket Problem in result
				searchString = searchString.join('|');
				var _escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
				searchString = searchString.replace( _escape_parenthesis, '\\$1' );
				fDataTable[tableName].search(searchString, true, false).draw();
				jQuery('.filterPopupWrapper').fadeOut('fast');
			});

			jQuery(document).on('click', '.filterPopupWrapper'+uniqueMainFlTxt+' .btn-clearFilter', function(){
				jQuery('.outerAction'+uniqueMainFlTxt+' .outerFilterContainer .defaultCheckBox').each(function(){
					jQuery(this).find('input[type=checkbox]').prop('checked', false);
				});
				jQuery(this).closest('.filterPopupWrapper').find('.fPopupBody .filterCell').each(function(){
					jQuery(this).find('input[type=checkbox]').prop('checked', false);
				});
				jQuery(this).closest('.filterPopupWrapper').find('.fPopupBody .filterCell').each(function(){
					jQuery(this).find('input:not([type="checkbox"])').val('');
				});
				jQuery(this).closest('.filterPopupWrapper').find('.fPopupBody .filterCell').each(function(){
					jQuery(this).find('select').val('');
				});
				fDataTable[tableName].search('').draw();

				// Outerfilter trigger
				if(jQuery('.outerAction'+uniqueMainFlTxt+' .outerFilterContainer .defaultCheckBox').length){
					var outerFilterString = [];
					if(jQuery('.outerAction'+uniqueMainFlTxt+' .outerFilterContainer .defaultCheckBox').length){
						jQuery('.outerAction'+uniqueMainFlTxt+' .outerFilterContainer .defaultCheckBox').each(function(){
							if(jQuery(this).find('input[type=checkbox]').prop('checked')){ 
								outerFilterString.push(jQuery(this).find('input[type=checkbox]').val());
							}
						});
					}
					outerFilterString = outerFilterString.join('|');
					var o_escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
					outerFilterString = outerFilterString.replace( o_escape_parenthesis, '\\$1' );
					fDataTable[tableName].search(outerFilterString, true, false).draw();
				}
				// setTimeout(function(){
				// 	// fDataTable[tableName].columns().search('').draw();
				// 	jQuery('.filterPopupWrapper').fadeOut('fast');
				// }, 750);
			});
		}
	}
	// Hiding those columns which are still filterable after initialization 
	fDataTable[tableName].columns(searchableColumns).visible(false);

	// filter # based urls 
	var urlFilter = window.location.href;
	var hash = new RegExp("#");
	hash = hash.test(urlFilter);
	var filterBy = '';
	if(hash){ filterBy = urlFilter.split('#')[1]; }
	if(filterBy.length > 0){ 
		filterBy = filterBy.replace(/%20/g, " ").replace(/[/#]+/g, "").toLowerCase(); 
		fDataTable[tableName].search(filterBy).draw();
		if(jQuery('.filterPopupWrapper .filterControls input[value="'+filterBy+'"]').length){
			jQuery('.filterPopupWrapper .filterControls input[value="'+filterBy+'"]').prop('checked', true);
		}
		if(jQuery('.outerAction .outerFilter input[value="'+filterBy+'"]').length){
			jQuery('.outerAction .outerFilter input[value="'+filterBy+'"]').prop('checked', true);
		}
	}
	getLastVisibleColumn();
}
// TableGenerator code ending here.





$(document).ready(function(){
	'use strict';



	$.getJSON("http://localhost/datatables/js/config.json", function(jsn) {
		console.log("http://localhost/datatables/js/config.json");
		tblConfigs = jsn;
		// generateDataTable(emptyData, tblConfigs, elm1); // empty data
		generateDataTable(data4Table2, tblConfigs, elm1); //
		generateDataTable(data4Table, tblConfigs, elm2); //
		// generateDataTable(data4Table); // configuration and element is optional 
		// generateDataTable(data4Table, tblConfigs); // for single datatable in page elm1 is optional
		// generateDataTable(data4Table, tblConfigs, elm1); // for multi datatables in page config & elm1 is compulsory
	});

	// $.getJSON("http://localhost/datatables/js/config2.json", function(jsn) {
	// 	console.log("http://localhost/datatables/js/config2.json");
	// 	tblConfigs = jsn;
	// 	generateDataTable(data4Table, tblConfigs, elm2);
	// });



	var validPin;

	jQuery(window).on("load",function(){
		jQuery('.loadWrapper').fadeOut();
	});
	function ajaxLoaderIn() {
		jQuery('.ajaxLoader').fadeIn('fast');
	}
	function ajaxLoaderOut() {
		setTimeout(function () {
			jQuery('.ajaxLoader').fadeOut('fast');
		}, 500);
	}
	jQuery(document).ajaxStart(function () {
		ajaxLoaderIn();
	});
	jQuery(document).ajaxComplete(function () {
		ajaxLoaderOut();
	});


	function activeMenu(){
		var baseURL = window.location.href;
		if(baseURL.indexOf('#') !== -1){
			baseURL = baseURL.substring(0, baseURL.indexOf('#'));
		}
		jQuery('.sideMenu li a').each(function(){
			if(jQuery(this).attr('href') == baseURL){
				jQuery(this).parent('li').addClass('active').closest('ul').parent('li').addClass('active');
			}
		});
	}activeMenu();

	function pageHeight(){
		if(jQuery('.page-wrapper .loginPage').length < 1){
			var leftArea = jQuery('.fullPage .leftArea').height();
			var pageHeight = jQuery(window).height();
			var headerHeight = jQuery('.page-wrapper .page-header').outerHeight();
			var footerHeight = jQuery('.mainSection .b2bFooter').outerHeight();
			var setHeight = pageHeight-(headerHeight+footerHeight);
			if(setHeight < leftArea){
				setHeight = leftArea;
			}
			jQuery('.mainSection .contentArea').css('min-height',setHeight);
		}
	}pageHeight();
	

	jQuery(document).on('keypress', '.numbersOnly', function (e) {
		if(e.key=="-"||e.key=="+"||e.key=="."){ return false; }
	});
	jQuery(document).on('input', '.numbersOnly', function () { 
		this.value = this.value.replace(/[^0-9]/g, '');
	});
	jQuery(document).on('mouseenter paste', '.numbersOnly', function(){
		var val = jQuery(this).val();
		if (val!='0'){
			val=val.replace(/[^0-9]+/g, "");
			jQuery(this).val(val);
		}
	});



	jQuery(document).on('click', '.closePopup', function() {
		jQuery(this).closest('.thisPopup').fadeOut('fast');
	});

	jQuery(document).on('keyup',function(e) {
		if (e.keyCode == 27) {
			jQuery('.outerFilter .outerFilterContainer').hide();
			jQuery('.headerOptions .profileOption > img').next('ul').slideUp('fast');
			jQuery('.headerOptions .headerNotifications .notifications').slideUp('fast');
			jQuery('.filterPopupWrapper').fadeOut('fast');
			jQuery('.popupWrapper').fadeOut('fast');
			jQuery('.dlPopupWrapper').fadeOut('fast');
			jQuery('.dashboard .info_icon').removeClass('active');
			jQuery('.hamburger.hamburger--squeeze').removeClass('is-active');
			jQuery('.navMenuWrapper').slideUp('fast');
		}
	});

});