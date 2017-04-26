(function($) {

	function ScrollDiv(){

		if(document.getElementById('intro').scrollTop<(document.getElementById('intro').scrollHeight-document.getElementById('intro').offsetHeight)){-1
			document.getElementById('intro').scrollTop=document.getElementById('intro').scrollTop+1
		}
		else {document.getElementById('intro').scrollTop=0;}
	}

	setInterval(ScrollDiv,200)

})();

