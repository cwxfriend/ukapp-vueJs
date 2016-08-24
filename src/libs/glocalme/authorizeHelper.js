
class authorizeHelper{
	authorize(d){
		d.loginCustomerId = localStorage.loginCustomerId;
        var date = new Date();
		d.streamNo = "web_bss" + date.getTime() + parseInt(Math.random() * 1000000);
		d.partnerCode = 'UKWEB';
	}

	deAuthorize(d){	
		delete d.loginCustomerId;
		delete d.streamNo;
		delete d.partnerCode;
	}
}

export default authorizeHelper;