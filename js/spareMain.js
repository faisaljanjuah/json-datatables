$(document).ready(function(){
	'use strict';
	var validPin;
	var screenHeight = jQuery(window).height();



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

	// OuterFilter Check
	jQuery(document).on('click', '.outerFilterBox', function(e) {
		e.stopPropagation();
		jQuery('.outerFilterContainer').stop().toggle();
	});
	jQuery(document).on('click', '.outerFilterContainer * , .outerFilterBox', function(e) {
		e.stopPropagation();
	});
	jQuery(document).on('click', 'html,body', function() {
		var outerFilter = jQuery(".outerFilter .outerFilterContainer");
		outerFilter.hide();
	});// OuterFilter Check End

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


	

	function dfPopupHeight(){
		screenHeight = jQuery(window).height();
		var popupH = jQuery('.filterPopupWrapper .fPopupHeader').outerHeight();
		var popupF = jQuery('.filterPopupWrapper .fPopupFooter').outerHeight();
		jQuery('.dlPopupWrapper .dlPopupContent').css('max-height','none').css('max-height',screenHeight);
		jQuery('.filterPopupWrapper .fPopupBody').css('max-height','none').css('max-height',screenHeight-(popupH+popupF));
	}
	jQuery(document).on('click', '.filterArea .tableFilters', function() {
		showFlPopup();
		dfPopupHeight();
	});


	jQuery(window).resize(function(){
		pageHeight();
		dfPopupHeight();
		jQuery('.filterPopupContent .fPopupBody').mCustomScrollbar('update');
	});





	function showPopup() {
		jQuery('.popupWrapper').fadeIn('fast');
		jQuery('.popupWrapper .qlWrapper .qlContent').mCustomScrollbar({
			axis:"y",
			snapOffset: 2,
			scrollInertia: 150,
			mouseWheelPixels: 80
		});
	}
	function showFlPopup() {
		jQuery('.filterPopupWrapper').fadeIn('fast');
		jQuery('.filterPopupContent .fPopupBody').mCustomScrollbar({
			axis:"y",
			snapOffset: 2,
			scrollInertia: 150,
			mouseWheelPixels: 80
		});
	}
	function showDlPopup() {
		// download Popup here...
	}

	// date test
	var data4Table = JSON.parse('[{"date":"08/10/2018","type":"INVOICE","amount":"Rs 404.00","balance":"Rs 717,000.00","payment_method":" "},{"date":"08/11/2018","type":"INVOICE","amount":"Rs 327.00","balance":"Rs 1,044,000.00","payment_method":" "},{"date":"14/01/2019","type":"INVOICE","amount":"Rs 0.00","balance":"Rs 1,402,000.00","payment_method":" "},{"date":"14/12/2018","type":"INVOICE","amount":"Rs 58.00","balance":"Rs 1,402,000.00","payment_method":" "},{"date":"08/02/2019","type":"INVOICE","amount":"Rs 0.00","balance":"Rs 1,402,000.00","payment_method":" "},{"date":"08/09/2018","type":"INVOICE","amount":"Rs 170.00","balance":"Rs 313,000.00","payment_method":" "},{"date":"26/08/2018","type":"INVOICE","amount":"Rs 143.00","balance":"Rs 143,000.00","payment_method":" "},{"date":"08/12/2018","type":"INVOICE","amount":"Rs 300.00","balance":"Rs 1,344,000.00","payment_method":" "}]');
	// var data4Table = JSON.parse('[{"group":"","status":"","user_info":"BSD-MARKETING . 03080051326","msisdn":"03080051326","outstanding_amount":"Rs. 0","credit_limit":"1000","date":"08/10/2018","package":"Tracker Service","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051355","msisdn":"03080051355","outstanding_amount":"Rs. 250","credit_limit":"1500","date":"08/10/2018","package":"ES Standard","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051325","msisdn":"03080051325","outstanding_amount":"Rs. 0","credit_limit":"1500","date":"08/11/2014","package":"Control - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03080051332","msisdn":"03080051332","outstanding_amount":"Rs. 578","credit_limit":"1000","date":"14/01/2019","package":"M-100","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051323","msisdn":"03080051323","outstanding_amount":"Rs. 0","credit_limit":"1000","date":"14/12/2013","package":"Pro - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"BLOCKED","user_info":"BSD-MARKETING . 03080051358","msisdn":"03080051358","outstanding_amount":"Rs. 300","credit_limit":"1500","date":"08/02/2019","package":"Executive RED","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051356","msisdn":"03080051356","outstanding_amount":"Rs. 0","credit_limit":"1500","date":"08/09/2018","package":"ES Standard","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051327","msisdn":"03080051327","outstanding_amount":"Rs. 0","credit_limit":"1502","date":"26/08/2011","package":"Tracker Service","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Hassan"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051324","msisdn":"03080051324","outstanding_amount":"Rs. -5","credit_limit":"1000","date":"08/12/2018","package":"Control - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"ACTIVE","user_info":"SAMI ULLAH KHAN . 03080051322","msisdn":"03080051322","outstanding_amount":"Rs. 96","credit_limit":"1000","date":"08/10/2010","package":"Pro - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"SAMI ULLAH KHAN .","groupName":"Credit Note (-37)"},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051354","msisdn":"03080051354","outstanding_amount":"Rs. 573","credit_limit":"1000","date":"08/11/2018","package":"M-400","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03080051328","msisdn":"03080051328","outstanding_amount":"Rs. 1402","credit_limit":"1000","date":"14/01/2019","package":"J-300","credit_status":"Credit Limit Exceeded","customer_ref":"1-323723930927","bill_day":"14","due_date":"25-Oct-2018 00:00:00","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"ACTIVE","user_info":"BSD-MARKETING . 03080051357","msisdn":"03080051357","outstanding_amount":"Rs. 3500","credit_limit":"1500","date":"14/12/2015","package":"ES Standard","credit_status":"Credit Limit Exceeded","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":""},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03070981976","msisdn":"03070981976","outstanding_amount":"Rs. 0","credit_limit":"1000","date":"08/02/2019","package":"Pro - Zero","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"},{"group":"","status":"SUSPENDED","user_info":"BSD-MARKETING . 03080051359","msisdn":"03080051359","outstanding_amount":"Rs. 40","credit_limit":"1500","date":"08/09/2016","package":"BIZ 400","credit_status":"","customer_ref":"1-323723930927","bill_day":"14","due_date":"","customer_name":"BSD-MARKETING .","groupName":"Dev Team"}]');

	// var data4Table = JSON.parse('[{"Sr":1,"Name":"Tiger Nixon ( ! ? 123 .[", "Position":"System Architect", "Status":"Active", "Groups":"Technical Department", "Office":"Edinburgh", "Age":60,"Start date":"2011/04/25", "Salary":"$320800"}, {"Sr":2,"Name":"Garrett Winters", "Position":"Accountant", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"Tokyo", "Age":63,"Start date":"2011/07/25", "Salary":"$170750"}, {"Sr":3,"Name":"Ashton Cox", "Position":"Junior Technical Author", "Status":"Pending", "Groups":"Technical Department", "Office":"San Francisco", "Age":66,"Start date":"2009/01/12", "Salary":"$86000"}, {"Sr":4,"Name":"Cedric Kelly", "Position":"Senior Javascript Developer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"Edinburgh", "Age":22,"Start date":"2012/03/29", "Salary":"$433060"}, {"Sr":5,"Name":"Airi Satou", "Position":"Accountant", "Status":"Blocked", "Groups":"Technical Department", "Office":"Tokyo", "Age":33,"Start date":"2008/11/28", "Salary":"$162700"}, {"Sr":6,"Name":"Brielle Williamson", "Position":"Integration Specialist", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"New York", "Age":60,"Start date":"2012/12/02", "Salary":"$372000"}, {"Sr":7,"Name":"Herrod Chandler", "Position":"Sales Assistant", "Status":"Pending", "Groups":"Technical Department", "Office":"San Francisco", "Age":59,"Start date":"2012/08/06", "Salary":"$137500"}, {"Sr":8,"Name":"Rhona Davidson", "Position":"Integration Specialist", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"Tokyo", "Age":55,"Start date":"2010/10/14", "Salary":"$327900"}, {"Sr":9,"Name":"Colleen Hurst", "Position":"Javascript Developer", "Status":"Pending", "Groups":"Technical Department", "Office":"San Francisco", "Age":39,"Start date":"2009/09/15", "Salary":"$205500"}, {"Sr":10,"Name":"Sonya Frost", "Position":"Software Engineer", "Status":"Pending", "Groups":"Technical Department", "Office":"Edinburgh", "Age":23,"Start date":"2008/12/13", "Salary":"$103600"}, {"Sr":11,"Name":"Jena Gaines", "Position":"Office Manager", "Status":"Blocked", "Groups":"Technical Department", "Office":"London", "Age":30,"Start date":"2008/12/19", "Salary":"$90560"}, {"Sr":12,"Name":"Quinn Flynn", "Position":"Support Lead", "Status":"Blocked", "Groups":"Admin Workers", "Office":"Edinburgh", "Age":22,"Start date":"2013/03/03", "Salary":"$342000"}, {"Sr":13,"Name":"Charde Marshall", "Position":"Regional Director", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":36,"Start date":"2008/10/16", "Salary":"$470600"}, {"Sr":14,"Name":"Haley Kennedy", "Position":"Senior Marketing Designer", "Status":"Active", "Groups":"Admin Workers", "Office":"London", "Age":43,"Start date":"2012/12/18", "Salary":"$313500"}, {"Sr":15,"Name":"Tatyana Fitzpatrick", "Position":"Regional Director", "Status":"Active", "Groups":"Technical Department", "Office":"London", "Age":19,"Start date":"2010/03/17", "Salary":"$385750"}, {"Sr":16,"Name":"Michael Silva", "Position":"Marketing Designer", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"London", "Age":66,"Start date":"2012/11/27", "Salary":"$198500"}, {"Sr":17,"Name":"Paul Byrd", "Position":"Chief Financial Officer (CFO)", "Status":"Active", "Groups":"Technical Department", "Office":"New York", "Age":64,"Start date":"2010/06/09", "Salary":"$725000"}, {"Sr":18,"Name":"Gloria Little", "Position":"Systems Administrator", "Status":"Blocked", "Groups":"Technical Department", "Office":"New York", "Age":59,"Start date":"2009/04/10", "Salary":"$237500"}, {"Sr":19,"Name":"Bradley Greer", "Position":"Software Engineer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"London", "Age":41,"Start date":"2012/10/13", "Salary":"$132000"}, {"Sr":20,"Name":"Dai Rios", "Position":"Personnel Lead", "Status":"Blocked", "Groups":"Technical Department", "Office":"Edinburgh", "Age":35,"Start date":"2012/09/26", "Salary":"$217500"}, {"Sr":21,"Name":"Jenette Caldwell", "Position":"Development Lead", "Status":"Pending", "Groups":"Technical Department", "Office":"New York", "Age":30,"Start date":"2011/09/03", "Salary":"$345000"}, {"Sr":22,"Name":"Yuri Berry", "Position":"Chief Marketing Officer (CMO)", "Status":"Pending", "Groups":"Technical Department", "Office":"New York", "Age":40,"Start date":"2009/06/25", "Salary":"$675000"}, {"Sr":23,"Name":"Caesar Vance", "Position":"Pre-Sales Support", "Status":"Active", "Groups":"Admin Workers", "Office":"New York", "Age":21,"Start date":"2011/12/12", "Salary":"$106450"}, {"Sr":24,"Name":"Doris Wilder", "Position":"Sales Assistant", "Status":"Active", "Groups":"Admin Workers", "Office":"Sidney", "Age":23,"Start date":"2010/09/20", "Salary":"$85600"}, {"Sr":25,"Name":"Angelica Ramos", "Position":"Chief Executive Officer (CEO)", "Status":"Blocked", "Groups":"Admin Workers", "Office":"London", "Age":47,"Start date":"2009/10/09", "Salary":"$1200000"}, {"Sr":26,"Name":"Gavin Joyce", "Position":"Developer", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"Edinburgh", "Age":42,"Start date":"2010/12/22", "Salary":"$92575"}, {"Sr":27,"Name":"Jennifer Chang", "Position":"Regional Director", "Status":"Active", "Groups":"Technical Department", "Office":"Singapore", "Age":28,"Start date":"2010/11/14", "Salary":"$357650"}, {"Sr":28,"Name":"Brenden Wagner", "Position":"Software Engineer", "Status":"Active", "Groups":"Marketing Department", "Office":"San Francisco", "Age":28,"Start date":"2011/06/07", "Salary":"$206850"}, {"Sr":29,"Name":"Fiona Green", "Position":"Chief Operating Officer (COO)", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":48,"Start date":"2010/03/11", "Salary":"$850000"}, {"Sr":30,"Name":"Shou Itou", "Position":"Regional Marketing", "Status":"Pending", "Groups":"Marketing Department", "Office":"Tokyo", "Age":20,"Start date":"2011/08/14", "Salary":"$163000"}, {"Sr":31,"Name":"Michelle House", "Position":"Integration Specialist", "Status":"Blocked", "Groups":"Admin Workers", "Office":"Sidney", "Age":37,"Start date":"2011/06/02", "Salary":"$95400"}, {"Sr":32,"Name":"Suki Burks", "Position":"Developer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"London", "Age":53,"Start date":"2009/10/22", "Salary":"$114500"}, {"Sr":33,"Name":"Prescott Bartlett", "Position":"Technical Author", "Status":"Pending", "Groups":"Marketing Department", "Office":"London", "Age":27,"Start date":"2011/05/07", "Salary":"$145000"}, {"Sr":34,"Name":"Gavin Cortez", "Position":"Team Leader", "Status":"Active", "Groups":"Admin Workers", "Office":"San Francisco", "Age":22,"Start date":"2008/10/26", "Salary":"$235500"}, {"Sr":35,"Name":"Martena Mccray", "Position":"Post-Sales support", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Edinburgh", "Age":46,"Start date":"2011/03/09", "Salary":"$324050"}, {"Sr":36,"Name":"Unity Butler", "Position":"Marketing Designer", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"San Francisco", "Age":47,"Start date":"2009/12/09", "Salary":"$85675"}, {"Sr":37,"Name":"Howard Hatfield", "Position":"Office Manager", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":51,"Start date":"2008/12/16", "Salary":"$164500"}, {"Sr":38,"Name":"Hope Fuentes", "Position":"Secretary", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":41,"Start date":"2010/02/12", "Salary":"$109850"}, {"Sr":39,"Name":"Vivian Harrell", "Position":"Financial Controller", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"San Francisco", "Age":62,"Start date":"2009/02/14", "Salary":"$452500"}, {"Sr":40,"Name":"Timothy Mooney", "Position":"Office Manager", "Status":"Active", "Groups":"All Managers of ISB Office", "Office":"London", "Age":37,"Start date":"2008/12/11", "Salary":"$136200"}, {"Sr":41,"Name":"Jackson Bradshaw", "Position":"Director", "Status":"Active", "Groups":"Marketing Department", "Office":"New York", "Age":65,"Start date":"2008/09/26", "Salary":"$645750"}, {"Sr":42,"Name":"Olivia Liang", "Position":"Support Engineer", "Status":"Pending", "Groups":"Marketing Department", "Office":"Singapore", "Age":64,"Start date":"2011/02/03", "Salary":"$234500"}, {"Sr":43,"Name":"Bruno Nash", "Position":"Software Engineer", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"London", "Age":38,"Start date":"2011/05/03", "Salary":"$163500"}, {"Sr":44,"Name":"Sakura Yamamoto", "Position":"Support Engineer", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Tokyo", "Age":37,"Start date":"2009/08/19", "Salary":"$139575"}, {"Sr":45,"Name":"Thor Walton", "Position":"Developer", "Status":"Pending", "Groups":"Marketing Department", "Office":"New York", "Age":61,"Start date":"2013/08/11", "Salary":"$98540"}, {"Sr":46,"Name":"Finn Camacho", "Position":"Support Engineer", "Status":"Pending", "Groups":"Marketing Department", "Office":"San Francisco", "Age":47,"Start date":"2009/07/07", "Salary":"$87500"}, {"Sr":47,"Name":"Serge Baldwin", "Position":"Data Coordinator", "Status":"Active", "Groups":"Admin Workers", "Office":"Singapore", "Age":64,"Start date":"2012/04/09", "Salary":"$138575"}, {"Sr":48,"Name":"Zenaida Frank", "Position":"Software Engineer", "Status":"Active", "Groups":"Admin Workers", "Office":"New York", "Age":63,"Start date":"2010/01/04", "Salary":"$125250"}, {"Sr":49,"Name":"Zorita Serrano", "Position":"Software Engineer", "Status":"Pending", "Groups":"Admin Workers", "Office":"San Francisco", "Age":56,"Start date":"2012/06/01", "Salary":"$115000"}, {"Sr":50,"Name":"Jennifer Acosta", "Position":"Junior Javascript Developer", "Status":"Pending", "Groups":"Marketing Department", "Office":"Edinburgh", "Age":43,"Start date":"2013/02/01", "Salary":"$75650"}, {"Sr":51,"Name":"Cara Stevens", "Position":"Sales Assistant", "Status":"Blocked", "Groups":"Admin Workers", "Office":"New York", "Age":46,"Start date":"2011/12/06", "Salary":"$145600"}, {"Sr":52,"Name":"Hermione Butler", "Position":"Regional Director", "Status":"Blocked", "Groups":"All Managers of ISB Office", "Office":"London", "Age":47,"Start date":"2011/03/21", "Salary":"$356250"}, {"Sr":53,"Name":"Lael Greer", "Position":"Systems Administrator", "Status":"Pending", "Groups":"Marketing Department", "Office":"London", "Age":21,"Start date":"2009/02/27", "Salary":"$103500"}, {"Sr":54,"Name":"Jonas Alexander", "Position":"Developer", "Status":"Pending", "Groups":"All Managers of ISB Office", "Office":"San Francisco", "Age":30,"Start date":"2010/07/14", "Salary":"$86500"}, {"Sr":55,"Name":"Shad Decker", "Position":"Regional Director", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Edinburgh", "Age":51,"Start date":"2008/11/13", "Salary":"$183000"}, {"Sr":56,"Name":"Michael Bruce", "Position":"Javascript Developer", "Status":"Blocked", "Groups":"Marketing Department", "Office":"Singapore", "Age":29,"Start date":"2011/06/27", "Salary":"$183000"}, {"Sr":57,"Name":"Donna Snider", "Position":"Customer Support", "Status":"Active", "Groups":"Marketing Department", "Office":"New York", "Age":27,"Start date":"2011/01/25", "Salary":"$112000"}]');

	// var tblConfigs = {"checkbox":true,"status":false,"identifier":"Sr","filters":true,"searchable":true,"language":"en","outerFilter":"Office","hideColumns":"","customFilters":[{"collumnName":"outstangings","type":"select"},{"collumnName":"flags","type":"checkbox"},{"collumnName":"price","type":"range"}],"addColumn":[{"headerText":"Action","addButtons":[{"buttonText":"","class":"actionEdit"},{"buttonText":"","class":"actionDelete"},{"buttonText":"","class":"actionView"}]},{"headerText":"More Action","addButtons":[{"buttonText":"Pay Bill","class":"btn-primary"}]},{"headerText":"More Action","addButtons":[{"buttonText":"Ledger","class":"btn-secondary"}]}]};

	var tblConfigs;

	var elm1='.tbl2nd';
	var elm2='#tbl3rd';

	$.getJSON("http://localhost/datatables/js/config.json", function(json) {
		tblConfigs = json;
		// generateDataTable(data4Table, tblConfigs); // , tblConfigs
		generateDataTable(data4Table, tblConfigs, elm1); // , tblConfigs
		// generateDataTable(data4Table, tblConfigs, elm2); // , tblConfigs
	});

	function getLastVisibleColumn(){
		jQuery('table.dataTable tr td').removeClass('resVisible');
		jQuery('table.dataTable tr').each(function(){
			jQuery(this).find('td:visible:last').addClass('resVisible');
		});
	}getLastVisibleColumn();



	function generateDataTable(tableData, tableConfig, onElement){
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

				var uniqueTxt = '';
				if(onElement==undefined || onElement.length<1){
					onElement='';
				}
				if(onElement!=undefined && jQuery(onElement).length<1){
					onElement='';
				}
				if(onElement!=undefined && jQuery(onElement).length>0){
					onElement = onElement + ' ';
					uniqueTxt = onElement.replace(/[^A-Za-z0-9]/g,"");
				}

				var tableHtml = '',
				language='en',
				hideColumns = [],
				searchableColumns = [],
				rowsLength = 10, // show Records per page
				pageInfo = true, // page Info "Showing 1 to 10 of 57"
				lengthChange = false, // Change Records per Page Dropdown
				recordsInfo = ['Showing ', ' of '];

				// Hide Columns -> "Groups", "Status", "Start date" 

				var lengthMenu = [[rowsLength, 25, 50, 100,-1],[rowsLength, 25, 50, 100, 'All']];

				tableHtml += '<table class="jDataTable">';
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
				jQuery(onElement + '.mainDataTable').html(tableHtml);


				function activateBtn(){
					if(jQuery(onElement+'.jDataTable tbody tr td:first-child input:checked').length){
						jQuery(onElement+'.mainDataTable').closest('.row').find('.btn-table-action').removeAttr('disabled');
					}
					else {
						jQuery(onElement+'.mainDataTable').closest('.row').find('.btn-table-action').attr('disabled','disabled');
					}
				}

				
				if(tableConfig != undefined){

					if( tableConfig.changeLength != undefined && tableConfig.changeLength == true ){
						lengthChange = true;
					}
					if( tableConfig.recordInfo == undefined || tableConfig.recordInfo == false ){
						pageInfo = false;
					}

					// Create Checkboxes
					if((tableConfig.selectable != undefined) && (tableConfig.identifier != undefined) && (tableConfig.selectable == true) && (tableConfig.identifier.length > 0)){

						var checkboxCol = 1;
						var identifierFound = false;
						jQuery(onElement + '.mainDataTable .jDataTable thead tr th').each(function(e){
							if(jQuery(this).text().toLowerCase() == tableConfig.identifier.toLowerCase()){
								checkboxCol = e+1; // making index from 0 to 1...
								identifierFound = true;
							}
						});
						if(identifierFound){
							jQuery(onElement + '.mainDataTable .jDataTable').addClass('selectableRows hasActions');
							jQuery(onElement + '.mainDataTable .jDataTable thead tr').prepend('<th data-orderable="false" class="noExport"><div class="defaultCheckBox"><input type="checkbox" id="jSelectAllRows_'+uniqueTxt+'" /><label class="hideText" for="jSelectAllRows_'+uniqueTxt+'">Select All</label></div></th>'); // making Header Checkbox
							jQuery(onElement + '.mainDataTable .jDataTable tbody tr').each(function(){
								var val = jQuery(this).find('td:nth-child('+checkboxCol+')').text();
								jQuery(this).prepend('<td class="noSelect"><div class="defaultCheckBox"><input type="checkbox" id="'+val.toString().replace(/[^A-Za-z0-9_-]/g,"")+'" /><label for="'+val.toString().replace(/[^A-Za-z0-9_-]/g,"")+'"></label></div></td>');
							}); // making Checkbox on the rows
							// check all or few
							activateBtn();
							jQuery(document).on('change', onElement+'.jDataTable tbody tr td:first-child input[type="checkbox"]', function(){
								activateBtn();
							});
							jQuery(document).on('click', '#jSelectAllRows_'+uniqueTxt, function(){
								jQuery(onElement+'.jDataTable tbody tr td:first-child input:checkbox').prop('checked', this.checked);
								activateBtn();
							});
							jQuery(document).on('click', onElement+'.jDataTable tbody tr td:first-child input:checkbox', function(){
								var allChecks = true;
								jQuery(onElement+'.jDataTable tbody tr td:first-child input:checkbox').each(function(){
									if(jQuery(this).prop("checked") == false){ 
										allChecks = false;
									}
								});
								if(allChecks){ jQuery(onElement+'#jSelectAllRows_'+uniqueTxt).prop('checked', true); }
								else { jQuery(onElement+'#jSelectAllRows_'+uniqueTxt).prop('checked', false); }
							});
						}
					}

					// Action Buttons
					if(tableConfig.addColumn != undefined && tableConfig.addColumn.length > 0 && tableConfig.identifier != undefined && tableConfig.identifier.length > 0){
						var nthCol = 1;
						var identifierFound = false;
						jQuery(onElement + '.mainDataTable .jDataTable thead tr th').each(function(i){
							if(jQuery(this).text().toLowerCase() == tableConfig.identifier.toLowerCase()){
								nthCol = i+1; // making index from 0 to 1...
								identifierFound = true;
							}
						});
						if(identifierFound){
							jQuery(onElement + '.mainDataTable .jDataTable').addClass('actionBtns hasActions');
							for(var ac=0; ac<tableConfig.addColumn.length; ac++){
								var headerText = '';
								if(tableConfig.addColumn[ac].headerText != undefined ){
									headerText = tableConfig.addColumn[ac].headerText;
								}
								jQuery(onElement + '.mainDataTable .jDataTable thead tr').append('<th data-orderable="false" class="noExport">'+headerText+'</th>');
								jQuery(onElement + '.mainDataTable .jDataTable tbody tr').each(function(){
									if(tableConfig.addColumn[ac].addButtons != undefined && tableConfig.addColumn[ac].addButtons.length > 0){
										var actionButton = '';
										var identifierTxt = jQuery(this).find('td:nth-child('+nthCol+')').text();
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
						}
					}

					// Status Check
					if(tableConfig.status != undefined && tableConfig.status == true){
						var statusCol = 1;
						var statusColFound = false;
						jQuery(onElement + '.mainDataTable .jDataTable thead tr th').each(function(e){
							if('status' == jQuery(this).text().toLowerCase()){
								jQuery(this).addClass('hideText');
								statusCol = e+1; // start index from 1 instead of 0
								statusColFound = true;
							}
						});
						if(statusColFound){
							jQuery(onElement + '.mainDataTable .jDataTable tbody tr').each(function(){
								var statusClass = jQuery(this).find('td:nth-child('+statusCol+')').text();
								jQuery(this).find('td:nth-child('+statusCol+')').html('').html('<span title="'+capitalCase(statusClass)+'" class="statusIcon '+statusClass.replace(/[^A-Za-z0-9]/g,'').toLowerCase()+'">'+statusClass.replace(/[^A-Za-z0-9]/g,'')+'</span>');
							});
						}
					}

					// Hide Columns
					if(tableConfig.hideColumns != undefined && tableConfig.hideColumns.length > 0){
						jQuery(onElement + '.mainDataTable .jDataTable thead tr th').each(function(c){
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
							jQuery(onElement + '.mainDataTable .jDataTable thead th').each(function(nthChild){
								thText = jQuery(this).text().toLowerCase();
								var nthChild = nthChild + 1; // change array order to number [0 to 1]
								if(thText==colName){
									if((tableConfig.numericSorting[i].sortType != undefined) && (tableConfig.numericSorting[i].sortType == 'date')){
										var dateSort = tableConfig.numericSorting[i].sortType.toLowerCase();
										jQuery(onElement + '.mainDataTable .jDataTable tbody td:nth-child('+nthChild+')').each(function(nthChild){
											var thisDate = jQuery(this).text().split("/").reverse().join("").replace('/','');
											jQuery(this).attr('data-order', thisDate);
										});
									}
									else {
										jQuery(onElement + '.mainDataTable .jDataTable tbody td:nth-child('+nthChild+')').each(function(nthChild){
											jQuery(this).attr('data-order', convertIntoNumber(jQuery(this).text()));
										});
									}
								}
							});
						}
					}


				}

				var fileTitle = (jQuery('.pageTitle h1').text()+'_'+jQuery('.headerOptions .userID #userIdvalue').text()).replace(' ','_');

				// Assigning Column Numbers
				jQuery(onElement + '.mainDataTable .jDataTable thead tr th').each(function(i){
					jQuery(this).attr('data-column', i);
				});

				var table = jQuery(onElement + '.jDataTable').DataTable({
					dom: 'rt<"LengthInfo"il>pB',
					aaSorting: [], // disable Default Sorting on first Column
					info: pageInfo,
					// autoWidth: false, // disable width calculations
					responsive: true,
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
							}
						},
						{
							extend: 'csv',
							title: fileTitle,
							className: 'btn btn-sm btn-secondary',
							exportOptions: {
								columns: ':not(th.noExport)'
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
						jQuery(onElement + '.jDataTable').attr('data-rows',this.api().page.info().recordsDisplay);
					}
				});

				if(tableConfig != undefined){
					// Downloadable data as PDF || CSV
					if(!(tableConfig.downloadable == undefined || tableConfig.downloadable == false)){
						var downloadPopupHtml = '<div class="popupMainIcon download"></div><h3>Download lines data as</h3><div class="buttonsHolder"><div class="downloadAs"><input type="radio" name="downloadData" value="buttons-pdf" checked id="downAsPDF_'+uniqueTxt+'" class="downAsPDF" /><label for="downAsPDF_'+uniqueTxt+'"><span></span></label></div><div class="downloadAs"><input type="radio" name="downloadData" value="buttons-csv" id="downAsCSV_'+uniqueTxt+'" class="downAsCSV" /><label for="downAsCSV_'+uniqueTxt+'"><span></span></label></div></div><div class="bi-btns"><button class="btn btn-sm btn-secondary closePopup">Cancel</button><button class="btn btn-sm btn-download_'+uniqueTxt+'">Download</button></div>';

						if(!jQuery(onElement+'.mainDataTable').next('.tableAfter').length){
							jQuery(onElement + '.mainDataTable').after('<div class="col-xs-12 tableAfter"></div>');
						}
						if(!jQuery(onElement+'.mainDataTable').next('.tableAfter').find('.optionalRow').length){
							jQuery(onElement + '.mainDataTable').next('.tableAfter').append('<div class="optionalRow"></div>');
						}
						jQuery(onElement + '.mainDataTable').next('.tableAfter').find('.optionalRow').prepend('<button class="btn btn-sm icon-left btn-secondary downloadTblData_'+uniqueTxt+'">Download <span class="btnIcon download"></span></button>');

						jQuery(document).on('click', '.downloadTblData_'+uniqueTxt, function(){
							jQuery('.dlPopupWrapper .dlPopupContent').html('').append(downloadPopupHtml);
							jQuery('.dlPopupWrapper').fadeIn('fast');
						});
						jQuery(document).on('click', '.dlPopupWrapper .btn-download_'+uniqueTxt, function(){
							if(jQuery('#downAsPDF_'+uniqueTxt).prop('checked') == true){
								jQuery(onElement+'.dt-buttons .dt-button.buttons-pdf').click();
							}
							if(jQuery('#downAsCSV_'+uniqueTxt).prop('checked') == true){
								jQuery(onElement+'.dt-buttons .dt-button.buttons-csv').click();
							}
						});
					}

					// Add Searchbar Function
					if(tableConfig.searchable == true){
						var searchboxString = '';
						if(!jQuery(onElement+'.mainDataTable').closest('.row').find('.filterArea').length){
							jQuery(onElement + '.mainDataTable').before('<div class="col-xs-12 filterArea"></div>');
						}
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
								table.search(searchboxString, true, false).draw();
							}
						});
						jQuery(document).on('keyup', '#dtSearch_'+uniqueTxt, function(s){
							var o_escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
							searchboxString = s.target.value.replace( o_escape_parenthesis, '\\$1' );
							table.search(searchboxString, true, false).draw();
						});
						jQuery(document).on('click', '.resetSearch_'+uniqueTxt, function(){
							jQuery('.filterPopupWrapper .fPopupBody .filterCell').each(function(){
								jQuery(this).find('input[type=checkbox]').prop('checked', false);
							});
							jQuery('.filterPopupWrapper .fPopupBody .filterCell').each(function(){
								jQuery(this).find('input:not([type="checkbox"])').val('');
							});
							jQuery('.filterPopupWrapper .fPopupBody .filterCell').each(function(){
								jQuery(this).find('select').val('');
							});
							table.search("").draw(); // reset DataTable
						});
					}

					// Add Outer Filter
					if(tableConfig.outerFilter != undefined && tableConfig.outerFilter.length > 0){
						var checkArray = [], thText = '', colName = tableConfig.outerFilter.toLowerCase();
						jQuery(onElement + '.mainDataTable .jDataTable thead th').each(function(){
							thText = jQuery(this).text().toLowerCase();
							if(thText==colName){ jQuery(this).addClass('outerFilterColumn'); }
						});
						table.columns('.outerFilterColumn').every(function(){
							var column = this;
							var outerFilterHTML = '<div class="outerAction">';
							outerFilterHTML += '<div class="outerFilter">';
							outerFilterHTML += '<div class="outerFilterBox"><label class="outerFilterText">Select <span></span></label></div>';
							outerFilterHTML += '<div class="outerFilterContainer"></div></div>';
							outerFilterHTML += '</div><input type="hidden" class="outerFilterString" value="" /></div>';
							jQuery('.pageTitle').prepend(outerFilterHTML);
							jQuery('.outerFilter .outerFilterText span').text(colName);

							var checkboxes = '';
							var columnData = this.cache('search');
							var uniqueData = [];
							jQuery.each(columnData, function(i, el){
								if(jQuery.inArray(el, uniqueData) === -1) uniqueData.push(el);
							});
							jQuery.each(uniqueData, function(d, e){
								if(e.length>0){
									checkboxes += '<div class="defaultCheckBox"><input type="checkbox" id="otck'+d+'" value="'+e+'" /><label for="otck'+d+'">'+e+'</label></div>';
								}
							});
							jQuery('.outerFilter .outerFilterContainer').html(checkboxes);
							jQuery('.outerFilter .outerFilterText span').text(tableConfig.outerFilter.replace(/_/g," "));
							jQuery(document).on('change', '.pageTitle .outerAction input', function(){
								checkArray = []; // flushing Array for empty entries
								jQuery('.pageTitle .outerAction input').each(function(){
									if(jQuery(this).prop('checked')){ checkArray.push(jQuery(this).val()); }
								});
								checkArray = checkArray.join('|');
								var o_escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
								checkArray = checkArray.replace( o_escape_parenthesis, '\\$1' );
								table.search(checkArray, true, false).draw();
							});
						});
					}

					// Add Multi Filters
					if((tableConfig.filters != undefined) && (tableConfig.filters.length)){

						if(!jQuery(onElement+'.mainDataTable').closest('.row').find('.filterArea').length){
							jQuery(onElement + '.mainDataTable').before('<div class="col-xs-12 filterArea"></div>');
						}
						jQuery(onElement + '.mainDataTable').prev('.filterArea').append('<div class="btn btn-secondary tableFilters">Filters</div>');

						// jQuery('.filterArea > div').append('<div class="btn btn-secondary tableFilters">Filters</div>');
						for(var i=0; i<tableConfig.filters.length; i++){
							var thText = '', colName = tableConfig.filters[i].columnName.toLowerCase();
							jQuery(onElement + '.mainDataTable .jDataTable thead th').each(function(){
								thText = jQuery(this).text().toLowerCase();
								if(thText==colName){ jQuery(this).addClass('jfilter_'+tableConfig.filters[i].filterType); }
							});
						}

						function checkboxOfCol(){
							table.columns('.jfilter_checkbox').every(function(i) {
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
										checkbox += '<div class="defaultCheckBox"><input type="checkbox" id="flCk_'+i+'_'+d+'" value="'+e.toLowerCase()+'" /><label for="flCk_'+i+'_'+d+'">'+e+'</label></div>';
									}
								});
								if(checkbox.length>0){
									var filterHTML = '<div data-column="'+i+'" class="filterCell pf_checkbox" id="filterCol_'+i+'">';
									filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
									filterHTML += '<div class="filterControls"></div>';
									filterHTML += '</div>';
									jQuery('.filterPopupWrapper .fPopupBody .fBodyScroll').append(filterHTML);
									jQuery('#filterCol_'+i+' .filterControls').append(checkbox);
								}
							});
						}checkboxOfCol();

						function selectOfCol(){
							table.columns('.jfilter_select').every(function(i) {
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
									var filterHTML = '<div data-column="'+i+'" class="filterCell pf_select" id="filterCol_'+i+'">';
									filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
									filterHTML += '<div class="filterControls"></div>';
									filterHTML += '</div>';
									jQuery('.filterPopupWrapper .fPopupBody .fBodyScroll').append(filterHTML);
									jQuery('#filterCol_'+i+' .filterControls').append(select);
								}
							});
						}selectOfCol();

						function rangeOfCol(){
							table.columns('.jfilter_range').every(function(i) {
								var rangeHtml = '<div class="rangeBox rangeBox_'+i+'"><input placeholder="Min" type="number" class="numbersOnly" id="rangeMin_'+i+'" /><input placeholder="Max" type="number" class="numbersOnly" id="rangeMax_'+i+'" /></div>';
								var filterHTML = '<div data-column="'+i+'" class="filterCell pf_range" id="filterCol_'+i+'">';
								filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
								filterHTML += '<div class="filterControls">'+rangeHtml+'</div>';
								filterHTML += '</div>';
								jQuery('.filterPopupWrapper .fPopupBody .fBodyScroll').append(filterHTML);

								jQuery.fn.dataTable.ext.search.push(
									function( settings, data, dataIndex ) {
										var rangeMin = convertIntoNumber(jQuery('#rangeMin_'+i).val());
										var rangeMax = convertIntoNumber(jQuery('#rangeMax_'+i).val());
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
								jQuery(document).on('keyup','#rangeMin_'+i+', #rangeMax_'+i, function(){
									table.draw();
								});
							});
						}rangeOfCol();

						function dateRangeOfCol(){
							table.columns('.jfilter_date').every(function(i) {
								var dateHtml = '<div class="dateBox dateMin_'+i+'"><input placeholder="Date From" type="text" class="datepicker dateFrom" readonly id="dateMin_'+i+'" /><div class="dPopup minDatePopup_'+i+'"></div></div><div class="dateBox dateMax_'+i+'"><input placeholder="Date To" type="text" class="datepicker dateTo" readonly id="dateMax_'+i+'" /><div class="dPopup maxDatePopup_'+i+'"></div></div>';
								var filterHTML = '<div data-column="'+i+'" class="filterCell pf_date" id="filterCol_'+i+'">';
								filterHTML += '<div class="filterTitle"><h4>'+this.header().innerHTML+'</h4></div>';
								filterHTML += '<div class="filterControls">'+dateHtml+'</div>';
								filterHTML += '</div>';
								jQuery('.filterPopupWrapper .fPopupBody .fBodyScroll').append(filterHTML);

								jQuery.fn.dataTable.ext.search.push(
									function( settings, data, dataIndex ) {
										var dateMin = jQuery('#dateMin_'+i).val().replace(/[^0-9]/g, "");
										var dateMax = jQuery('#dateMax_'+i).val().replace(/[^0-9]/g, "");
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

								jQuery("#dateMin_"+i).datepicker({
									changeMonth: true,
									changeYear: true,
									showButtonPanel: true,
									dateFormat: "yy/mm/dd",
									onSelect: function() {
										table.draw();
									},
									beforeShow:function(){
										jQuery('.minDatePopup_'+i).append(jQuery('#ui-datepicker-div'));
									}
								});
								jQuery("#dateMax_"+i).datepicker({
									changeMonth: true,
									changeYear: true,
									showButtonPanel: true,
									dateFormat: "yy/mm/dd",
									onSelect: function() {
										table.draw();
									},
									beforeShow:function(){
										jQuery('.maxDatePopup_'+i).append(jQuery('#ui-datepicker-div'));
									}
								});
							});
						}dateRangeOfCol();

						jQuery(document).on('click', '.filterPopupWrapper .btn-applyFilter', function(){
							var searchString = [];
							jQuery('.filterPopupWrapper .fPopupBody .pf_checkbox').each(function(){
								jQuery(this).find('input:checked').each(function(){
									searchString.push(jQuery(this).val());
								});
							});
							jQuery('.filterPopupWrapper .fPopupBody .pf_select').each(function(){
								if (jQuery(this).find('select').val().length > 0) {
									searchString.push(jQuery(this).find('select').val());
								}
							});
							// Searching in Array [] to avoid Bracket Problem in result
							searchString = searchString.join('|');
							var _escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
							searchString = searchString.replace( _escape_parenthesis, '\\$1' );
							table.search(searchString, true, false).draw();
							jQuery('.filterPopupWrapper').fadeOut('fast');
						});

						jQuery(document).on('click', '.filterPopupWrapper .btn-clearFilter', function(){
							jQuery('.filterPopupWrapper .fPopupBody .filterCell').each(function(){
								jQuery(this).find('input[type=checkbox]').prop('checked', false);
							});
							jQuery('.filterPopupWrapper .fPopupBody .filterCell').each(function(){
								jQuery(this).find('input:not([type="checkbox"])').val('');
							});
							jQuery('.filterPopupWrapper .fPopupBody .filterCell').each(function(){
								jQuery(this).find('select').val('');
							});
							table.search('').draw();
							// setTimeout(function(){
							// 	// table.columns().search('').draw();
							// 	jQuery('.filterPopupWrapper').fadeOut('fast');
							// }, 750);
						});
					}
				}
				// Hiding those columns which are still filterable after initialization 
				table.columns(searchableColumns).visible(false);

				// filter # based urls 
				var urlFilter = window.location.href;
				var hash = new RegExp("#");
				hash = hash.test(urlFilter);
				var filterBy = '';
				if(hash){ filterBy = urlFilter.split('#')[1]; }
				if(filterBy.length > 0){ 
					filterBy = filterBy.replace(/%20/g, " ").replace(/[/#]+/g, "").toLowerCase(); 
					table.search(filterBy).draw();
					if(jQuery('.filterPopupWrapper .filterControls input[value="'+filterBy+'"]').length){
						jQuery('.filterPopupWrapper .filterControls input[value="'+filterBy+'"]').prop('checked', true);
					}
					if(jQuery('.pageTitle .outerAction .outerFilter input[value="'+filterBy+'"]').length){
						jQuery('.pageTitle .outerAction .outerFilter input[value="'+filterBy+'"]').prop('checked', true);
					}
				}
				getLastVisibleColumn();
	}
});